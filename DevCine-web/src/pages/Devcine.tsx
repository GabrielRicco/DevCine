import axios from "axios"
import { useEffect, useState } from "react"
import { Card, CardProps } from "../components/Card"
import { Button } from "../components/ui/button"
import { EmptyMovies } from "../components/EmptyMovies"

import { SignOut, Popcorn, FilmReel, UserCircle, Ticket } from '@phosphor-icons/react'
import Logo from '../../public/Retropix-removebg-preview.png'

export interface UserProps {
  id: string
  name: string
  username: string
}

export function Devcine() {
  const [currentUser, setCurrentUser] = useState<UserProps>()
  const [movies, setMovies] = useState<CardProps[]>([])
  const [filmesAtual, setFilmesAtual] = useState<string>('/');
  const [activeButton, setActiveButton] = useState<string>('/');

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser')
    if(storedUser) {
      setCurrentUser(JSON.parse(storedUser))
    }
  }, [])

  useEffect(() => {
    getMoviesToShow()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser, filmesAtual])

  function logout() {
    localStorage.removeItem('currentUser')

    window.location.href = "/"
  }

  function changeFilmes(category: string) {
    setFilmesAtual(category);
    setActiveButton(category)
  }

  async function getMoviesToShow() {
    if(filmesAtual === '/rented') {
      const response = await axios.get("http://localhost:8080/movies/rented")
      setMovies(response.data)
    } else if(filmesAtual === '/notRented') {
      const response = await axios.get("http://localhost:8080/movies/notRented")
      setMovies(response.data)
    } else if(filmesAtual === `/${currentUser?.id}`) {
      const response = await axios.get(`http://localhost:8080/movies/${currentUser?.id}`)
      setMovies(response.data)
    } else if(filmesAtual === '/') {
      const response = await axios.get(`http://localhost:8080/movies/`)
      setMovies(response.data)
    }
  }

  const Empty = movies.length === 0

  return (
    <>
    {currentUser ? (
      <div>
        <header className="flex items-center justify-center gap-4 mt-2 mb-5">
          <h1>Olá <span className="bg-red-950 rounded-full p-2 font-bold">{currentUser?.name}</span></h1>
    
          <button className="hover:bg-red-950 rounded-full p-2 transition-colors" onClick={logout}><SignOut size={32} /></button>
        </header>

        <main className="flex justify-center items-center">
          <h1 className="flex items-center justify-center">
            <img src={Logo} alt="Logo do DevCine" />
          </h1>

          <div className="flex flex-col items-center justify-center gap-6 max-w-lg">
            <h2 className="text-4xl font-bold text-red-900 flex items-start w-full">O sistema perfeito para sua locadora!</h2>
            <p className="w-full break-words">No DevCine você pode criar sua conta e escolher o filme que quiser! (<span className="text-red-900">caso esteja disponível claro</span>), so basta clicar em alugar, e seu filme já estará te esperando no balcão, caso queira devolver, basta clicar em devolver e entregar o filme.<br /> iai, bora assistir?</p>
          </div>
        </main>

        <div className="flex items-center justify-center gap-6">
          <Button 
            onClick={() => changeFilmes('/')}
            className={`${activeButton === "/" ? 'text-red-800 bg-white' : ''} hover:bg-white hover:text-red-800 transition-colors rounded flex items-center gap-1`}
            disabled={activeButton === "/"}
          >
            <Popcorn size={16} />TODOS OS FILMES
          </Button>

          <Button 
            onClick={() => changeFilmes('/rented')}
            className={`${activeButton === "/rented" ? 'text-red-800 bg-white' : ''} hover:bg-white hover:text-red-800 transition-colors rounded flex items-center gap-1`}
            disabled={activeButton === "/rented"}
          >
            <FilmReel size={16} />  FILMES ALUGADOS
          </Button>

          <Button 
            onClick={() => changeFilmes(`/${currentUser.id}`)}
            className={`${activeButton === `/${currentUser.id}` ? 'text-red-800 bg-white' : ''} hover:bg-white hover:text-red-800 transition-colors rounded flex items-center gap-1`}
            disabled={activeButton === `/${currentUser.id}`}
          >
            <UserCircle size={16} /> MEUS FILMES
          </Button>

          <Button 
            onClick={() => changeFilmes('/notRented')}
            className={`${activeButton === "/notRented" ? 'text-red-800 bg-white' : ''} hover:bg-white hover:text-red-800 transition-colors rounded flex items-center gap-1`}
            disabled={activeButton === "/notRented"}            
          >
            <Ticket size={16} /> FILMES DISPONIVEIS
          </Button>
        </div>

        {Empty ? (
          <EmptyMovies />
        ) : (
          <div 
          className="grid grid-cols-1 gap-9 p-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
          >
          {movies.map((movie) => (
            <Card
              key={movie.id}
              id={movie.id}
              name={movie.name}
              photo={movie.photo}
              type={movie.type}
              rented={movie.rented}
              
              user={currentUser}

              updateMovies={getMoviesToShow}
            />
          ))}
        </div>
        )}
      </div>
    ) : (
      <div>
        <h1>VOCÊ PRECISA FAZER LOGIN/CADASTRO PRIMEIRO!</h1>
        <p>POR FAVOR APERTE ESSE BOTÃO PARA IR PARA A TELA DE LOGIN/CADASTRO</p>
        <button onClick={logout}>VOLTAR</button>
      </div>
    )}
    </>
  )
}