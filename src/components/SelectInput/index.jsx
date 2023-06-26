import Select from 'react-select'
import { Container } from './style'

export function SelectInput({ ...rest }) {
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
            // color: '#E1E1E6'
            color: state.isFocused ? '#00070A' : '#E1E1E6',
            fontSize: '14px'
        }),
        singleValue: (provided, state) => ({
            ...provided,
            color: '#E1E1E6',
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

    return (
        <Container>
            <Select styles={select} {...rest} />
        </Container>
    )
}