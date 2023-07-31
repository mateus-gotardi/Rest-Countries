import styled from "styled-components";

export const ShowCountriesStyles = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
padding: 2rem 3.5rem;
font-size: 14px;
max-width: 1440px;
margin: 0 auto;
.card{
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    border-radius: 5px;
    background-color: ${props => (props.darkMode ? props.Colors.DarkBlue : props.Colors.White)};
    box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.1);
    .details{
        padding: 1.3rem;
    }
}
img{
    width: 100%;
    aspect-ratio:auto;
}
.flag{
    width: 100%;
    border-radius: 5px 5px 0 0;
    overflow:hidden;
}
@media (min-width: 750px) {
gap: 3.5rem 5% ;
display: grid;
grid-template-columns: 47.5% 47.5%
}
@media (min-width: 860px) {
grid-template-columns: 30% 30% 30%
}
@media (min-width: 1080px) {
.card{
    height: 20rem;
}
grid-template-columns: 21.25% 21.25% 21.25% 21.25%
}

`;