import React from 'react';
import ExpertTeam from '../../ExpertTeam/ExpertTeam';
import AboutUs from '../AboutUs/AboutUs';
import ClubMembers from '../ClubMembers/ClubMembers';
import Features from '../Features/Features';
import Features2 from '../Features2/Features2';
import HomeHeader from '../HomeHeader/HomeHeader';
import Pricing from '../Pricing/Pricing';
import ServiceSample from '../ServiceSample/ServiceSample';
import Skill from '../Skill/Skill';
import './Home.css';
const Home = () => {
    return (
        <div>
            <HomeHeader></HomeHeader>
            
            <Features></Features>
            <AboutUs></AboutUs>
            <ClubMembers></ClubMembers>
            <ServiceSample></ServiceSample>
            <Pricing></Pricing>
            <Skill></Skill>
            <ExpertTeam></ExpertTeam>
        </div>
    );
};

export default Home;