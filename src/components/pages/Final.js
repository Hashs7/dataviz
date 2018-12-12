import React, {Component} from 'react';
import lottie from "lottie-web";
import styled from "styled-components";
import { ChartUnderline } from "../style/heading";
import posed from "react-pose";

const Container = styled.div``;

const AbsoluteCenter = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right:0;
    margin: auto;
    z-index: 20;
`;

const Plane = styled(AbsoluteCenter)`
    max-width: 1440px;
    height: 800px;
    width: 100%;
`;

export const BoxPosed = posed.div({
    enter: {
        opacity: 1,
        staggerChildren: 50,
        transition: {
            duration: 1000,
            opacity: { type: 'tween', delay: 3000 },
        }
    },
    exit: {
        opacity: 0,
        applyAtEnd: { display: 'none' },
        transition: {
            duration: 200,
            opacity: { type: 'tween' },
        }
    }
});

const ContentContainer = styled(AbsoluteCenter)`
    width: 405px;
    height: 180px;
    text-align: left;
    font-family: 'Cera Basic', sans-serif;
    font-weight: bold;
    transform: translate(150px, 10px);
`;

const Title = styled.h3`
    display: block;
    font-size: 33px;
    max-width: 305px;
    line-height: 1.2;
    font-family: 'Cera Basic', sans-serif;
    font-weight: bold;
`;

const CO2 = styled.h2`
    display: block;
    font-size: 58px;
    font-family: 'Cera Basic', sans-serif;
    font-weight: bold;
`;
const Underline = styled(ChartUnderline)`
    width: 134px;
`;

class Final extends Component {
    constructor(props){
        super(props);
        this.plane = React.createRef();
    }
    componentDidMount(){
        setTimeout(() => {
            lottie.loadAnimation({
                container: this.plane.current,
                renderer: 'svg',
                loop: false,
                autoplay: true,
                path: './assets/avion-exit.json'
            });
        }, 2000);
    }

    render() {
        return (
            <Container>
                <Plane ref={this.plane} />
                <BoxPosed>
                    <ContentContainer>
                        <Title>Votre navigation sur ce site a généré</Title>
                        <CO2>1,21g de CO2e</CO2>
                        <Underline src="./assets/svg/wave-line-right.svg"/>
                    </ContentContainer>
                </BoxPosed>
            </Container>
        );
    }
}

export default Final;
