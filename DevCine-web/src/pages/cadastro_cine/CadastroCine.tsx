import React, {useState} from 'react'
import './CadastroCine.css'


const CadastroCine = (): React.ReactElement => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [aceitaPoliticas, setAceitaPoliticas] = useState(false)

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }
    const handleSenhaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSenha(event.target.value);
      };
    const handlePoliticasChange = () => {
        setAceitaPoliticas(!aceitaPoliticas)
    }
    const handleSubmit = (event:React.FormEvent) => {
        event.preventDefault()
        console.log('Dados do formulário:', { email, senha, aceitaPoliticas });
    }
    return(
        <div>
            <h2>Cadstro</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>E-mail</label>
                    <input type='email' value={email} onChange={handleEmailChange} required/>
                </div>

                <div>
                    <label>Senha:</label>
                    <input type="password" value={senha} onChange={handleSenhaChange} required />
                </div>

                <div>
                    <input
                        type="checkbox"
                        checked={aceitaPoliticas}
                        onChange={handlePoliticasChange}
                        id="aceitaPoliticas"
                    />
                    <label htmlFor="aceitaPoliticas">Eu aceito as políticas do site</label>
                </div>
                <button type="submit">Cadastrar</button>


            </form>
        </div>
    )
}
export default CadastroCine