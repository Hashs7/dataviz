import React from 'react';
import AnimatedTitle from '../../UI/AnimatedTitle';
import { VUE } from '../../../store/actions/index';
import {
    Container,
    Title,
    TitleUnderline,
    Description,
    PieChartTitle,
    PieChartUnderline
} from './DataCentersStyle';

class DataCenters extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            txt: '',
            desc: 'Découpez le nuage à l’aide de votre curseur pour le découvrir.'
        };
        this.discoverHandler = this.discoverHandler.bind(this);
    }

    componentDidMount(){
        setTimeout(() => this.setState({txt: 'Pourquoi ?'}), 1700);

    }

    discoverHandler(){
        this.props.changeVue(VUE.DISCOVER);
        this.setState({
            desc: 'Car derrière Internet et des termes comme « Cloud » se cache toute une infrastructure réseau ainsi' +
                ' que de multiples data centers stockant tous le contenu d’Internet.' +
                ' Ces équipements ainsi que vos ordinateurs et smartphones personnelles génèrent du gaz à effet de serre.'
        });
    }

    render(){
        return (
            <Container>
                <Title>
                    <AnimatedTitle size={48} weight="bold">
                        {this.state.txt}
                    </AnimatedTitle>
                </Title>
                <TitleUnderline src="./assets/svg/wave-underline-double.svg"/>
                <Description>
                    {this.state.desc}
                </Description>

                {this.props.vueIndex === 3 ?
                    <PieChartTitle>
                        Répartition du gaz à effet de serre généré par le numérique
                        <PieChartUnderline src="./assets/svg/wave-line-right.svg"/>
                    </PieChartTitle>
                : null}

                <button onClick={this.discoverHandler}>découpe sa mer</button>
            </Container>
        );
    }
}

export default DataCenters;
