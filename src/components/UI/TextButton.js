import React from 'react';
import styled, { withTheme, ThemeProvider } from 'styled-components';
import { theme } from '../../constantes';
import { VUE } from '../../store/actions';
import SVG from 'react-inlinesvg';
import { Link } from "react-router-dom";

const ButtonContainer = styled.div`
    position: absolute;
    bottom: 80px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 450px;
    margin: auto;
`;

const Lines = styled(SVG)`
    width: 123px;
    height: 10px;
`;

const Plane = styled(SVG)`
    display: inline-block;
    width: 30px;
    height: 23px;
    vertical-align: middle;
`;

const Text = styled.span`
    display: inline-block;
    height: 30px;
    line-height: 30px;
    padding-right: 10px;
    vertical-align: middle;
`;

const StyledButton = styled.button`
    display: inline-block;
    padding: 0 22px;
    height: 52px;
    line-height: 52px;
    border-radius: 26px;
    border: 3px solid #000;
    background-color: #fff;
    box-shadow: 0px 6px 0px 0px rgba(0,0,0,1);
    text-transform: uppercase;
    font: 16px ${theme.font.second};
    font-weight: bold;
    letter-spacing: 1px;
    cursor: pointer;
    z-index: 5
    position: relative;
    transition: all .25s ease;
    &:focus{
        outline: none;
    }
    &:hover {
        transform: translateY(4px);
        box-shadow: 0px 2px 0px 0px rgba(0,0,0,1);
    }
`;

const TextButton = (props) => {
    return (
        <ButtonContainer>
            <Lines src="./assets/img/svg/wave-line-left.svg"/>
            <Link to={props.link}>
                <StyledButton onClick={() => props.changeVue(VUE.WHY)}>
                    <Text>
                        {props.children}
                    </Text>
                    <Plane src="./assets/img/svg/paper-plane.svg"/>
                </StyledButton>
            </Link>
            <Lines src="./assets/img/svg/wave-line-right.svg"/>
        </ButtonContainer>

    );
};

export default TextButton;
