import React from 'react';
import styled from 'styled-components';
import { theme } from "../../constantes";
import { ChartUnderline, Tips } from "../style/heading";

const Container = styled.div`
    position: absolute;
    left: 0; right: 0;
    top: 0; bottom: 0;
    margin: auto;
    z-index: 15;
    width: 100vw;
    height: 100vh;
    padding: 100px;
    background-color: ${theme.color.blue};
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

const About = (props) => {
    return (
        <Container>
            <SubContainer>
                <button onClick={props.toggleModal}>Fermer</button>
                <TitleContainer>
                    <Title>
                        Sources
                        <StyledUnderline src="./assets/svg/wave-line-right.svg" />
                    </Title>
                </TitleContainer>
                <ListContainer>
                    <Tips>
                        <a href="">Ademe</a>
                    </Tips>
                    <Tips>
                        <a href="">Green IT</a>
                    </Tips>
                    <Tips>
                        Rapport “<a href="">ClickingClean</a>”, 2017, GreenPeace
                    </Tips>
                    <Tips>
                        “<a href="">Total Consumer Power Consumption Forecast</a>”, 2017, Dr. Anders S.G. Andrae
                    </Tips>
                    <Tips>
                        Rapport “<a href="">The Global Internet Phenomena</a>”, 2018, Sandvine
                    </Tips>
                </ListContainer>
                <TitleContainer>
                    <Title>
                        Crédit
                        <StyledUnderline src="./assets/svg/wave-line-right.svg" />
                    </Title>
                </TitleContainer>
                <ListContainer>
                    <Tips>Sulvan Batt</Tips>
                    <Tips>Sébastien Hernoux</Tips>
                </ListContainer>

                <p>Site réalisé dans le cadre d'un projet étudiant de data visualisation</p>
            </SubContainer>
        </Container>
    );
};

export default About;
