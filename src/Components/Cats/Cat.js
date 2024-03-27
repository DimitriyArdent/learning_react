import React, { useMemo, useState, useEffect } from 'react';
import useCustomHook from '../../useLocalStorage';

function Cat({   img }) {
  const [variable, setVariable] = useState(false);

 
 
  return (
    <div>
      <img style={{height:'150px', width:'200px'}} src={img}></img>
    </div>
  );
}

export default Cat;
