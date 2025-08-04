import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { HomePage, AboutPage, ContactPage, ServicesPage, ServiceDetailsPage, MainServiceDetailPage } from './Pages';
import { PageLoader } from './Components';
import { PageTitle, ScrollAnimation } from './utils';
import './App.css';

function App() {

  return (
    <Router>
      <PageLoader>
        <Routes>
          <Route 
            path='/'
            element={
              <>
                <HomePage />
                <PageTitle title='' />
                <ScrollAnimation />
              </>
             } 
          />

          <Route 
            path='/about'
            element={
              <>
                <AboutPage />
                <PageTitle title='About Us' />
                <ScrollAnimation />
              </> 
             } 
          />

          {/* <Route 
            path='/contact'
            element={
              <>
                <ContactPage />
                <PageTitle title='Contact Us' />
                <ScrollAnimation />
              </> 
             } 
          /> */}

          {/* <Route 
            path='/services'
            element={
              <>
                <ServicesPage />
                <PageTitle title='Our Services' />
                <ScrollAnimation />
              </> 
             } 
          /> */}

          {/* <Route 
            path='/services/service_detail/:id'
            element={
              <>
                <ServiceDetailsPage />
                <PageTitle title='Service Details' />
              </> 
             } 
          /> */}

          {/* <Route 
            path='/services/service_detail'
            element={
              <>
                <MainServiceDetailPage />
                <PageTitle title='Service Detail' />
                <ScrollAnimation />
              </> 
             } 
          /> */}

          <Route 
            path='*'
            element={
              <div className='d-flex flex-column gap-3 align-items-center justify-content-center min-vh-100 min-vw-100'>
              <h1>Page Not Found</h1>
              <Link className='btn btn-primary' to='/'>Back to home</Link>
              </div>
            }
          />
        </Routes>
      </PageLoader>
    </Router>
  )
}

export default App
