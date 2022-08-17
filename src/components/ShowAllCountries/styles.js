import styled from "styled-components";

export const ShowCountriesStyles = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
padding: 2rem 3.5rem;
font-size: 14px;
img{
    width: 100%;
    border-radius: 5px 5px 0 0;
}
.card{
    border-radius: 5px;
    background-color: ${props => (props.darkMode ? props.Colors.DarkBlue : props.Colors.White)};
    box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.1);
    .details{
        padding: 1rem 2rem 2.2rem 2rem;
    }
}
`;