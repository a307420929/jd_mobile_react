import './app/lib/common.css';
import React from 'react';
import ReactDOM from 'react-dom';

import Search from './app/components/search';
import Header from './app/components/header';

ReactDOM.render(
    <div>
        <Search />
        <Header source="http://localhost:3001/data/swiper" />
    </div>,
    document.querySelector('#myApp')
)