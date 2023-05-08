import { Container } from './style';
import InputText from '../../components/InputText' 

export default function Signup() {
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

      <div className="input-wrapper">
        <label htmlFor="email">Email</label>
        <InputText id="email"/>
      </div>
    
    </Container>


  )
}