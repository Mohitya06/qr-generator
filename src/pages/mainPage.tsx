import React, { useState } from 'react'
import { Box } from '@mui/material';
import InputComponent from '../components/inputComponent.tsx';
import QrComponent from '../components/qrComponent.tsx';

const MainPage = () => {

  const [inputValue, setInputValue] = useState({
    title: '',
    text: ''
  });

  const handleGenerateCode = (value: {text : string , title : string}) => {
    setInputValue(value);
  }

  return (
    <Box>
      <InputComponent handleGenerateCode={handleGenerateCode} />
      <QrComponent inputValue={inputValue} />
    </Box>
  )
}

export default MainPage