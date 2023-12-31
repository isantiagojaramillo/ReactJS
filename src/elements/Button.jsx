import styled, {css} from "styled-components";

const Button = styled.button`
    background: #83d394;
    padding: 20px;
    // margin: 10px;
    // width: 100%;
    border: none;
    border-radius: 3px;
    font-weight: bold;
    font-family: Arial, sans-serif;
    cursor: pointer;
    transition: .3s ease all;

    width: ${props => props.longButton ? '100%' : 'auto'};

    &:hover{
        background: #44a559;
        color: #fff;
    }

    ${props => props.black && css `
        background: #000;
        color: #fff;
    `}

    ${props => props.marginTop && css `margin-top: 10px`}
    ${props => props.marginRight && css `margin-right: 5px`}


`;

export default Button;



