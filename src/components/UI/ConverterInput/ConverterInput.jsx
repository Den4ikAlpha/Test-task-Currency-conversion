import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function ConverterInput(props) {
    return (
      <>
        <TextField id="outlined-basic" label={props.label} value={props.value} variant="outlined" onChange={props.onChange} />
      </>
    );
  }