import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import axios from 'axios'
import { FormEvent, useState } from 'react'

import Logo from '../../public/Retropix-removebg-preview.png'

export function Home() {
  const [nomeParaCadastro, setNomeParaCadastro] = useState<string>('');
  const [usuarioParaCadastro, setUsuarioParaCadastro] = useState<string>('');
  const [senhaParaCadastro, setSenhaParaCadastro] = useState<string>('');

  const [usuarioParaLogin, setUsuarioParaLogin] = useState<string>('')
  const [senhaParaLogin, setSenhaParaLogin] = useState<string>('')

  const [mensagemErro, setMensagemErro] = useState<string | null>(null);

  async function cadastrarUsuario(event: FormEvent) {
    event.preventDefault()

    try {
      const response = await axios.post("http://localhost:8080/users/", {
        name: nomeParaCadastro,
        username: usuarioParaCadastro,
        password: senhaParaCadastro
      })
  
      localStorage.setItem('currentUser', JSON.stringify(response.data))

      window.location.href = "/devcine"

      setNomeParaCadastro("")
      setUsuarioParaCadastro("")
      setSenhaParaCadastro("")
    } catch (error) {
      handleErro(error)
    }
  }

  async function login(event: FormEvent) {
    event.preventDefault()

    try {
      const response = await axios.post("http://localhost:8080/users/login", {
        username: usuarioParaLogin,
        password: senhaParaLogin
      })
  
      localStorage.setItem('currentUser', JSON.stringify(response.data))

      window.location.href = "/devcine"
    } catch (error) {
      handleErro(error)
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleErro(error: any) {
    if(error.response && error.response.status === 400) {
      setMensagemErro(error.response.data)
    } else {
      console.error("erro na requisição: ", error)
    }
  }

  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <div className='border-red-950 border-2 p-7 rounded-2xl'>
        <h1 className='flex items-center justify-center w-full'>
          <img className='w-40' src={Logo} alt="Logo do DevCine" />
        </h1>

        <main className='flex'>
          <section className='flex flex-col items-center justify-center gap-6'>
            <h1 className='font-bold'>LOGIN</h1>

            <form className='flex flex-col justify-between h-full gap-6' onSubmit={login}>
              <Input className='rounded' type="text" placeholder="usuário" onChange={(e) => setUsuarioParaLogin(e.target.value)}  />

              <Input className='rounded' type="password" placeholder="senha" onChange={(e) => setSenhaParaLogin(e.target.value)}  />

              <Button className='rounded hover:bg-white hover:text-red-900 transition-colors' type="submit">LOGAR</Button>
            </form>
          </section>

          <div className='border mr-20 ml-20'/>

          <section className='flex flex-col items-center justify-center gap-6'>
            <h1 className='font-bold'>CADASTRE-SE</h1>

            <form className='flex flex-col justify-between h-full gap-6'  onSubmit={cadastrarUsuario}>
              <Input className='rounded' type="text" placeholder="nome" onChange={(e) => setNomeParaCadastro(e.target.value)} />

              <Input className='rounded' type="text" placeholder="usuário" onChange={(e) => setUsuarioParaCadastro(e.target.value)} />

              <Input className='rounded' type="password" placeholder="senha" onChange={(e) => setSenhaParaCadastro(e.target.value)} />

              <Button className='rounded hover:bg-white hover:text-red-900 transition-colors' type="submit">CADASTRAR</Button>
            </form>
          </section>
        </main>
      </div>

      {mensagemErro && (
          <p className='bg-yellow-700 px-8 py-4 z-10 absolute top-0 rounded font-bold'>{mensagemErro}</p>
      )}
    </div>
  )
}