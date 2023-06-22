import { Container } from './style';
import { Link, useNavigate} from 'react-router-dom'
import { Button } from '../../components/Button'
import { InputText } from '../../components/InputText'
import { useState } from 'react'; 

import { api } from '../../services/api.js'

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  function handleSignUp(e) {
    e.preventDefault()
    if(!name || !email || !password) {
      return alert('Preencha todos os campos!');
    }

    api.post('/users', {name, email, password})
    .then(() => {
      alert('Usuário cadastrado com sucesso!')
      navigate('/')
    })
    .catch(error => {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível cadastrar')
      }
    })

  }

  return(
    <Container>
      <div id='header'>
        <svg width="26" height="31" viewBox="0 0 26 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 0.366394L25.9904 7.86639V22.8664L13 30.3664L0.00961876 22.8664V7.86639L13 0.366394Z" fill="#065E7C"/>
        </svg>
        
        <div>
          food explorer
        </div>
      </div>

      <form 
        className='flex-column'
        onSubmit={e => handleSignUp(e)}
      >
        <h2>Crie sua conta</h2>

        <div className="input-wrapper">
          <label htmlFor="name">Seu nome</label>
          <InputText 
            id="name"
            type="text"
            placeholder="Exemplo: Maria da Silva"
            onChange={e => setName(e.target.value)}  
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <InputText 
            id="email"
            type="email"
            placeholder="Exemplo: exemplo@exemplo.com.br" 
            onChange={e => setEmail(e.target.value)} 
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="password">Senha</label>
          <InputText 
            id="email"
            min='6'
            type="password"
            placeholder="No mínimo 6 caracteres"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <Button
            color='#750310'
            text="Criar conta"
            />
        </div>

        <div id='link-to-signin'>
          <Link to='/'>Já tenho uma conta</Link>
        </div>
      </form>
      
    
    </Container>
  )
}