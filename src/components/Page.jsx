import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const pages = ['Manual', 'Release Notes'];

function ResponsiveAppBar() {
    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    top: 0,
                    left: 0,
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    width: '100%',
                }}
            >
                <Toolbar disableGutters sx={{ padding: '0 24px', flexDirection: { xs: 'column', md: 'row' } }}>
                    <GitHubIcon sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#"
                        sx={{
                            mr: 2,
                            display: 'flex',
                            fontFamily: 'monospace',
                            fontWeight: 500,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        CLI
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, flexDirection: { xs: 'column', md: 'row' }, mt: { xs: 2, md: 0 } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => window.location.href = `#${page.toLowerCase().replace(' ', '-')}`}
                                sx={{ my: 2, color: 'white', display: 'block', "&:hover": { textDecoration: 'underline' } }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>

            <Box
                sx={{
                    width: '100%',
                    height: '80vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: { xs: '0 10%', md: '0 5%' },
                }}
            >
                <Typography variant='h1' sx={{ fontWeight: 800, color: '#E6EDF3', fontSize: { xs: '2rem', md: '3rem' } }}>
                    Take GitHub to the command line
                </Typography>
                <Typography variant='h6' sx={{ color: '#6e7681', mt: 2, fontSize: { xs: '1rem', md: '1.25rem' } }}>
                    GitHub CLI brings GitHub to your terminal. Free and open source.
                </Typography>
                <Button variant='contained' color='inherit' sx={{ width: { xs: '80%', md: '40%' }, padding: '16px', color: 'black', mt: 3 }}>
                    Download for Windows
                </Button>
                <Link variant='h6' sx={{ color: 'white', mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    View installation instructions <ArrowRightAltIcon sx={{ ml: 1 }} />
                </Link>
            </Box>

            <Box sx={{
                width: '100%',
                height: '9`0vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                backgroundImage: 'url(/src/assets/light-glow.svg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <Typography variant='h6' sx={{ fontWeight: 300, color: '#E6EDF3', fontSize: { xs: '1rem', md: '1.25rem' } }}>
                    $ gh repo view
                </Typography>
                <Typography variant='h6' sx={{ fontWeight: 300, color: '#E6EDF3', fontSize: { xs: '1rem', md: '1.25rem' }, mt: 1 }}>
                    Check on the status of your pull requests.
                </Typography>
                <Box sx={{
                    width: { xs: '90%', sm: '80%', md: '60%' },
                    backgroundColor: 'black',
                    padding: 4,
                    margin: '0 auto',
                    borderRadius: 2,
                    boxShadow: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mb: 5,
                    mt: 5
                }}>
                    <Typography variant='h6' sx={{ color: 'green', fontWeight: 300 }}>
                        $
                    </Typography>
                    <Typography variant='h6' sx={{ color: 'white', fontWeight: 300 }}>
                        gh repo view
                    </Typography>
                </Box>
            </Box>

        </>
    );
}

export default ResponsiveAppBar;
