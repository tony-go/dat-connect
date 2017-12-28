import React from 'react';
const css = require('sheetify');

css('./Header.css');

class Header extends React.Component{
    render() {
        return <h1>Bienvenue sur Dat Connect</h1>;
    }
}

export default Header; 