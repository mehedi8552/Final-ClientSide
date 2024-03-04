import React from 'react';
import Layout from '../Component/Layout/Layout';
import me from '../assets/me.jpg'
const HomePage = () => {
    return (
        <Layout>
        <img src={me}  width={700} height={700}  alt="" />
        
        </Layout>
    );
};

export default HomePage;