import React, {useEffect, useState} from 'react';
import Values from 'values.js'
import './App.css';
import ErrorPage from './ErrorPage';
import SingleDisplay from './SingleDisplay';


const App = () => {
  const [color, setColor] = useState("");
  const [list, setList] = useState(new Values("#eeeee4").all(2));
  const [error, setError] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 3000)
  }, [error]);


  return (
    <div className='container'>
      <h1 className='heading'>HEXCODE COLOR GENERATOR</h1>
      <div className='input'>
        <input
        placeholder='#EEEE4'
        className='color'
        value={color}
        onChange={(e) => setColor(e.target.value)}
        type="text"
        />
        <button className='btn' onClick={handleClick}>Generate</button>
        </div>
        <div className='display-col'>{error && <ErrorPage />}</div>
        <div className='display-color'>
          {list.map((lists, index) => {
            return <SingleDisplay key={index} {...lists} index={index} />
          })}
      </div>
    </div>
  )
}

export default App;

