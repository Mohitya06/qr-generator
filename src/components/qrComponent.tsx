import { Box, IconButton, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import QRCode from 'react-qr-code';
import QrCodeIcon from '@mui/icons-material/QrCode';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import * as htmlToImage from 'html-to-image';
import CircularProgress from '@mui/material/CircularProgress';

const squareBoxStyle = {
    marginTop: '20px',
    width: '485px',
    height: '429px',
    marginLeft: '368px',
    border: '2px solid #000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

interface Props {
    inputValue: { text: string, title: string };
}

const QrComponent = ({ inputValue }: Props) => {

    const [isLoading, setIsLoading] = useState(false);
    const qrCodeRef = useRef<any>(null);

    const downloadQrCode = async () => {
        const dataUrl = await htmlToImage.toPng(qrCodeRef.current);

        const link = document.createElement('a');
        link.download = `${inputValue.title}.png`;
        link.href = dataUrl;
        link.click();
    };

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000)
    }, [inputValue])

    return (
        <>
            <Box style={squareBoxStyle} >
                {isLoading ?
                    <CircularProgress color="secondary" />
                    :

                    inputValue.text.length > 0 ? (
                        <QRCode
                            ref={qrCodeRef}
                            size={236}
                            style={{ height: 'auto', maxWidth: '70%', width: '70%', margin: '0' }}
                            value={inputValue.text}
                            viewBox={`0 0 256 256`}
                        />
                    ) : (
                        <Box
                            sx={{
                                border: '2px solid #000',
                                width: '150px',
                                height: '150px',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '90px',
                                display: 'block',
                            }}
                        >
                            <QrCodeIcon fontSize="large" sx={{ marginTop: '53px' }} />
                            <Typography sx={{ fontSize: 'small' }}>Generate QR Code</Typography>
                        </Box>
                    )
                }

            </Box>

            <Box>
                <IconButton
                    onClick={downloadQrCode}
                    disabled={inputValue.text.length > 0 && inputValue.title.length > 0 ? false : true}
                    aria-label="download"
                    color="secondary"
                    style={{ fontSize: '2rem' }}
                >
                    <DownloadOutlinedIcon fontSize="large" />
                </IconButton>
            </Box>
        </>
    );
};

export default QrComponent;
