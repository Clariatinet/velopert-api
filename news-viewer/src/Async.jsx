import axios from 'axios';
import React, { useState } from 'react';

const Async = () => {
  const [data, setData] = useState(null);
  const buttonClickHandler = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/1'
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={buttonClickHandler}>불러오기</button>
      <div>
        {data && (
          <textarea
            readOnly={true}
            rows={7}
            value={JSON.stringify(data, null, 2)}
          />
        )}
      </div>
    </div>
  );
};

export default Async;

const key = '4f25e9c84e004a3c9b44b2d53066f04b';
