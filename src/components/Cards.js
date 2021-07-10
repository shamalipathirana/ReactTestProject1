import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='../src/images/img-1.jpg'
              text='Vegan cream cheese frosting'
              label='CHEESE'
              path='/services'
            />
            <CardItem
              src='../src/images/img-2.jpg'
              text='Vegan carrot cake'
              label='CARROT'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='../src/images/img-3.jpg'
              text='Vegan banana cake'
              label='BANANA'
              path='/services'
            />
            <CardItem
              src='../src/images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='../src/images/img-5.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}