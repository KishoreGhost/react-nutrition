import React from 'react';
import { useState } from 'react';

function FoodBox(props) {
  let { element, index } = props;
  let { img, name, cal } = element;

  const [input, setInput] = useState(0);
  const [quantity, setQuantity] = useState(0);

  function quantityClick() {
    setQuantity(input);
  }

  return (
    <>
      <div className='parent'>
        <div className='first-div'>
          <img src={img} alt="" />
          <div className='div'>
            <span><b>{name}</b></span>
            <span>{cal}</span>
          </div>

          <input
            type="number"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          ></input>

          <button onClick={quantityClick}>+</button>
        </div>

        <div id="hi">
          <p>
            {quantity} {name} = {quantity * cal} Calories
          </p>

          <button
            onClick={() => {
              setInput(0);
              setQuantity(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default FoodBox;
