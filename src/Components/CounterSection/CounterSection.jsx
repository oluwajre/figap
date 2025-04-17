import React from 'react';
import './CounterSection.css';
import Counter from '../Counter/Counter';
import { counter_homes, counter_buildings, counter_hospitals, counter_states } from '../../assets/images';

const CounterSection = ({backgroundColor, alternate}) => {
  return (
    <section className="counter-section" style={{backgroundColor: backgroundColor}}>
        <div className="container">
            <div className="row my-5 p-5 justify-content-between">
                <div className="col-12 text-center my-0 my-sm-5 appear">
                  <p className='text-uppercase section-title-p text-primary'>About</p>
                  <h1 className='display-6 fw-bold mb-4'><span className='text-primary'>.</span> Pure Numbers <span className='text-primary'>and Only</span></h1>
                </div>
                <Counter text='States' target='9'  imgSrc={counter_states} alternate={alternate}/>
                <Counter text='Public Sector & Institutions' target='18'  imgSrc={counter_hospitals} alternate={alternate}/>
                <Counter text='Commercial & Industrial' target='39'  imgSrc={counter_buildings} alternate={alternate}/>
                <Counter text='Homes' target='154'  imgSrc={counter_homes} alternate={alternate}/>
            </div>
        </div>
    </section>
  )
}

export default CounterSection