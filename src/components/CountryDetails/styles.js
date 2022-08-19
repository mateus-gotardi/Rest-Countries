import styled from "styled-components";

export const DetailsStyles = styled.section`
padding: 0 1.5rem 1.5rem 1.5rem;
display: flex;
flex-direction: column;
gap: 1.5rem;
.backButton{
    cursor: pointer;
    box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.1);
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => (props.darkMode ? props.Colors.DarkBlue : props.Colors.White)};
    width: 6rem;
    padding: .5rem 1rem;
}
.flag{
    margin:0;
    width: 100%;
    img{
        width: 100%;
        box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.1);
        border-radius: 3px;
    }
}
.countryDetails{
    display: flex;
    flex-direction: column;
    gap:1.4rem;
}
.details{
    display: flex;
    flex-direction: column;
    gap:1.4rem;
}
.borders{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
}
.border {
    box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6rem;
    border-radius: 3px;
    padding: 0 1rem;
    cursor:pointer;
    background-color: ${props => (props.darkMode ? props.Colors.DarkBlue : props.Colors.White)};
}
.border-grid{
    display: grid;
    grid-template-columns: auto auto auto;
    gap:1rem
}
@media (min-width: 750px) {
    padding: 1.5rem 3rem 3rem 3rem;
    .borders{
        flex-direction: row;
        justify-content: flex-start;
    }
    .countryDetails{
         flex-direction: row;
         gap: 5rem;
    }
    .flag{
        width: 50%;
    }
    .details{
        display: grid;
        grid-template-columns: auto auto;
        .borders{
            grid-column: 1 / span 2;
            grid-row: 2;
        }
    }
}
`;