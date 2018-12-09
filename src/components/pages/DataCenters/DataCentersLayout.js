import React from 'react';
import AnimatedShape from '../../UI/Shape';
import { DIRECTION, STUFF } from "../../../constantes";
import { isVue } from '../../../methods'
import {
    SVGWaves,
    ComputerContainer, ComputerSubContainer, CloudRelativeContainer, LegendComputer, Computer, LegendUnderline,
    Wifi, LegendWifi,
    CloudContainer, Cloud, LegendCloud
} from './DataCentersStyle';
import { BoxOpacity } from '../../style/animation';

const DataCentersLayout = (props) =>  {
    const { vueIndex, stuffHover, enter } = props;

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

            {vueIndex === 3 ?
                <CloudContainer>
                    <CloudRelativeContainer>
                        <Cloud src="./assets/svg/shapes/vue-2/cloud-after.svg" />
                        <LegendCloud visible={stuffHover === STUFF.DATA}>
                            Data centers
                            <LegendUnderline src="./assets/svg/wave-underline.svg"/>
                        </LegendCloud>
                    </CloudRelativeContainer>
                </CloudContainer>
            : null}

            <AnimatedShape
                in={isVue(vueIndex, [2, 3])}
                direction={DIRECTION.TOP_RIGHT}
                delay={2}
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
};

export default DataCentersLayout;
