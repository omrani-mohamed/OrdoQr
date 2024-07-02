'use client';

import { Box, Button, Container, TextField, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import styled from '@emotion/styled';
import Logo from '../ui/logo';
import Footer from '../ui/footer';

const LoginBox = styled(Box)({
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
});

const SVGContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f0f0f0',
  padding: '1rem',
  '@media (max-width: 480px)': {
    display: 'none',
  },
});

const FormContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
  height: '100%',
});

const FormBox = styled(Box)({
  width: '100%',
  maxWidth: '400px',
});

const LogoContainer = styled('div')({
    height: '80px', 
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px', 
  });

export default function LoginPage() {
    
  return (
    <main className="flex min-h-screen flex-col p-6">
    <LogoContainer className='rounded-lg bg-blue-500 p-4'>
        <Logo />
    </LogoContainer>
    <LoginBox>
      <Grid container>
        <Grid item xs={12} md={6}>
          <SVGContainer className='rounded-lg'>
            <Image
              src="/demat.svg"
              alt="Login Illustration"
              priority
              width={400}
              height={400}
              style={{ width: 'auto', height: 'auto' }}
            />
          </SVGContainer>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormContainer>
            <Typography variant="h4" component="h1" gutterBottom>
              Se connecter
            </Typography>
            <FormBox component="form">
              <TextField
                label="Email"
                variant="outlined"
                margin="normal"
                fullWidth
              />
              <TextField
                label="Password"
                variant="outlined"
                margin="normal"
                fullWidth
                type="password"
              />
              <Button className=' bg-blue-500' type="submit" variant="contained" color="primary" fullWidth>
                Se connecter
              </Button>
            </FormBox>
          </FormContainer>
        </Grid>
      </Grid>
    </LoginBox>
    <br></br>
      <hr></hr>
      <Footer />
    </main>
  );
}
