import React, {Component} from 'react';
import lottie from "lottie-web";
import styled from "styled-components";
import { ChartUnderline } from "../style/heading";
import posed from "react-pose";

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

const Info = styled.span`
    position: absolute;
    top: 10px;
    right: -28px;
    width: 22px;
    line-height: 22px;
    height: 22px;
    text-align: center;
    border-radius: 50%;
    border: 2px solid #000;
    font-size: 14px;
    font-family: 'Cera Basic',sans-serif;
    font-weight: 900;
`;

const CO2 = styled.h2`
    position: relative;
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
            <div>
                <Plane ref={this.plane} />
                <BoxPosed>
                    <ContentContainer>
                        <Title>Votre navigation sur ce site a généré</Title>
                        <CO2>1,21g de CO2e
                            <a href="">
                                <Info>i</Info>
                            </a>
                        </CO2>
                        <Underline src="./assets/svg/wave-line-right.svg"/>
                    </ContentContainer>
                </BoxPosed>
            </div>
        );
    }
}

export default Final;
