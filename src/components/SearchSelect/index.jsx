import { Container } from "./style";
import { useState, useEffect } from "react";
import { api } from '../../services/api'
import Select, { components } from 'react-select'
import { useNavigate } from "react-router-dom";

export function SearchSelect() {
    const [searchTerm, setSearchTerm] = useState('');
    const [options, setOptions] = useState([]);

    const navigate = useNavigate()

    const CustomOption = ({ innerProps, label, data }) => (
        <div {...innerProps} style={{
            display: 'flex',
            alignItems: 'center',
            padding: '5px 10px',
            gap: '8px'
        }}>
            <img 
                src={`${api.defaults.baseURL}/files/${data.image_path}`}
                alt={data.name} 
                 style={{
                    height: '80px',
                    width: '80px'
                 }}
            />
            <span
                style={{
                    fontSize: '20px'
                }}
            >{data.name}</span>
        </div>
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
        navigate(`/details/${selectedOption.id}`)
    }


    useEffect(() => {
        async function fetchOptions() {
            try {

                if(searchTerm != undefined && searchTerm.trim() != '') {
                    const response = await api.get(`/search?term=${searchTerm}`)
                    console.log(response.data);
                    setOptions(response.data)
                }

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
                components={{ Option: CustomOption }}
            />
        </Container>
    )
}