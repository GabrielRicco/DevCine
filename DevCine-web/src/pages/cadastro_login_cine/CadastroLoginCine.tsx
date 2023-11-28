import React, { useState, CSSProperties } from 'react';

const styles: Styles = {
    container: {
      backgroundColor: '#d3d3d3', // Cinza claro
      padding: '150px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '180%'
    },
    form: {
      margin: '20px 0',
      maxWidth: '300px',
      textAlign: 'center',
      fontSize:'20px'
    },
    label: {
        fontSize: '1.6em', // Ajuste o tamanho da fonte conforme necessário
        marginBottom: '8px',
        color: 'black'
      },
      h1: {
        color: 'black'
      },
    input: {
      width: '100%',
      margin: '8px 0',
      padding: '8px',
      boxSizing: 'border-box',
      fontSize:'40px'
    },
    button: {
      backgroundColor: 'red', // Vermelho
      color: 'white',
      padding: '10px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize:'20px'
    },

  };

// Definindo os tipos para os estados de login e cadastro
type LoginState = {
  username: string;
  password: string;
};

type CadastroState = {
  nome: string;
  novoUsername: string;
  novaSenha: string;
};
interface Styles {
    container: CSSProperties;
    form: CSSProperties;
    input: CSSProperties;
    button: CSSProperties;
    label: CSSProperties
    h1: CSSProperties
  }

// Componente principal
const CadastroLoginCine: React.FC = () => {
  // Estados para gerenciar as informações de login e cadastro
  const [loginData, setLoginData] = useState<LoginState>({
    username: '',
    password: '',
  });

  const [cadastroData, setCadastroData] = useState<CadastroState>({
    nome: '',
    novoUsername: '',
    novaSenha: '',
  });

  // Função para lidar com o envio do formulário de login
  const handleLoginSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para verificar as credenciais
    console.log('Login submetido:', loginData);
  };

  // Função para lidar com o envio do formulário de cadastro
  const handleCadastroSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para criar uma nova conta
    console.log('Cadastro submetido:', cadastroData);
  };

  // Renderização do componente
  return (
    <div style={styles.container}>
      {/* Formulário de Login */}
      <form style={styles.form} onSubmit={handleLoginSubmit}>
        <h2 style={styles.h1}>Login</h2>
        <label style={styles.label}>
          Username:
          <input
           style={styles.input}
            type="text"
            value={loginData.username}
            onChange={(e) =>
              setLoginData({ ...loginData, username: e.target.value })
            }
          />
        </label>
        <br />
        <label style={styles.label}>
          Password:
          <input
           style={styles.input}
            type="password"
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />
        </label>
        <br />
        <button style={styles.button} type="submit">Fazer Login</button>
      </form>

      {/* Formulário de Cadastro */}
      <form style={styles.form} onSubmit={handleCadastroSubmit}>
        <h2 style={styles.label}>Cadastro</h2>
        <label style={styles.label}>
          Nome:
          <input
            style={styles.input}
            type="text"
            value={cadastroData.nome}
            onChange={(e) =>
              setCadastroData({ ...cadastroData, nome: e.target.value })
            }
          />
        </label>
        <br />
        <label style={styles.label}>
          Username:
          <input
            style={styles.input}
            type="text"
            value={cadastroData.novoUsername}
            onChange={(e) =>
              setCadastroData({ ...cadastroData, novoUsername: e.target.value })
            }
          />
        </label>
        <br />
        <label style={styles.label}>
          Password:
          <input
          style={styles.input}
            type="password"
            value={cadastroData.novaSenha}
            onChange={(e) =>
              setCadastroData({ ...cadastroData, novaSenha: e.target.value })
            }
          />
        </label>
        <br />
        <button style={styles.button} type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroLoginCine;