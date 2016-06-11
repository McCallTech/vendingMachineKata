console.log("Hello World!");

import React from 'react';
import ReactDOM from 'react-dom';
import HiMom from './components/Hi-Mom';

let expectedProps = {
    className: 'hi-mom',
    text : 'Do not deploy!: 4'
};



ReactDOM.render(
  <HiMom {...expectedProps}/>,
  document.getElementById('app')
);
