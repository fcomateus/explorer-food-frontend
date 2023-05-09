import { Container } from './style';
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { InputText } from '../../components/InputText' 

export function SignIn() {
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

      <form className='flex-column'>
        <h2>Faça login</h2>

        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <InputText 
            id="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"  
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="password">Senha</label>
          <InputText 
            id="email"
            min='6'
            placeholder="No mínimo 6 caracteres"  
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