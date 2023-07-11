import { Container } from "./style";
import { api } from '../../services/api'
import AsyncSelect from 'react-select/async'
import { Link } from "react-router-dom";

export function SearchSelect() {


    const CustomOption = ({ innerProps, label, data }) => (
        <Link to={`/details/${data.value}`} {...innerProps} style={{
            display: 'flex',
            alignItems: 'center',
            padding: '5px 10px',
            gap: '8px'
        }}>
            <img 
                src={`${api.defaults.baseURL}/files/${data.image_path}`}
                alt={`Imagem do prato ${data.label}`} 
                 style={{
                    height: '80px',
                    width: '80px'
                 }}
            />
            <span
                style={{
                    fontSize: '20px'
                }}
            >{data.label}</span>
        </Link>
    );

    const select = {
        control: (provided, state) => ({
            ...provided,
            background: '#0D1D25',
            border: 'none',
            color: '#E1E1E6'
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? '#E1E1E6' : state.isHovered ? '' : '#0D1D25',
            color: state.isFocused ? '#00070A' : '#E1E1E6',
            fontSize: '14px'
        }),
        menu: (provided, state) => ({
            ...provided,
            background: '#0D1D25'
        }),
        placeholder: (provided, state) => ({
            ...provided,
        }),
        input: (provided, state) => ({
            ...provided,
            color: '#E1E1E6'
        })
    }

    async function loadOptions(inputValue) {
        try {
            const response = await api.get(`/search?term=${inputValue}`)
            const data = await response.data

            const options = data.map(item => {
                return {
                    value: item.id,
                    label: item.name,
                    image_path: item.image_path
                }
            })

            return options

        } catch (error) {
            alert('Erro ao carregar as opções', error)
            return []
        }


    }

    


    return (
        <Container>
            <AsyncSelect
                styles={select}
                loadOptions={loadOptions}
                placeholder={`Busque por pratos...`}
                components={{ Option: CustomOption }}
                isClearable
            />
        </Container>
    )
}