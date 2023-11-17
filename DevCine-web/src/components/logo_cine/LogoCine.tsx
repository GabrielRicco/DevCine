import React from "react";

interface LogoCineProps{
  src: string;       // Caminho da imagem
  alt: string;       // Texto alternativo da imagem
  className?: string; // Classe CSS opcional para estilização adicional
  onClick?: () => void; // Manipulador de clique opcional

}

const LogoCine = (props: LogoCineProps): React.ReactElement => {
    console.log(props)
    return(
        <div style={{ display: 'flex' }}>
            <img src= '\assets\cinema.png' alt="imagem teste de cinema" />

        </div>
    )
}
export {LogoCine}