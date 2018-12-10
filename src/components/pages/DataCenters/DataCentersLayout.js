import React from 'react';
import AnimatedShape from '../../UI/Shape';
import { DIRECTION, STUFF } from "../../../constantes";
import { isVue } from '../../../methods'
import {
    SVGWaves,
    ComputerContainer, ComputerSubContainer, CloudRelativeContainer, LegendComputer, Computer, LegendUnderline,
    Wifi, LegendWifi,
    CloudContainer, Cloud, LegendCloud, CloudPath
} from './DataCentersStyle';
import { BoxOpacity } from '../../style/animation';
import * as Snap from "snapsvg";
import { VUE } from '../../../store/actions';


const DataCentersLayout = (props) =>  {
    const { vueIndex, stuffHover, changeVue } = props;


    const cutScissors = () => {
        const snapC = Snap("#scissorsPath");
        // SVG C - "Squiggly" Path
        const myPathC = snapC.path("M369.18,26.66A127.21,127.21,0,0,0,343,46.2c-11,10.58-57.56,24.08-72.7,29.09-25.69,8.51-69.65,29-93.1,74.06-24.39,46.88-53.73,62.76-68.77,68-12.55,4.41-24.64,9.9-35.2,17.41C43.55,255.9,1.92,299.47,32.05,365.51,76.34,462.57,156,464.77,156,464.77s107.34,6.62,191,72.79c40,31.66,99.75,33,151.17,25.84C548.28,556.39,595,537,635,509c32.22-22.53,84.62-50,147.44-48.68a205.6,205.6,0,0,0,69.24-10.1").attr({
            id: "squiggle",
            fill: "none",
            strokeWidth: "0",
            stroke: "transparent",
            strokeMiterLimit: "10",
        });

        // SVG C - Draw Path
        const lenC = myPathC.getTotalLength();

        // SVG C - Animate Path
        myPathC.attr({
            strokeWidth: 0,
            fill: 'none',
        });

        const Scissors = snapC.path("M365.64,8a6,6,0,0,0,3.47,7.77,5.44,5.44,0,0,0,3.69.14L369.69,24h0l-.16.43c-.51-.09-1.06-.2-1.63-.32h0c-6.12-1.37-15.36-4.64-19.71-.65l11.95,2.13h0l1.07.19h0l7.34,1.32-2.55,7h0l-.37,1h0l-4.16,11.4c5.64-1.75,7.45-11.39,9.34-17.36h0c.18-.56.36-1.09.54-1.57l.46.08h0l8.58,1.39a5.43,5.43,0,0,0-1.73,3.25,6.11,6.11,0,0,0,12.07,1.94,5.9,5.9,0,0,0-5-6.91l-5.42-1h0l-8-1.43,2.77-7.62h0L377,12.08a5.9,5.9,0,0,0-3.47-7.77A6,6,0,0,0,365.64,8Zm19.92,21.11A4.28,4.28,0,0,1,384,37.49a4.37,4.37,0,0,1-3.64-5A4.29,4.29,0,0,1,385.56,29.06ZM372.81,5.9a4.23,4.23,0,0,1,2.58,5.48,4.28,4.28,0,0,1-5.58,2.75,4.35,4.35,0,0,1-2.48-5.65A4.19,4.19,0,0,1,372.81,5.9Z");
        Scissors.attr({ id: "scissors", fill: "#000", transform: 'rotate(130deg)' });

        const ScissorsGroup = snapC.g( Scissors  );

        setTimeout( function() {
            Snap.animate(0, lenC, function( value ) {
                let movePoint = myPathC.getPointAtLength( value );
                ScissorsGroup.transform( 't' + parseInt(movePoint.x - 375) + ',' + parseInt( movePoint.y - 25) + 'r' + (movePoint.alpha - 90));
            }, 4500, null, () => changeVue(VUE.DISCOVER));
        });
    };

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
            <button style={{position: 'relative', zIndex: 10}} onClick={cutScissors}>découp ciso</button>
            <CloudContainer>
                <CloudRelativeContainer>
                    <CloudPath id="scissorsPath" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 921.9 594.66">
                    </CloudPath>
                    <AnimatedShape
                        in={vueIndex === 2}
                        delay={2.3}
                        src="./assets/svg/shapes/vue-2/cloud.svg"
                        direction={DIRECTION.RIGHT}
                        width="83vh"
                        height="49%"
                        top="0"
                        right="0"
                        zIndex={4}
                        noExit
                    />
                    {vueIndex === 3 ?
                      <div>
                          <Cloud src="./assets/svg/shapes/vue-2/cloud-after.svg" />
                          <LegendCloud visible={stuffHover === STUFF.DATA}>
                              Data centers
                              <LegendUnderline src="./assets/svg/wave-underline.svg"/>
                          </LegendCloud>
                      </div>
                    : null}
                </CloudRelativeContainer>
            </CloudContainer>
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
