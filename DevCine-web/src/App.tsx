import ButtonUsage from "./components/button_alugar_cine/ButtonAlugarCine";
import { DescriptionCine } from "./components/description_cine"
import GridCine from "./components/grid_cine/GridCine";
import { LogoCine } from "./components/logo_cine";
import { MovieCine } from "./components/movie_cine";

export function App() {

  

  return (
    <>
    <div className="container">
      <div>
        <LogoCine src='teste' alt="Logo do site"/>
        <DescriptionCine className=""/>
      </div>
      
      <div className='movies'>
          <GridCine />
      </div>      
      
    </div>
    </>
  )
}

