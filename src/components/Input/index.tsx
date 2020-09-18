import React, { useEffect, useRef } from 'react';
import {useField} from '@unform/core';
import { TextField } from '@material-ui/core';


interface inputProps{
  name: string;
}


export const Input: React.FC<inputProps> = ({name}) => {

  const inputRef = useRef(null);
  const {fieldName, registerField} = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [fieldName, registerField])


  return (
    <TextField id="standard-basic"inputRef={inputRef} />
  );

}
