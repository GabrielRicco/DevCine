import axios from 'axios'
import { UserProps } from '../pages/Devcine'
import { useState, useEffect, useCallback } from 'react'
import { Button } from './ui/button'

import { Play, SkipBack } from '@phosphor-icons/react'

export interface CardProps {
  id: string
  name: string
  photo: string
  type: string
  rented: boolean

  user: UserProps

  updateMovies: () => void
}

export function Card(props: CardProps) {
  const [isMineMovie, setIsMineMovie] = useState<boolean | null>(null)

  useEffect(() => {
    async function verificandoFilmeAoUsuario() {
      const response = await axios.get(`http://localhost:8080/movies/movie/${props.id}`)
      
      setIsMineMovie(response.data.user.id === props.user.id)
    }

    if(props.rented) {
      verificandoFilmeAoUsuario()
    }
  }, [props.id, props.rented, props.user])

  const alugar = useCallback(async () => {
    await axios.put(`http://localhost:8080/movies/${props.id}`, {
      rented: true,
      user: props.user
    })

    props.updateMovies()
  }, [props])

  const devolver = useCallback(async () => {
    await axios.put(`http://localhost:8080/movies/${props.id}`, {
      rented: false,
      user: null
    })

    props.updateMovies()
  }, [props])

  return (
    <div className='w-full h-full border-red-950 bg-zinc-900 border-2 flex flex-col items-center justify-between gap-3 p-4 rounded'>
      <img className='w-32 h-48 border-2 border-red-900' src={props.photo} />
      <h2>{props.name}</h2>
      <p className='text-muted-foreground text-sm flex items-center justify-center w-full'>{props.type}</p>

      {props.rented ? (
          isMineMovie ? (
            <Button className='bg-blue-950 hover:bg-blue-900 transition-colors rounded flex items-center gap-1' onClick={devolver}>
              <SkipBack size={16} /> DEVOLVER
            </Button>
          ) : (
            <Button disabled className='bg-yellow-700 rounded'>FILME INDISPONIVEL</Button>
          )
      ) : (
        <Button className='hover:bg-white hover:text-red-800 transition-colors rounded flex items-center gap-1' onClick={alugar}>
          <Play size={16} /> ALUGAR
        </Button>
      )}
    </div>
  )
}