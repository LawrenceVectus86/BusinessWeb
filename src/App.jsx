import React from 'react';
import Home from '../src/components/Home/Home'
import About from '../src/components/About/About'
import work from '../src/components/WorkSpace/WorkSpace'
import WorkSpace from '../src/components/WorkSpace/WorkSpace';
import Location from './components/Location/Location';
import Testi from './components/Testimonials/Testi';
import Footer from './components/Footer/Footer';
import Test from './components/TestDesign/Test'

const App = () => {
  return (
    <>
    <Home/>
    <About/>
    <WorkSpace/>
    <Location/>
    <Testi/>
    <Footer/>
  </>
  );
};

export default App;