import React from 'react';
import AnimatedTitle from '../../UI/AnimatedTitle';
import { VUE } from '../../../store/actions/index';
import {
    Container,
    TitleUnderline,
} from './DataCentersStyle';
import { Title, Description, ChartTitle, ChartUnderline } from "../../style/heading";
import { BoxOpacity } from '../../style/animation';


class DataCenters extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            txt: '',
            desc: '',
            show: false
        };
        this.discoverHandler = this.discoverHandler.bind(this);
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                txt: 'Pourquoi ?',
                desc: 'Découpez le nuage à l’aide de votre curseur pour le découvrir.',
                show: true
            })
        }, 1700);
    }

    discoverHandler(){
        this.props.changeVue(VUE.DISCOVER);
        this.setState({
            desc: 'Car derrière Internet et des termes comme « Cloud » se cache toute une infrastructure réseau ainsi' +
                ' que de multiples data centers stockant tout le contenu d’Internet.' +
                ' Ces équipements ainsi que vos ordinateurs et smartphones personnels génèrent du gaz à effet de serre.'
        });
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
                <BoxOpacity pose={this.state.show ? 'visible' : 'hidden'}>
                    <TitleUnderline src="./assets/svg/wave-underline-double.svg"/>
                </BoxOpacity>
                <Description>
                    {this.state.desc}
                </Description>

                {vueIndex === VUE.DISCOVER ?
                    <ChartTitle>
                        Répartition du gaz à effet de serre généré par le numérique
                        <ChartUnderline src="./assets/svg/wave-line-right.svg"/>
                    </ChartTitle>
                : null}

                <button onClick={this.discoverHandler}>découper</button>
            </Container>
        );
    }
}

export default DataCenters;
