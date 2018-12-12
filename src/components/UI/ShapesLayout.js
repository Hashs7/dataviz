import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { VUE } from "../../store/actions";
import HomeLayout from "../pages/Home/HomeLayout";
import EnergyLayout from "../pages/Energy/EnergyLayout";
import BandwidthLayout from "../pages/Bandwidth/BandwidthLayout";
import DataCentersLayoutContainer from "../../containers/DataCentersLayoutContainer";
import MailLayoutContainer from "../../containers/MailLayoutContainer";
import PieChartContainer from "../../containers/PieChartContainer";
import AboutContainer from "../../containers/AboutContainer";
import MorphingShape from './MorphingShape';
import ArrowButton from './ArrowButton';
import { isVue } from '../../methods';
import {theme, greenPath, bluePath, orangePath, bluePathSecond, orangePathSecond, DIRECTION} from '../../constantes';
import TipContainer from "../../containers/TipContainer";

const Layout = styled.div`
    position: relative;
    text-align: center;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    font-family: 'Cera Basic';
`;

const About = styled.button`
    position: absolute; 
    top: 40px;
    right: 70px;
    z-index: 20;
    cursor: pointer;
    font: 16px ${theme.font.second};
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: ${props => props.color};
    transition: all .2s ease;
`;

const NextButton = styled.div`
    position: absolute;
    right: 100px;
    bottom: 80px;
    z-index: 26;
`;

const LogoHome = styled(SVG)`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 105px;
    margin: auto;
    width: 65px;
    height: 65px;
`;

const LogoContainer = styled.div`
    position: relative;
    z-index: 20;
    margin: 30px 0 0 70px;
    width: 210px;
    height: 40px;
    color: ${props => props.white ? '#FFF' : '#000'};
`;

const Logo = styled(SVG)`
    display: inline-block;
    vertical-align: middle;
    width: 40px;
    height: 40px;
`;

const TitleLogo = styled.span`
    display: inline-block;
    vertical-align: middle;
    text-transform: uppercase;
    font-size: 16px;
    font-family: "Cera Basic", sans-serif;
    font-weight: bold;
    margin-left: 20px;
`;


const ShapesMorphingLayout = ({vueIndex}) => {
    const { INDEX, WHY, DISCOVER, TRANSITION_MAIL, MAIL_QUANTITY, MAIL_TYPE, MAIL_DATA, TRANSITION_TRAFIC, TRAFIC_BW, TRAFIC_SERV, TRANSITION_ENERGY, FUTUR, FINAL } = VUE;

    return (
        <div>
            <MorphingShape
                in={isVue(vueIndex, [INDEX, WHY, DISCOVER])}
                direction={DIRECTION.BOTTOM_RIGHT}
                pathObj={greenPath}
                pathName="greenPath"
                event={vueIndex === WHY}
                color={theme.color.green}/>

            <MorphingShape
                in={isVue(vueIndex, [WHY, DISCOVER, MAIL_QUANTITY, MAIL_TYPE, MAIL_DATA, TRANSITION_MAIL])}
                direction={DIRECTION.BOTTOM_RIGHT}
                pathObj={bluePath}
                pathName="bluePath"
                event={vueIndex === TRANSITION_MAIL}
                eventOut={isVue(vueIndex, [MAIL_QUANTITY])}
                transition
                color={theme.color.blue}/>

            <MorphingShape
                in={isVue(vueIndex, [MAIL_QUANTITY, MAIL_TYPE, MAIL_DATA, TRAFIC_BW, TRAFIC_SERV, TRANSITION_TRAFIC])}
                pathObj={orangePath}
                pathName="orangePath"
                transition
                direction={DIRECTION.TOP_RIGHT}
                event={vueIndex === TRANSITION_TRAFIC}
                eventOut={isVue(vueIndex, [TRAFIC_BW])}
                color={theme.color.orange}/>

            <MorphingShape
                in={isVue(vueIndex, [TRAFIC_BW, TRAFIC_SERV, TRANSITION_ENERGY, FUTUR])}
                pathObj={bluePathSecond}
                pathName="bluePathSecond"
                transition
                direction={DIRECTION.BOTTOM_RIGHT}
                event={vueIndex === TRANSITION_ENERGY}
                eventOut={isVue(vueIndex, [FUTUR])}
                color={theme.color.blue}/>

            <MorphingShape
                in={isVue(vueIndex, [FUTUR, FINAL])}
                pathObj={orangePathSecond}
                pathName="orangePathSecond"
                direction={DIRECTION.BOTTOM_RIGHT}
                event={vueIndex === FINAL}
                color={theme.color.orange}
                oneTime/>
        </div>
    );
};

class ShapesLayout extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const { vueIndex, modalActive, toggleModal } = this.props;
        const { INDEX, WHY, DISCOVER, TRANSITION_MAIL, MAIL_QUANTITY, MAIL_TYPE, MAIL_DATA, TRANSITION_TRAFIC, TRAFIC_BW, TRAFIC_SERV, TRANSITION_ENERGY, FUTUR, FINAL } = VUE;
        return (
            <Layout>
                <About
                    onClick={toggleModal}
                    color={isVue(vueIndex, [INDEX, TRANSITION_MAIL, TRANSITION_ENERGY]) ? '#FFF' : '#000'}>à propos</About>

                {vueIndex !== INDEX ?
                    <LogoContainer white={isVue(vueIndex, [TRANSITION_MAIL, MAIL_QUANTITY, MAIL_TYPE, MAIL_DATA, TRANSITION_ENERGY, FUTUR])}>
                        <Logo src="./assets/svg/logo.svg" />
                        <TitleLogo>World Wide Help</TitleLogo>
                    </LogoContainer> :
                    <LogoHome src="./assets/svg/logo.svg" />
                }

                {modalActive ?
                    <AboutContainer />
                :null}
                <ShapesMorphingLayout vueIndex={vueIndex}/>

                <HomeLayout in={vueIndex === INDEX}/>

                <DataCentersLayoutContainer enter={isVue(vueIndex, [WHY, DISCOVER])}/>

                {isVue(vueIndex, [WHY, DISCOVER]) ?
                    <div>
                        <PieChartContainer enter={this.props.vueIndex}/>
                    </div>
                : null}

                <MailLayoutContainer />
                <BandwidthLayout vueIndex={vueIndex} />
                <EnergyLayout vueIndex={vueIndex} />

                {vueIndex === DISCOVER ?
                    <NextButton>
                        <Link to="/conseil-equipement">
                            <ArrowButton action={() => this.props.changeVue(TRANSITION_MAIL)}/>
                        </Link>
                    </NextButton>
                : null }

                {vueIndex === MAIL_DATA ?
                    <NextButton>
                        <Link to="conseil-messagerie">
                            <ArrowButton action={() => this.props.changeVue(TRANSITION_TRAFIC)}/>
                        </Link>
                    </NextButton>
                : null }

                {vueIndex === TRAFIC_SERV ?
                    <NextButton>
                        <Link to="/conseil-services">
                            <ArrowButton action={() => this.props.changeVue(TRANSITION_ENERGY)}/>
                        </Link>
                    </NextButton>
                : null }

                {vueIndex === FUTUR ?
                    <NextButton>
                        <Link to="/final">
                            <ArrowButton action={() => this.props.changeVue(FINAL)}/>
                        </Link>
                    </NextButton>
                : null }

                {this.props.children}
            </Layout>
        );
    }
}

export default ShapesLayout;
