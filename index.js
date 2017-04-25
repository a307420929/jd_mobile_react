import './app/lib/common.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Search from './app/components/search';

ReactDOM.render(
    <div>
       <Search />
    </div>,
    document.querySelector('#myApp')
)