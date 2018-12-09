import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import {theme, greenPath, bluePath, orangePath, DIRECTION} from '../../constantes';
import { VUE } from "../../store/actions";
import HomeLayout from "../pages/Home/HomeLayout";
import DataCentersLayoutContainer from "../../containers/DataCentersLayoutContainer";
import MailLayoutContainer from "../../containers/MailLayoutContainer";
import PieChartContainer from "../../containers/PieChartContainer";
import MorphingShape from './MorphingShape';
import ArrowButton from './ArrowButton';
import { isVue } from '../../methods';
import BandwidthLayout from "../pages/Bandwidth/BandwidthLayout";
import AboutContainer from "../../containers/AboutContainer";

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
    z-index: 10;
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
    z-index: 6;
`;

const Logo = styled(SVG)`
    position: relative;
    display: block;
    margin: 30px 0 0 70px;
    width: 40px;
    height: 40px;
    z-index: 5;
`;


class ShapesLayout extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const { vueIndex, modalActive, toggleModal } = this.props;
        const { INDEX, WHY, DISCOVER, MAIL_QUANTITY, MAIL_TYPE, MAIL_DATA, TRAFIC_BW, TRAFIC_SERV, FUTUR, FINAL } = VUE;
        return (
            <Layout>
                <About
                    onClick={toggleModal}
                    color={vueIndex !== 1 ? '#000' : '#FFF'}>à propos</About>
                {vueIndex !== 1 ?
                    <Logo src="./assets/svg/logo.svg"/>
                : null}

                {modalActive ?
                    <AboutContainer />
                :null}

                <MorphingShape
                    in={isVue(vueIndex, [INDEX, WHY, DISCOVER])}
                    direction={DIRECTION.BOTTOM_RIGHT}
                    pathObj={greenPath}
                    pathName="greenPath"
                    event={vueIndex === WHY}
                    color={theme.color.green}/>

                <MorphingShape
                    in={isVue(vueIndex, [WHY, DISCOVER, MAIL_QUANTITY, MAIL_TYPE, MAIL_DATA])}
                    direction={DIRECTION.BOTTOM_RIGHT}
                    pathObj={bluePath}
                    pathName="bluePath"
                    event={vueIndex === MAIL_QUANTITY}
                    color={theme.color.blue}/>

                <MorphingShape
                    in={isVue(vueIndex, [MAIL_QUANTITY, MAIL_TYPE, MAIL_DATA, TRAFIC_BW, TRAFIC_SERV])}
                    pathObj={orangePath}
                    pathName="orangePath"
                    direction={DIRECTION.TOP_RIGHT}
                    event={vueIndex === TRAFIC_BW}
                    color={theme.color.orange}/>

                <HomeLayout in={vueIndex === 1}/>


                <DataCentersLayoutContainer enter={isVue(vueIndex, [WHY, DISCOVER])}/>

                {isVue(vueIndex, [WHY, DISCOVER]) ?
                    <div>
                        <PieChartContainer enter={this.props.vueIndex}/>
                    </div>
                : null}

                <MailLayoutContainer />

                { isVue(vueIndex, [TRAFIC_BW, TRAFIC_SERV]) ?
                    <BandwidthLayout />
                : null}

                {vueIndex === DISCOVER ?
                    <NextButton>
                        <Link to="/quelle-quantité">
                            <ArrowButton action={() => this.props.changeVue(MAIL_QUANTITY)}/>
                        </Link>
                    </NextButton>
                : null }

                {vueIndex === MAIL_DATA ?
                    <NextButton>
                        <Link to="/par-qui">
                            <ArrowButton action={() => this.props.changeVue(TRAFIC_BW)}/>
                        </Link>
                    </NextButton>
                : null }

                {vueIndex === TRAFIC_SERV ?
                    <NextButton>
                        <Link to="/avenir">
                            <ArrowButton action={() => this.props.changeVue(FUTUR)}/>
                        </Link>
                    </NextButton>
                : null }

                {vueIndex === FUTUR ?
                    <NextButton>
                        <Link to="/avenir">
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
