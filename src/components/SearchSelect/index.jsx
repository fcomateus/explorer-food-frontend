import { Container } from "./style";
import { useState, useEffect } from "react";
import { api } from '../../services/api'
import Select from 'react-select'

export function SearchSelect() {
    const [searchTerm, setSearchTerm] = useState('');
    const [options, setOptions] = useState([]);

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

    function handleInputChange(term) {
        setSearchTerm(term)
    }

    function handleChange(selectedOption) {
        console.log('selectedOption',selectedOption);
    }


    useEffect(() => {
        async function fetchOptions() {
            try {
                const response = api.get(`/dishes/term=${searchTerm}`)
                console.log(response.data);
                setOptions(response.data)
            } catch (error) {
                console.log('error',error);
            }
        }
 
        fetchOptions()
    }, [searchTerm])


    return (
        <Container>
            <Select
                styles={select}
                placeholder={`Busque por pratos`}
                options={options}
                onInputChange={handleInputChange}
                onChange={handleChange}
                isSearchable
            />
        </Container>
    )
}