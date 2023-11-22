import * as React from 'react';
import { Button } from "@mui/material";

export default function ButtonAlugarCine(){
    return(
        <div>
        <Button variant="contained" color="success">Alugar filme</Button>
        <button className='devolveFilme'>Devolver Filme</button>
        </div>
    ) 
}