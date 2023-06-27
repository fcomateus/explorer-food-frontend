import CreatableSelect from 'react-select/creatable'
import { useState, useEffect } from 'react'
import { Container } from './style'

export function SelectInputMulti({ callback, getter, defaultOptions,...rest }) {

    const components = {
        DropdownIndicator: null,
    };
      
    const createOption = (label) => ({
        label,
        value: label,
    });

    const [inputValue, setInputValue] = useState('');
    const [value, setValue] = useState([]);
  
    const handleKeyDown = (event) => {
      if (!inputValue) return;
      switch (event.key) {
        case 'Enter':
        case 'Tab':
          setValue((prev) => [...prev, createOption(inputValue)]);
          setInputValue('');
          event.preventDefault();
          break;
        default:
          break;
      }
    };

    const style = {
        control: (provided, state) => ({
            ...provided,
            background: '#0D1D25',
            border: 'none',
            color: '#E1E1E6'
        }),
        multiValueRemove: (provided, state) => ({
            ...provided,
            ':hover': {
                    backgroundColor: 'red',
            },
            'svg': {
                fill: 'black'
            },
        }),
        placeholder: (provided, state) => ({
            ...provided,
        }),
        input: (provided, state) => ({
        ...provided,
        color: '#E1E1E6'
        })
    }

    useEffect(() => {
        if(defaultOptions && defaultOptions.length > 0) {
            setValue(defaultOptions)
        }
    }, [])

    return (
        <Container>
            <CreatableSelect
                {...rest}
                components={components}
                inputValue={inputValue}
                isClearable
                isMulti
                menuIsOpen={false}
                onChange={(newValue) => {
                    setValue(newValue)
                    // getter(value)
                }}
                onInputChange={(newValue) => {
                    setInputValue(newValue)
                    getter(value)
                }}
                onKeyDown={handleKeyDown}
                placeholder="Adicionar ingrediente"
                value={value}
                styles={style}
            />
        </Container>
    )
}