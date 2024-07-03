import React from 'react'
import Dialog from '@mui/material/Dialog';
import { createTheme, ThemeProvider } from '@mui/material';

export default function Dialogs({ open, setOpen, children }) {
    const theme = createTheme({
        components: {
            MuiBackdrop: {
                styleOverrides: {
                    root: {
                        background: 'transparent',
                        backdropFilter:'blur(0px)'
                    },
                },
            },
        }
    })

    const handleClose = () => {
        setOpen(false);
    };
    
    return (
        <ThemeProvider theme={theme}>
            <Dialog
                sx={{
                    borderRadius: '7px'
                }}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div className='px-[25px] py-[19px] h-auto'>
                    {children}
                </div>
            </Dialog>
        </ThemeProvider>
    )
}