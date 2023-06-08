import { Container } from "./style";

export function Footer() {
    return (
        <Container>

        <div id="app-name">
            <svg width="26" height="31" viewBox="0 0 26 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 0.366394L25.9904 7.86639V22.8664L13 30.3664L0.00961876 22.8664V7.86639L13 0.366394Z" fill="#4D585E"/>
            </svg>
        
            food explorer
        </div>

        <div id="copy-right">
            &copy; 2023 - Todos os direitos reservados
        </div>
        </Container>
    )
}