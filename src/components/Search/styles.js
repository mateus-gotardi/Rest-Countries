import styled from "styled-components";

export const SearchStyle = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.1);
    margin: 0 1.3rem;
    border-radius: 5px;
    background-color: ${props => (props.darkMode ? props.Colors.DarkBlue : props.Colors.White)};
    font-size: 20px;
    input{
        background-color: transparent;
        width: 100%;
        font-size: 14px;
        border: transparent;
        margin-left: 5px;
        color: ${props => (props.darkMode ? props.Colors.White : props.Colors.MuchDarkBlue)};
        :focus{
            box-shadow: 0 0 0 0;
            border: 0 none;
            outline: 0;
        };
        ::placeholder{
            color: ${props => (props.darkMode ? props.Colors.White : props.Colors.MuchDarkBlue)};
        }
    }
`;