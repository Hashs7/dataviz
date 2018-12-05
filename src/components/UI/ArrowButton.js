import React from 'react';
import styled from 'styled-components';
import SVG from "react-inlinesvg";

const Button = styled.button`
    position: relative;
    cursor: pointer;
    width: 52px;
    height: 52px;
    background-color: #fff;
    border: 3px solid #000;
    border-radius: 50%;
    box-shadow: 0px 6px 0px 0px rgba(0,0,0,1);
    transition: all .25s ease;
    &:focus{
        outline: none;
    }
    &:hover {
        transform: translateY(4px);
        box-shadow: 0px 2px 0px 0px rgba(0,0,0,1);
    }  
`;

const StyledSVG = styled(SVG)`
    position: absolute;
    width: 20px;
    height: 24px;
    top: 0; bottom: 0;
    left: 0; right: 0;
    margin: auto;
    z-index: 10;
`;

const ArrowButton = ({ action }) => {
    return (
        <Button onClick={action}>
            <StyledSVG src="./assets/svg/arrow.svg"/>
        </Button>
    );
};

export default ArrowButton;
