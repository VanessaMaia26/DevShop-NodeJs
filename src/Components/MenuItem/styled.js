import styled from 'styled-components';

export const LinkArea = styled.a`
display: block;
justify-content: center;
align-items: center;
width: 60px;
heigth: 60px;
background-color: ${props=>props.active ? '#0B4D0B' : 'transparent'};
border-radius: 10px;
margin-bottom: 10px
`;

export const LinkIcon = styled.img`
width: 34px;
heigth: auto;
`;