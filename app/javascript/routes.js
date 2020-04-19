import React from 'react';

import AlbumScreen from './screens/album';
import DiscoveryScreen from './screens/discovery';
import FavoritesScreen from './screens/favorites';
import HomeScreen from './screens/home';
import SearchScreen from './screens/search';

import { Switch, Route } from 'react-router-dom';

const Routes = (props) => (
    <Switch>
        <Route exact patch='/' component={ HomeScreen }/>
        <Route exact patch='/discovery' component={ DiscoveryScreen }/>
        <Route exact patch='/search' component={ SearchScreen }/>
        <Route exact patch='/album/:id' component={ AlbumScreen }/>
        <Route exact patch='/favorites' component={ FavoritesScreen }/>
    </Switch>
);

export default Routes;