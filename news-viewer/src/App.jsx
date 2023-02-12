import axios from 'axios';
import React, { useState } from 'react';

const App = () => {
  const [data, setData] = useState(null);
  const buttonClickHandler = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/photos'
      );
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={buttonClickHandler}>불러오기</button>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
};

export default App;
