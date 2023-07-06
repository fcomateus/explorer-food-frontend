import { Container } from "./style";
import { useState, useEffect } from "react";
import { api } from '../../services/api'
import Select from 'react-select'

export function SearchSelect() {
    const [searchTerm, setSearchTerm] = useState('');
    const [options, setOptions] = useState([]);

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
                options={options}
                onInputChange={handleInputChange}
                onChange={handleChange}
                isSearchable
            />
        </Container>
    )
}