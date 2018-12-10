import React from 'react';
import AnimatedTitle from '../../UI/AnimatedTitle';
import { VUE } from '../../../store/actions/index';
import {
    Container,
    TitleUnderline,
} from './DataCentersStyle';
import { Title, Description, ChartTitle, ChartUnderline } from "../../style/heading";
import { BoxOpacity } from '../../style/animation';
import { isVue } from '../../../methods';
import styled from 'styled-components';

const StyledCharTitle = styled(ChartTitle)`
    margin-top: 35px;
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
            console.log('show')
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
                        'Car derrière Internet et des termes comme « Cloud » se cache toute une infrastructure réseau ainsi' +
                        ' que de multiples data centers stockant tout le contenu d’Internet.' +
                        ' Ces équipements ainsi que vos ordinateurs et smartphones personnels génèrent du gaz à effet de serre.'
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
