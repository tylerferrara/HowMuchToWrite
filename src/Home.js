import React  from 'react';
import './Home.css';

const Home = () => {
  // const _handleKeyPress = (e) => {
  // if (e.key === 'Enter') {
  //   console.log('do validate');
  // }
  return (
    <div className='Home'>
      <h1>Am I done yet?</h1>
      <input type="number" placeholder="# of words" onKeyPress={(e) => keyPress(e)}/>
    </div>
  )
}

function keyPress(e) {
  if(e.key === 'Enter') {
    console.log('Wants to validate');
  }
}

export default Home;
