import { Container } from './style'
import { AiOutlineMenu } from 'react-icons/ai'
import { RxExit } from 'react-icons/rx'
import { RxCross1 } from 'react-icons/rx'
import { InputText } from '../InputText'
import { Link, useNavigate } from 'react-router-dom'
import { useMenu } from '../../hooks/menu'
import { useAuth } from '../../hooks/auth'

export function Header() {
  const { signOut, user } = useAuth();
  const { toggleMenu, menuOpened, setMenuOpened } = useMenu();
  const navigate = useNavigate();

  function handleSignOut() {
    navigate('/')
    setMenuOpened(false)
    signOut();
  }


  const mock = [
    {
      id: 1,
      name: 'Salada Ravanello',
      price: 49.97,
      image: 'src/assets/ravanello.png'
    },
    {
      id: 2,
      name: 'Spaghetti Gambe',
      price: 79.97,
      image: 'src/assets/gambe.png'
    },
    {
      id: 3,
      name: 'Prugna Pie',
      price: 79.97,
      image: 'src/assets/prune.png'
    },
  ]

  function handleClickMenu() {
    toggleMenu();
  }

  return (
    <Container>
      <div id='menu-side' className={menuOpened ? 'opened-menu': 'closed-menu'}>
        <header id='menu-header'>
          <button
            id='close-menu-button'
            onClick={handleClickMenu}
          >
            <RxCross1/>
          </button>

          Menu
        </header>

        <div className="menu-body">
          <InputText
            id="menu-search"
            placeholder="Busque por pratos ou ingredientes"
          />

          <div id="menu-search-results">
            {
              mock && mock.map(item => {
                const urlPath = item.name.toLowerCase().split(" ").join("-")

                return (
                  <Link to={urlPath} className='exibition-dish-menu' key={String(item.id)}>
                    <div className='menu-dish-image'>
                      <img src={item.image} alt="Imagem do prato"/>
                    </div>

                    <div>
                      <h4>{item.name}</h4>
                      <p>{item.price}</p>
                    </div>
                  </Link>
                )
              })

            }

            
          </div>

          <div className='menu-option'>
            <button 
              onClick={handleSignOut}
              id="menu-exit-app"
            >
              Sair
            </button>
          </div>

          <div 
            style={{ display: user.role === 'admin' ? 'block' : 'none'}}
            className='menu-option'  
          >
            <button>Novo prato</button>
          </div>

        </div>

      </div>

      <div
        className='header-bar-costumer'
        style={{
          display: user.role === 'costumer' ? 'flex' : 'none'
        }}
      >
        <div
          className='open-menu-button-header-mobile'
        >
            <button
              onClick={handleClickMenu}
            >
              <AiOutlineMenu/>
            </button>
        </div>

        <div className='logo-wrapper-mobile-header-bar'>
          <svg width="26" height="31" viewBox="0 0 26 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 0.366394L25.9904 7.86639V22.8664L13 30.3664L0.00961876 22.8664V7.86639L13 0.366394Z" fill="#065E7C"/>
          </svg>

          <div>
            food explorer
          </div>

        </div>

        <div className="search-header-bar-costumer">
          <InputText
            type="text"
            placeholder="Busque por pratos ou ingredientes"
          />
        </div>

        <div id='bill-icon'>
          <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M5.96094 8C5.96094 7.44771 6.40865 7 6.96094 7H19.9609C20.5132 7 20.9609 7.44771 20.9609 8C20.9609 8.55228 20.5132 9 19.9609 9H6.96094C6.40865 9 5.96094 8.55228 5.96094 8Z" fill="white"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M5.96094 12C5.96094 11.4477 6.40865 11 6.96094 11H19.9609C20.5132 11 20.9609 11.4477 20.9609 12C20.9609 12.5523 20.5132 13 19.9609 13H6.96094C6.40865 13 5.96094 12.5523 5.96094 12Z" fill="white"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M1.04672 0.585787C1.4218 0.210714 1.9305 0 2.46094 0H24.4609C24.9914 0 25.5001 0.210714 25.8751 0.585787C26.2502 0.960861 26.4609 1.46957 26.4609 2V21C26.4609 21.3466 26.2815 21.6684 25.9867 21.8506C25.6918 22.0329 25.3237 22.0494 25.0137 21.8944L21.4609 20.118L17.9081 21.8944C17.6266 22.0352 17.2952 22.0352 17.0137 21.8944L13.4609 20.118L9.90815 21.8944C9.62662 22.0352 9.29525 22.0352 9.01372 21.8944L5.46094 20.118L1.90815 21.8944C1.59816 22.0494 1.23002 22.0329 0.935206 21.8506C0.64039 21.6684 0.460938 21.3466 0.460938 21V2C0.460938 1.46957 0.671652 0.960859 1.04672 0.585787ZM24.4609 2L2.46094 2L2.46094 19.382L5.01372 18.1056C5.29525 17.9648 5.62662 17.9648 5.90815 18.1056L9.46094 19.882L13.0137 18.1056C13.2952 17.9648 13.6266 17.9648 13.9081 18.1056L17.4609 19.882L21.0137 18.1056C21.2952 17.9648 21.6266 17.9648 21.9081 18.1056L24.4609 19.382V2Z" fill="white"/>
          </svg>

          <div id='counter'>0</div>
        </div>

        <button id='my-orders'>
          <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M5.96094 8C5.96094 7.44771 6.40865 7 6.96094 7H19.9609C20.5132 7 20.9609 7.44771 20.9609 8C20.9609 8.55228 20.5132 9 19.9609 9H6.96094C6.40865 9 5.96094 8.55228 5.96094 8Z" fill="white"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M5.96094 12C5.96094 11.4477 6.40865 11 6.96094 11H19.9609C20.5132 11 20.9609 11.4477 20.9609 12C20.9609 12.5523 20.5132 13 19.9609 13H6.96094C6.40865 13 5.96094 12.5523 5.96094 12Z" fill="white"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M1.04672 0.585787C1.4218 0.210714 1.9305 0 2.46094 0H24.4609C24.9914 0 25.5001 0.210714 25.8751 0.585787C26.2502 0.960861 26.4609 1.46957 26.4609 2V21C26.4609 21.3466 26.2815 21.6684 25.9867 21.8506C25.6918 22.0329 25.3237 22.0494 25.0137 21.8944L21.4609 20.118L17.9081 21.8944C17.6266 22.0352 17.2952 22.0352 17.0137 21.8944L13.4609 20.118L9.90815 21.8944C9.62662 22.0352 9.29525 22.0352 9.01372 21.8944L5.46094 20.118L1.90815 21.8944C1.59816 22.0494 1.23002 22.0329 0.935206 21.8506C0.64039 21.6684 0.460938 21.3466 0.460938 21V2C0.460938 1.46957 0.671652 0.960859 1.04672 0.585787ZM24.4609 2L2.46094 2L2.46094 19.382L5.01372 18.1056C5.29525 17.9648 5.62662 17.9648 5.90815 18.1056L9.46094 19.882L13.0137 18.1056C13.2952 17.9648 13.6266 17.9648 13.9081 18.1056L17.4609 19.882L21.0137 18.1056C21.2952 17.9648 21.6266 17.9648 21.9081 18.1056L24.4609 19.382V2Z" fill="white"/>
          </svg>

          Pedidos(0)
        </button>

        <div className='exit-costumer'>
          <button
            onClick={handleSignOut}
          >
          <RxExit/>
          </button>
        </div>

      </div>

      <div
        className='header-bar-admin'
        style={{
          display: user.role === 'admin' ? 'flex' : 'none'
        }}
      >

        <div className='open-menu-button-header-mobile'>
          <button
            onClick={handleClickMenu}
          >
            <AiOutlineMenu/>
          </button>
        </div>

        <div className='logo-wrapper-mobile-header-bar-admin'>
          <svg width="26" height="31" viewBox="0 0 26 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 0.366394L25.9904 7.86639V22.8664L13 30.3664L0.00961876 22.8664V7.86639L13 0.366394Z" fill="#065E7C"/>
          </svg>

          <div id='app-name-admin-wrapper'>
            <p>food explorer</p> 
            <p id='label-admin-header'>admin</p>
          </div>

        </div>

        <div className="search-header-bar-admin">
          <InputText
            type="text"
            placeholder="Busque por pratos ou ingredientes"
          />
        </div>

        <button id='new-dish'>
          Novo prato
        </button>

        <div className='exit-admin'>
          <button
              onClick={handleSignOut}
            >
            <RxExit/>
          </button>
        </div>

      </div>

      

    </Container>
  )
}