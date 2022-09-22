import React from 'react';
import { Container, Logo, SearchInput } from './styled';

export default ({ search, onSearch }) => {
    const [inputActive, setInputActive] = userState(search = '' ? false : true);

    const handleInputFocus = () => {
        setInputActive(true);
    }

    const handleInputBlur = () => {
        setInputActive(false);
    }

    const handleChange = (e) => {
        onSearch( e.target.value );
    }

    return (
        <Container>
            <Logo src="/assets/logo.png" />
            <SearchInput
            type="text"
            placeholder="Digite um produto..."
            value={search}
            onChange={handleChange}
            active={inputActive}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            />
        </Container>
    );
}