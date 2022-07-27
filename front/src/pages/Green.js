import React, { useState } from 'react';
import { ScrollDown } from '../components';
import CheckCircleSolid from '../assets/icons/check-circle-solid.js';
import '../css/green.css';

const Green = () =>{

  const [ingredients, setIngredients] = useState('');
  const [allergies, setAllergies] = useState('');
  const [result, setResult] = useState(null);

  const ingredientPlaceholder = 'Enter a list of ingredients separated by \',\' \n' +
  '(Example: Water, Organic Coconut Oil*, Potassium Hydroxide†, Organic Palm Kernel Oil*, Organic Olive Oil*, ' +
  'Mentha Arvensis, Organic Hemp Oil, Organic Jojoba Oil, Mentha Piperita, Citric Acid, Tocopherol)';

  const allergiesPlaceholder = 'Enter your allergies… \nThis website does not collect your datas';

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('ingredients = ' + ingredients);
    console.log('allergies = ' + allergies);
    fetch("/green/?ingredients=" + ingredients)
      .then((res) => res.json())
      .then((data) => setResult(data.message));
  }

  return (
    <div>
      <div id='green-part-one'>
        <div className='input-container'>
          <form className='green-form-cont' onSubmit={(e) => handleSubmit(e)}>
            {/* <label>Your list of ingredients:<br/> */}
              <textarea className='ingredient-txtarea' type='text' placeholder={ingredientPlaceholder} value={ingredients} onChange={e => setIngredients(e.target.value)} maxLength='2000' />
            {/* </label> */}
            {/* <label>Allergies:<br/> */}
              <textarea className='allergies-txtarea' type='text' placeholder={allergiesPlaceholder} value={allergies} onChange={e => setAllergies(e.target.value)} maxLength='200'/>
            {/* </label> */}
            <button type='submit'>GREEN?</button>
          </form>
        </div>
        {/* Need to appear only when get result, with a loading image while waiting? */}
        <div className='result-container'>
          <div className='result-box'>
            <CheckCircleSolid className='check-icon'/>
            <p>{!result ? "Loading..." : result }</p>
          </div>
          <ScrollDown name='More details'/>
        </div>
      </div>
      <div id='green-part-two'>
      </div>
    </div>
);
}
export default Green;