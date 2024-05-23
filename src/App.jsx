import React from 'react'
import Navbar  from './components/navbar/navbar';
import Page from './components2/page1';
import Cards from './components3/page2card';
import Page3 from './components4/page3';
import Page4 from './components5/page4';
import Page5 from './components6/page5';
import Page6 from './components7/page6';
import Page7 from './components8/page7';
import Page8 from './components9/page8';


const App=()=>{
  return (
    <>
    <Navbar/>
    <Page/>
    <Cards />
    <Page3/>
    <Page4/>
    <Page5/>
    <div className='card1-container' id="shop">
    <Page6 imgsrc="./img1.png" title="CLIENT NAME"/>
    <Page6 imgsrc="./img2.png" title="CLIENT NAME"/>
    <Page6 imgsrc="./img4.png" title="CLIENT NAME"/>
    <Page6 imgsrc="./img3.png" title="CLIENT NAME"/>
    </div>
    <div className='card2-container'>
    <Page7 imgsrc="./p7img1.png" title="SAN ISIDRO, HAMPTON, COUNTRY"/>
    <Page7 imgsrc="./p7img2.png" title="CREEKSIDE, LOUVE, COUNTRY"/>
    <Page7 imgsrc="./p7img3.png" title="SEBAST, FRAUGH, COUNTRY"/>
    <Page7 imgsrc="./p7img4.png" title="ZEPHYR, HAMPTON, COUNTRY"/>
    </div>
    <Page8/>
    </>
  );
};
export default App