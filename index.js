import './app/lib/common.css';
import React from 'react';
import ReactDOM from 'react-dom';

import Search from './app/components/search';
import Header from './app/components/header';
import Otherapp from './app/components/otherapp';

ReactDOM.render(
    <div>
        <Search />
        <Header source="http://localhost:3001/data/swiper" />
        <Otherapp source="http://localhost:3001/data/otherapp"/>
    </div>,
    document.querySelector('#myApp')
)