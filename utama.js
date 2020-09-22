import React from 'react';
import {Switch,Route} from 'react-router-dom';

import Beranda from './beranda';
import Protokol from './protokol';
import Pesebaran from './pesebaran';

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route path="/protokol" component={Protokol} />
        <Route path="/pesebaran" component={Pesebaran} />
    </Switch>
)

export default Utama;