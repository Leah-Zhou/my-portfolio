
import React from 'react';
import ReactDOM from 'react-dom';
import PasswordGate from './components/PasswordGate';





const HomePage = () => {
  return <PasswordGate />;
};

ReactDOM.render(
 <HomePage />,
  document.getElementById('root')
);

