"use client";

import { Box, Button, Container, TextField, Typography, Grid, FormLabel } from '@mui/material';
import Image from 'next/image';
import styled from '@emotion/styled';
import Logo from '../logo';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

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
  padding: '0.75rem',
  height: '100%',
});

const LogoContainer = styled('div')({
    height: '80px', 
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px', 
  });

export default function LoginForm(){
  const [code, action] = useFormState(authenticate, undefined);
    return(
        <main className="flex min-h-screen flex-col p-6">
        <LogoContainer className='rounded-lg bg-blue-500 p-4'>
            <Logo />
        </LogoContainer>
        <LoginBox>
          <Grid container spacing={2}>
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
                <form action={action} className='w-full max-w-lg'>
                  <TextField
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    type='email'
                    id='email'
                    name='email'
                    fullWidth
                    required
                  />
                  <TextField
                    id="password"
                    name='password'
                    label="Password"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    type="password"
                    required
                  />
                  <Grid item xs={12}>
                      <LoginButton />
                    <div className="flex h-8 items-end space-x-1">
                      {(code!= null) && (
                          <>
                            <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                            <p aria-live="polite" className="text-sm text-red-500">
                              Informations d&apos;identification invalides
                            </p>
                          </>
                        )}
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <FormLabel>Vous n&apos;avez pas de compte ? <Link className="text-blue-500" href="/register">Créer un compte</Link></FormLabel>
                  </Grid>
                </form>
              </FormContainer>
            </Grid>
          </Grid>
        </LoginBox>
    </main>
    );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button className='bg-blue-500' type="submit" variant="contained" color="primary" fullWidth aria-disabled={pending}>
      Se connecter<ArrowRightIcon className="ml-4 h-5 w-5 text-gray-50" />
    </Button>
  );
}