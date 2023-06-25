import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useAuth } from '../../hooks/auth';

import { Container } from './style';
import { Button } from '../../components/Button'
import { InputText } from '../../components/InputText' 

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth();

  function handleSignIn(e) {
    e.preventDefault()
    signIn({ email, password })
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
        onSubmit={e => handleSignIn(e)}  
      >
        <h2>Faça login</h2>

        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <InputText
            type="email"
            id="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            onChange={ e => setEmail(e.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="password">Senha</label>
          <InputText 
            type="password"
            id="password"
            min='6'
            placeholder="No mínimo 6 caracteres"
            onChange={ e => setPassword(e.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <Button
            color='#750310'
            text="Entrar"
            />
        </div>

        <div id='link-to-signup'>
          <Link to='/signup'>Criar uma conta</Link>
        </div>
      </form>
      
    
    </Container>
  )
}