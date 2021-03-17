import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import AuthOptions from '../auth/AuthOptions';
import Logo from '../Movie/Logo'

class Header extends Component {
render() {
return (

<header className="header">
<Logo />
<Link to="/"><h1 className="title">Dietsii</h1></Link>
<AuthOptions />
</header>
);
}
}
export default Header;