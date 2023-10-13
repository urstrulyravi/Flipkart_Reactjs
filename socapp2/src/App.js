import './App.css';
import './css/bootstrap.css'
import Header from './components/Header'
import Catog from './components/Catog';


import React from 'react';
import Banner from './components/Banner';
import Form from './components/Form';

function App() {
  return (
    <>
    <div className='container-fluid'>
      <div className='row head'>
       <Header/>
      </div>
      <Catog/>
      <Form/>
      <Banner/>
    </div>
    </>
  );
}

export default App;