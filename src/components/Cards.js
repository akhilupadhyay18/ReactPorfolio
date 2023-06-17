import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>My Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/amigo4_1.png'
              text='Nexus Sphere : 
              A web platform that provides users with the ability to create and manage profiles, connect with others, share multimedia, and engage in social activities.'
              label='Web Development'
              path='/projects'
            />
            <CardItem
              src='images/truchain 1.png'
              text='TruChain : a supply chain forecasting tool that predicts demand, supply, and pricing of products by analyzing data from suppliers. TruChain provides clear visibility during peak demand seasons, helps predict potential bottlenecks, and allows for effective mitigation planning'
              label='Machine Learning'
              path='/projects'
            />
            <CardItem
              src='images/Flavor Flow 1.png'
              text='Flavor Flow : A functionally efficient website that retrieves the recipes for the dishes a user requests and displays it accordingly'
              label='Web Development'
              path='/projects'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/parkhere.png'
              text='Park Here: a parking space detector and counter with computer vision!'
              label='Open CV'
              path='/achievements'
              />
            <CardItem
              src='images/Dhwani.png'
              text='DHWANI : An aggregate feature that allows the user to be able to convey their message using sign and gestures.'
              label='Open CV'
              path='/projects'
              />
            <CardItem
              src='images/climascope.png'
              text='ClimaScope : This website shows the current weather of a region along with the forecast of coming days.'
              label='Web Development'
              path='/projects'
            />
              </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
