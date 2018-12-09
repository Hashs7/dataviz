import React from 'react';
import posed from 'react-pose';
import AnimatedShape from '../../UI/Shape';
import { DIRECTION, STUFF } from "../../../constantes";
import { isVue } from '../../../methods'
import {
    SVGWaves,
    ComputerContainer, ComputerSubContainer, LegendComputer, Computer, LegendUnderline,
    Wifi, LegendWifi,
    CloudContainer, Cloud, LegendCloud
} from './DataCentersStyle';

const BoxOpacity = posed.div({
    visible: {
        opacity: 1,
        transition: {
            duration: 300,
            opacity: { type: 'tween' },
        }
    },
    visibleDelay: {
        opacity: 1,
        transition: {
            type: 'physics',
            delay: 400
        }
    },
    hidden: {
        opacity: 0,
        duration: 300,
        transition: {
            opacity: { type: 'tween' },
        }
    },
})


class DataCentersLayout extends React.Component {
    constructor(props){
        super(props)

    }

    componentDidMount(){

    }


    render(){
        const { vueIndex, stuffHover } = this.props;

        return (
            <div>
                <AnimatedShape
                    in={isVue(vueIndex, [2, 3])}
                    delay={0.5}
                    src="./assets/svg/shapes/vue-2/shape-dot.svg"
                    direction={DIRECTION.TOP_LEFT}
                    maxWidth="754px"
                    width="71vh"
                    maxHeight="928px"
                    height="84vh"
                    top="-3px"
                    left="-15px"
                    zIndex={3}
                />
                <BoxOpacity pose={isVue(vueIndex, [2, 3]) ? 'visibleDelay' : 'hidden'}>
                    <SVGWaves src="./assets/svg/shapes/vue-2/shape-wave.svg" />
                </BoxOpacity>

                <button onClick={this.discoverCloud}>wow</button>

                <BoxOpacity pose={vueIndex === 3 ? 'visible' : 'hidden'}>
                    <ComputerContainer>
                        <ComputerSubContainer>
                            <Computer src="./assets/svg/computer.svg" />
                            <LegendComputer visible={stuffHover === STUFF.PERSO}>
                                Equipements personnels
                                <LegendUnderline src="./assets/svg/wave-underline.svg"/>
                            </LegendComputer>
                            <Wifi src="./assets/svg/wifi.svg" />
                            <LegendWifi visible={stuffHover === STUFF.RESEAU}>
                                Infrastructures réseaux
                                <LegendUnderline src="./assets/svg/wave-underline.svg"/>
                            </LegendWifi>
                        </ComputerSubContainer>
                    </ComputerContainer>
                </BoxOpacity>


                <AnimatedShape
                    in={vueIndex === 2}
                    delay={2.3}
                    src="./assets/svg/shapes/vue-2/cloud.svg"
                    direction={DIRECTION.RIGHT}
                    width="83vh"
                    height="49%"
                    top="130px"
                    right="-100px"
                    zIndex={4}
                    noExit
                />

                {vueIndex === 2 ? null :
                    <CloudContainer>
                        <Cloud src="./assets/svg/shapes/vue-2/cloud-after.svg" />
                        <LegendCloud visible={stuffHover === STUFF.DATA}>
                            Data centers
                            <LegendUnderline src="./assets/svg/wave-underline.svg"/>
                        </LegendCloud>
                    </CloudContainer>
                }

                <AnimatedShape
                    in={vueIndex === 2 || vueIndex === 3}
                    direction={DIRECTION.TOP_RIGHT}
                    src="./assets/svg/shapes/vue-2/shape-orange.svg"
                    maxWidth="1052px"
                    width="55%"
                    height="274px"
                    top="-3px"
                    right="-3px"
                    zIndex="2"
                />
            </div>
        );
    }
}

export default DataCentersLayout;
