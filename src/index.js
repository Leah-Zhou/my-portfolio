
import React from 'react';
import ReactDOM from 'react-dom';
import MainContent from './components/Main';





const HomePage =()=>{
  return (
    <>
    <MainContent />
    </>
  )
}

ReactDOM.render(
 <HomePage />,
  document.getElementById('root')
);

