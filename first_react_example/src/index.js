// import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// create a React component (relies on React library)

/* by convention, double quotes for JSX properties, single quotes everywhere else.
   additionally, use className instead of class for JSX to avoid consitions with keyword class
   ex. class App extend React.Component */

// we can reference variables in JSX html through {} or reference a function returning the variable contents
function getButtonText() {
  return 'Submit!'
}
const App = () => {
  const buttonText = 'Submit!';

  return (
  <div> 
    <label className = "label" htmlFor = "name">Enter name: </label>
    <input id = "name" type = "text" placeholder = "Anna Wang"/>
    <button style={{background:'Blue', color:'White'}}>{buttonText}</button>
    <button style={{background:'Red', color:'White'}}>{getButtonText()}</button>
  </div>
  );
}

// show the App component on the screen (relies on ReactDOM library)
ReactDOM.render(<App />, document.querySelector('#root'));

