import React from 'react';
import Kursus from './state/State';
import Materi from './props/Prop';
import './props/style.css';

function App() {
  return (
    <div className="wrapperapp">
    <p>Example</p>
    <hr/>
    <Materi img={require('./props/1.png')} des="belajar seo" harga="1200000"/>
    <Materi img={require('./props/2.jpg')} des="belajar google adword" harga="4200000"/>
    <Materi img={require('./props/3.jpg')} des="belajar react js" harga="1200000"/>

    </div>
  );
}

export default App;
