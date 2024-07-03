import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { createTheme, ThemeProvider } from '@mui/material';

export default function Drawers({ open, setOpen, children }) {
    const theme = createTheme({
        components: {
            MuiBackdrop: {
                styleOverrides: {
                    root: {
                        background: 'rgba(81, 81, 81, 0.56)',
                        backdropFilter:'blur(2px)'
                    },
                },
            },
        }
    })
    
    const List = () => (
        <Box
            sx={{ width: 970 }}
            role="presentation"
        >
            <div className='pt-[77px] w-full flex justify-center'>
                {children}
            </div>
        </Box>
    );

    return (
        <ThemeProvider theme={theme}>
            <Drawer
                anchor={'right'}
                open={open}
                onClose={() => setOpen(false)}
            >
                <List />
            </Drawer>
        </ThemeProvider>
    );
}


