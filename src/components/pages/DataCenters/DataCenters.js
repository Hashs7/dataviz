import React from 'react';
import AnimatedTitle from '../../UI/AnimatedTitle';
import { VUE } from '../../../store/actions/index';
import {
    Container,
    TitleUnderline,
    StyledCharTitle
} from './DataCentersStyle';
import { Title, Description, ChartUnderline } from "../../style/heading";
import { isVue } from '../../../methods';
import styled from 'styled-components';
const StyledContainer = styled(Container)`
    margin: 40px 0 0 170px;
    max-width: 460px;
    @media (max-height: 1060px) {
        margin: 40px 0 0 170px;
    }
`;

class DataCenters extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            txt: '',
            desc: '',
            show: false
        };
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                txt: 'Pourquoi ?',
                show: true
            })
        }, 1700);
    }

    render(){
        const vueIndex = this.props.vueIndex;
        return (
            <StyledContainer>
                <Title>
                    <AnimatedTitle size={48} weight="bold">
                        {this.state.txt}
                    </AnimatedTitle>
                </Title>

                    {this.state.show ?
                        <TitleUnderline src="./assets/svg/wave-underline-double.svg"/>
                    : null}
                <Description>
                    {isVue(vueIndex, [VUE.WHY]) && this.state.show ?
                        "Cliquez sur les ciseaux pour découper le nuage et le découvrir."
                    : null}
                    {isVue(vueIndex, [VUE.DISCOVER]) ?
                        'Lors de la production et pendant leurs utilisations, vos ordinateurs et smartphones polluent car ils sont fabriqués à partir de ressources non renouvelables. Ils sont les principaux responsables de la pollution numérique.\n'+
                        'De plus, derrière Internet et le “Cloud” se cachent des infrastructures réseaux avec de multiples “data centers” stockant tout le contenu d’Internet. Ces équipements doivent être refroidi en continu et consomment donc énormément d’énergie.'
                    : null}
                </Description>


                {vueIndex === VUE.DISCOVER ?
                    <StyledCharTitle>
                        Répartition du gaz à effet de serre généré par le numérique
                        <ChartUnderline src="./assets/svg/wave-line-right.svg"/>
                    </StyledCharTitle>
                : null}

            </StyledContainer>
        );
    }
}

export default DataCenters;
