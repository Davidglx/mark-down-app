import React from 'react';
import { Alert } from '@mui/material';

const ErrorPage = () => {
  return (
    <Alert severity='error'>Incorrect hexcode: Please enter a correct hexcode!!!</Alert>
  )
}

export default ErrorPage;
