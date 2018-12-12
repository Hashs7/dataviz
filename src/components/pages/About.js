import React from 'react';
import styled from 'styled-components';
import { theme } from "../../constantes";
import { ChartUnderline, Tips } from "../style/heading";
import SVG from 'react-inlinesvg';

const Container = styled.div`
    position: absolute;
    left: 0; right: 0;
    top: 0; bottom: 0;
    margin: auto;
    z-index: 28;
    width: 100vw;
    height: 100vh;
    padding: 100px;
    background-color: ${theme.color.blue};
`;

const Close = styled.button`
    cursor: pointer;
    position: absolute;
    top: 130px;
    right: 130px;
    width: 40px;
    height: 40px;
    z-index: 28;
`;

const SubContainer = styled.div`
    text-align: left;
    width: 100%;
    height: 100%;
    padding: 80px 100px;
    background-color: #fff;
    border: 3px solid #000;
    box-shadow: 6px 6px 0px 0px rgba(0,0,0,1);
    font-family: "Demos Next Pro", serif;
    font-size: 20px;
`;

const TitleContainer = styled.div`
    width: 110px;
    display: block
`;

const Title = styled.h3`
    line-height: 1;
    font-size: 28px;
    font-family: 'Cera Basic', sans-serif;
    font-weight: bold;
`;

const StyledUnderline = styled(ChartUnderline)`
    margin-top: 10px;
`;

const ListContainer = styled.ul`
    margin: 20px 0 40px 0;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 385px;
    height: 100px;
    margin-top: 40px;
`;

const Gobelins = styled(SVG)`
    width: 141px;
    height: 100px;
`;

const CCI = styled(SVG)`
    width: 193px;
    height: 60px;
`;


const About = (props) => {
    //TODO add links
    return (
        <Container>
            <SubContainer>
                <Close onClick={props.toggleModal}>
                    <SVG src="./assets/svg/cross.svg"/>
                </Close>
                <TitleContainer>
                    <Title>
                        Sources
                        <StyledUnderline src="./assets/svg/wave-line-right.svg" />
                    </Title>
                </TitleContainer>
                <ListContainer>
                    <Tips>
                        <a href="https://bit.ly/2EaxUxI" target="_blank" rel="noopener noreferrer">Ademe</a>
                    </Tips>
                    <Tips>
                        <a href="" target="_blank" rel="noopener noreferrer">Green IT</a>
                    </Tips>
                    <Tips>
                        Rapport “<a href="http://www.clickclean.org/france/fr/" target="_blank" rel="noopener noreferrer">ClickingClean</a>”, 2017, GreenPeace
                    </Tips>
                    <Tips>
                        “<a href="" target="_blank" rel="noopener noreferrer">Total Consumer Power Consumption Forecast</a>”, 2017, Dr. Anders S.G. Andrae
                    </Tips>
                    <Tips>
                        Rapport “<a href="https://bit.ly/2zNZBde" target="_blank" rel="noopener noreferrer">The Global Internet Phenomena</a>”, 2018, Sandvine
                    </Tips>
                </ListContainer>
                <TitleContainer>
                    <Title>
                        Crédit
                        <StyledUnderline src="./assets/svg/wave-line-right.svg" />
                    </Title>
                </TitleContainer>
                <ListContainer>
                    <Tips>Sulyvan Batt</Tips>
                    <Tips>Sébastien Hernoux</Tips>
                </ListContainer>

                <p>Site réalisé dans le cadre d'un projet étudiant de data visualisation</p>

                <LogoContainer>
                    <Gobelins src="./assets/svg/logo/gobelins.svg" />
                    <CCI src="./assets/svg/logo/cci.svg" />
                </LogoContainer>
            </SubContainer>
        </Container>
    );
};

export default About;
