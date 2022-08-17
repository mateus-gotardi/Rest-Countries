import styled from "styled-components";

export const HeaderStyles = styled.header`
display: flex;
justify-content: space-between;
padding: 2rem 1rem;
background-color: ${props => (props.darkMode ? props.Colors.DarkBlue : props.Colors.White)};
box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.1);
margin-bottom: 1rem;
button{
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: ${props => (props.darkMode ? props.Colors.White : props.Colors.MuchDarkBlue)}
};
`;