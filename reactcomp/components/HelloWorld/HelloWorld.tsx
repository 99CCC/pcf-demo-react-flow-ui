import * as React from 'react';
import { Label } from '@fluentui/react-components';
import { useState } from 'react';

export const HelloWorld: React.FC = () => {
  const [t, setT] = useState("test");  
  
  function handleClick(){
    setT(t+"a");
  }
  return (
    <>
      <Label>
        {t}
      </Label>

      <button onClick={handleClick}>click me u sunuvab</button>
    </>
    );
  }
