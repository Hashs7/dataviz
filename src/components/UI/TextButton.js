import React from 'react';
import styled from 'styled-components';
import { theme } from '../../constantes';
import SVG from 'react-inlinesvg';

const ButtonContainer = styled.div`
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
    margin-left: 10px;

`;

const Text = styled.span`
    display: inline-block;
    height: 30px;
    line-height: 30px;
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
    console.log(props)
    return (
        <ButtonContainer>
            <Lines src="./assets/svg/wave-line-left.svg"/>

            <StyledButton onClick={props.click}>
                <Text>
                    {props.children}
                </Text>
                {props.exit ? null :
                    <Plane src="./assets/svg/paper-plane.svg"/>
                }
            </StyledButton>

            <Lines src="./assets/svg/wave-line-right.svg"/>
        </ButtonContainer>
    );
};

export default TextButton;
