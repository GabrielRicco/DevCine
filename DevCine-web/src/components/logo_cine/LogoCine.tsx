import React from "react";
import imagemlogo  from './assets/imagemlogo.png';

interface LogoCineProps{
  src: string;       // Caminho da imagem
  alt: string;       // Texto alternativo da imagem
  className?: string; // Classe CSS opcional para estilização adicional
  onClick?: () => void; // Manipulador de clique opcional

}

const LogoCine = (props: LogoCineProps): React.ReactElement => {
    console.log(props)
    return(
        <div className='LogoCine' style={{ display: 'flex' }}>
            <img src={imagemlogo} alt="imagem teste" />

        </div>
    )
}
export {LogoCine}