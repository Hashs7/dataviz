import React from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { ChartUnderline } from "../style/heading";
import {Link} from "react-router-dom";
import { BoxTransition } from "../style/animation";
import TipContainer from "../../containers/TipContainer";
import {VUE} from "../../store/actions";

const Container = styled(BoxTransition)`
    z-index: 15;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: ${props => props.height}px;
    text-align: center;
`;

const TextContainer = styled.div`
    color: ${props => props.black ? '#000' : '#FFF'};
    display: inline-block;
    vertical-align: middle;
    text-align: left;
`;

const Picto = styled(SVG)`
    display: inline-block;
    vertical-align: middle;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    margin-right: 50px;
    & svg polyline{
        stroke: ${props => props.black ? '#000' : '#FFF'} !important;
    }
`;

const Fact = styled.h4`
    font: 24px 'Demos Next Pro', serif;
    font-weight: 500;
    font-style: italic;
    line-height: 1.5;
    max-width: 572px;
`;

const Tip = styled.h3`
    margin-top: 5px;
    font: 32px 'Cera Basic', sans-serif;
    font-weight: bold;
    max-width: 510px;
    line-height: 1.25;
`;

const LinkButton = styled.a`
    display: inline-block;
    height: 52px;
    font-size: 16px;
    font-weight: bold;
    vertical-align: top;
    line-height: 45px;
    border-radius: 26px;
    border: 3px solid #fff;
    padding: 0 30px;
    margin-left: 20px;
    transition: all .2s ease-in-out;
    color: #FFF;
    box-sizing: border-box;
    text-transform: uppercase;
    &:focus{
        outline: none;
    }
    &:hover {
        color: #000;
        background-color: #FFF;
    }
`;

const Text = styled.span`
    display: inline-block;
    font-size: 16px;
    vertical-align: middle;
`;

const ValidButton = styled.button`
    display: inline-block;
    vertical-align: top;
    width: 140px;
    height: 52px;
    line-height: 46px;
    border-radius: 26px;
    border: 3px solid #000;
    background-color: #fff;
    box-shadow: 0px 6px 0px 0px rgba(0,0,0,1);
    text-transform: uppercase;
    font: 16px #000;
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

const Underline = styled(ChartUnderline)`
    margin-bottom: 20px;
`;


const tipsContent = {
    equipement: {
        key: "equipement",
        to: "/quelle-quantité",
        vueIndex: VUE.MAIL_QUANTITY,
        width: 210,
        height: 305,
        black: false,
        picto: "./assets/svg/ui/phone.svg",
        fact: "47% de la pollution numérique est produite par les utilisateurs et leurs équipements personnels.",
        tip: "Faites durer vos équipements numériques afin de diminuer considérablement leur impact."
    },
    messagerie: {
        key:"messagerie",
        to:"/par-qui",
        vueIndex: VUE.TRAFIC_BW,
        width: 210,
        height: 268,
        black: true,
        picto:"./assets/svg/ui/letters-tip.svg",
        fact:"L’envoi de mail et leur stockage dans votre messagerie constitue une source importante d’émission C02.",
        tip:"Videz régulièrement votre boite mail et privilégiez des services de messageries instantanées."
    },
    services: {
        key:"services",
        to:"/a-venir",
        vueIndex: VUE.FUTUR,
        width: 144,
        height: 247,
        link:"http://www.clickclean.org/france/fr/take-action/",
        picto:"./assets/svg/ui/light.svg",
        fact:"Les services que nous utilisons n’ont pas les mêmes engagements en matière d’éco responsabilité.",
        tip:"Les sources d’énergies qu’ils utilisent sont préoccupantes.",
    }
}

const TipTransition = ({id, changeVue}) => {
    const {picto, fact, tip, to, link, height, width , black} = tipsContent[id];
    return (
        <Container height={height} >
            <Picto width={width} height={height} src={picto}/>
            <TextContainer black={black}>
                <Fact>{fact}</Fact>
                <Tip>{tip}</Tip>
                <Underline src="./assets/svg/wave-line-right.svg" black={black}/>
                <div>
                    <Link to={to}>
                        <ValidButton onClick={() => changeVue(tipsContent[id].vueIndex)}>
                            <Text>ok</Text>
                        </ValidButton>
                    </Link>
                    {link ?
                        <LinkButton href={link} target="_blank" rel="noopener">
                            je leur fais savoir
                        </LinkButton>
                        : null}
                </div>
            </TextContainer>
        </Container>
    );
};

export default TipTransition;


