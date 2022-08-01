import React from 'react';
import Header from '../Header/Header';
import Description from '../Description/Description';
import Icon from '../Icon/Icon';
import IconContainer from '../IconContainer/IconContainer';
import RandomText from '../../RandomText/RandomText';
import CardContainer from '../CardContainer/CardContainer';
import Form from '../Form/Form';
import Footer from '../Footer/Footer';
const Home = () => {
    return (
        <div>
      
      <Description/>
      <IconContainer/>
      <RandomText/>
      <CardContainer/>
      
        </div>
    );
};

export default Home;