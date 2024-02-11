import React, { useState } from 'react'
import './App.css'
import ClearIcon from '@mui/icons-material/Clear';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';

function App() {
  const [input, setInput] = useState(''); // to handle input and output
  
  const handleClick = (value) => {
    // to avoid adding operator just after operator
    // Check if the new input is an operator
    const isOperator = ['+', '-', '*', '/'].includes(value);
    // Check if the last character of the input is also an operator
    const lastCharIsOperator = ['+', '-', '*', '/'].includes(input.slice(-1));

    // If the new input is an operator and the last character is also an operator, do not append
    if (isOperator && lastCharIsOperator) {
      return;
    }

    // if pressed character is = then calculate the result
    if(value === '='){
      Calculate();
    }
    // if its AC then clear input box
    else if(value === 'AC'){
      ClearAll();
    }
    // if its C then remove last element
    else if(value === 'C'){
      Clear();
    }
    // else check if error ,essage present then replace that
    // error message by new input else add element to the previous string
    else{
      setInput(input === 'Error' ? value : input + value);
    }
  }

  // for = button
  // calculate the result by converting input into string and 
  //then do math calculation using eval function
  const Calculate = () => {
    try{
      setInput(eval(input).toString());
    }
    // handle error
    catch(error){
      setInput('Error');
    }
  };

  // for AC button, clear input box
  const ClearAll = () => {
    setInput('');
  }

  // for C button, remove last element from string using slice method
  const Clear = () => {
    setInput(input.slice(0, -1));
  }




  return (
    <>
    <h1>Calculator<CalculateOutlinedIcon/></h1>
    <div className='main'>
      <div className="input">
        {/* onChange is to avoid warning by replacing old input by latest input */}
        <input type="text" value={input} placeholder='0' onChange={(e) => setInput(e.target.value)}/>
      </div>
      <div className="container">
        <div className='row-1'>
          <button className='operator' onClick={() => handleClick('AC')}>AC</button>
          <button className='operator' onClick={() => handleClick('C')}>C</button>
          <button className='operator' onClick={() => handleClick('%')}>%</button>
          <button className='operator' onClick={() => handleClick('/')}>/</button>
        </div>
        <div className='row-1'>
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button className='operator' onClick={() => handleClick('*')}><ClearIcon/></button>
        </div>
        <div className='row-1'>
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button className='operator' onClick={() => handleClick('-')}>-</button>
        </div>
        <div className='row-1'>
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button className='operator' onClick={() => handleClick('+')}>+</button>
        </div>
        <div className='row-1'>
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('00')}>00</button>
          <button className='operator' onClick={() => handleClick('.')}>.</button>
          <button id='equal' onClick={() => handleClick('=')}>=</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
