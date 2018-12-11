import React from 'react';
import AnimatedTitle from '../../UI/AnimatedTitle';
import { VUE } from '../../../store/actions/index';
import {
    Container,
    TitleUnderline,
    StyledCharTitle
} from './DataCentersStyle';
import { Title, Description, ChartTitle, ChartUnderline } from "../../style/heading";
import { isVue } from '../../../methods';
import styled from 'styled-components';



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
            <Container>
                <Title>
                    <AnimatedTitle size={48} weight="bold">
                        {this.state.txt}
                    </AnimatedTitle>
                </Title>

                    {this.state.show ?
                        <TitleUnderline src="./assets/svg/wave-underline-double.svg"/>
                    : null}
                <Description>
                    {isVue(vueIndex, [2]) && this.state.show ?
                        "Découpez le nuage à l’aide de votre curseur pour le découvrir."
                    : null}
                    {isVue(vueIndex, [3]) ?
                        'De leur production jusqu’à la fin de leur utilisation, vos ordinateurs et smartphones polluent car ils sont fabriqués à partir de ressources non renouvelables. De plus, derrière Internet et le “Cloud” se cachent toute une infrastructure réseau avec de multiples data centers stockant tout le contenu d’Internet. Ces équipements doivent être constamment maintenus à basse température et consomme donc énormément d’énergie.'
                    : null}
                </Description>


                {vueIndex === VUE.DISCOVER ?
                    <StyledCharTitle>
                        Répartition du gaz à effet de serre généré par le numérique
                        <ChartUnderline src="./assets/svg/wave-line-right.svg"/>
                    </StyledCharTitle>
                : null}

            </Container>
        );
    }
}

export default DataCenters;
