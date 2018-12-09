import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import Home from './pages/Home/Home'
import Mail from './pages/Mail/Mail'
import DataCentersContainer from '../containers/DataCentersContainer';
import ShapesLayoutContainer from '../containers/ShapesLayoutContainer';
import BandwidthContainer from '../containers/BandwidthContainer';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

const RouteContainer = posed.div({
    enter: {
        opacity: 1,
        delay: 300,
        beforeChildren: true,
    },
    exit: {
        opacity: 0
    }
});

const Landing = () => (
    <Route render={({ location }) => (
        <ShapesLayoutContainer>
                <PoseGroup>
                    <RouteContainer key="xp" >
                        <Switch location={location}>
                            <Route exact path="/" component={Home} key="home" />
                            <Route path="/pourquoi" component={DataCentersContainer} key="why" />
                            <Route path="/quelle-quantité" component={Mail} key="mail" />
                            <Route path="/par-qui" component={BandwidthContainer} key="bandwidth" />
                        </Switch>
                    </RouteContainer>
                </PoseGroup>
        </ShapesLayoutContainer>
    )} />
);

export default Landing;

