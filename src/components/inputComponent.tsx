import { Box, Button, Input, Stack } from '@mui/material'
import React, { useState } from 'react'

interface Props {
    handleGenerateCode: (value: any) => void
}

const InputComponent = ({ handleGenerateCode }: Props) => {

    const [inputValue, setInputValue] = useState({
        title : '',
        text : ''
    });

    return (
        <Box sx={{
            display: 'inline-flex'
        }}>
            <Stack sx={{ width: '198px' }}>
                <Input
                    placeholder="Add Title..."
                    onChange={(e) => {
                        setInputValue({ ...inputValue , title : e.target.value})
                    }}
                />
            </Stack>
            <Stack sx={{ width: '198px' ,marginLeft : '4px'}}>
                <Input
                    placeholder="Type Content..."
                    onChange={(e) => {
                        setInputValue({ ...inputValue , text : e.target.value})
                    }}
                />
            </Stack>
            <Stack sx={{ marginLeft: '25px' }}>
                <Button
                    onClick={() => {
                        handleGenerateCode(inputValue);
                    }}
                    sx={{
                        textTransform: 'none',
                        backgroundColor: '#89ef89',
                        color: '#4d3f3f',
                        '&:hover': {
                            backgroundColor: "#45a049",
                        },
                    }}
                >Generate</Button>
            </Stack>
        </Box>
    )
}

export default InputComponent