import { FilmSlate } from "@phosphor-icons/react"

export function EmptyMovies() {
  return (
    <div className="flex flex-col text-muted-foreground items-center justify-center relative mt-6">
      <FilmSlate size={40} />
      <h2>Nenhum filme encontrado, sinto muito :(</h2>
    </div>
  )
}