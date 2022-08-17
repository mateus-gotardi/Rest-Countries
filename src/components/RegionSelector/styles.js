import styled from "styled-components";

export const SelectorStyles = styled.div`
margin-top: 2rem;

.active{
    position: absolute;
    z-index: 100;
    background: ${props => (props.darkMode ? props.Colors.DarkBlue : props.Colors.White)};
    list-style-type: none;
    padding: 1rem;
    margin: 0.2rem 0;
    width:13rem;
    border-radius: 5px;
    li{
        padding: 0.2rem;
        cursor: pointer;
        :hover{
            background: ${props => (props.darkMode ? props.Colors.VeryDarkBlue : props.Colors.VeryLightGray)};
        }
    }
}
.inactive{
    display: none;
}
.regionSelector{
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    cursor: pointer;
    width:13rem;
    border: none;
    appearance: inherit;
    padding: 1rem;
    box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.1);
    margin: 0;
    border-radius: 5px;
    background: ${props => (props.darkMode ? props.Colors.DarkBlue : props.Colors.White)};
    font-size: 14px;
    color: ${props => (props.darkMode ? props.Colors.White : props.Colors.MuchDarkBlue)};
    height: calc(2rem + 20px);
}
@media (min-width: 750px) {
    margin:0;
}
`;