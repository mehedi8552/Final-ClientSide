import React, { Children } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import {Toaster} from 'react-hot-toast'

const Layout = (props) => {
    return (
        <div>
            <NavBar/>
            <Toaster position = "top-center" />
            {props.children}      
            <Footer/>
        </div>
    );
};

export default Layout;