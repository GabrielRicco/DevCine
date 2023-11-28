import React from "react";
import { FiMail, FiLock } from "react-icons/fi";
import {Container, Content} from './styles'
import global from "../../styles/global";

import Input from "../../components/Input";
import ButtonLogin from "../../components/ButtonLogin/ButtonLogin";

const Signin = (): React.ReactElement => {
    return(
        <>
            <Container>
      <Content>
        <form>
          <h1>Faça seu login</h1>

          <Input
            icon={FiMail}
            name="email"
            placeholder="E-mail"
            autoComplete="false"
          />

          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />

          <ButtonLogin type="submit">Acessar</ButtonLogin>

          <a href="forgot">Cadastrar-se</a>
        </form>
      </Content>
    </Container>
        </>
    )
    

}
export {Signin}