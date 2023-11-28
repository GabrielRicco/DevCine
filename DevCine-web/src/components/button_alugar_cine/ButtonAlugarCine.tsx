import * as React from 'react';
import { Button } from "@mui/material";

export default function ButtonAlugarCine(){
    const [alugado, setAlugado]  = React.useState<boolean>(false)

    function alugarFilme(){
        setAlugado(true)
    }
    function devolverFilme(){
        setAlugado(false)
    }
    return(
        <div>
            {
            alugado? <button onClick={devolverFilme} className='devolveFilme'>Devolver Filme</button>
             :  <Button onClick={alugarFilme} variant="contained" color="success">Alugar filme</Button>
             }
       
        
        </div>
    ) 
}