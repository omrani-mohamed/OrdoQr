'use client';

import React from 'react';
import {Box, Button, TextField, Typography, Grid, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import styled from '@emotion/styled';
import Logo from '@/app/ui/logo';
import Link from 'next/link';

const LoginBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '500px',
    margin: 'auto',
  });

const LogoContainer = styled('div')({
  height: '80px', 
  display: 'flex',
  alignItems: 'center',
  marginBottom: '20px', 
});


export default function RegisterForm(){
    const [role, setRole] = React.useState('medecin');

    const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRole(event.target.value);
    };
  
    return (
      <main className="flex min-h-screen flex-col p-6">
        <LogoContainer className='rounded-lg bg-blue-500 p-4'>
          <Logo />
        </LogoContainer>
        <LoginBox>
            <Typography variant="h3" component="h1" gutterBottom className='mr-auto'>
              Créer un compte
            </Typography>
            <Typography className='mr-auto'>
              entrez vos coordonnées ci-dessous pour créer un compte.
            </Typography>
            <br />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField label="Nom" variant="outlined" margin="normal" fullWidth type="text"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Prenom" variant="outlined" margin="normal" fullWidth type="text"/>
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Email" variant="outlined" margin="normal" fullWidth type="email"/>
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Numero téléphone" variant="outlined" margin="normal" fullWidth type="number" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Mot de passe" variant="outlined" margin="normal" fullWidth type="password"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Confirmer le mot de passe" variant="outlined" margin="normal" fullWidth type="password"/>
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Adresse Cabinet" variant="outlined" margin="normal" fullWidth type="text" />
                </Grid>
                <Grid item xs={12}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Role</FormLabel>
                    <RadioGroup row aria-label="role" name="role" value={role} onChange={handleRoleChange}>
                      <FormControlLabel value="medecin" control={<Radio />} label="Medecin" />
                      <FormControlLabel value="patient" control={<Radio />} label="Patient" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormLabel>Dans le cas où vous êtes médecin : </FormLabel>
                  <TextField label="Spécialité" variant="outlined" margin="normal" fullWidth type="text" />
                </Grid>
                <Grid item xs={12}>
                  <Button className='bg-blue-500' type="submit" variant="contained" color="primary" fullWidth>
                    Confirmer
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <FormLabel>Vous avez déjà un compte? <Link className="text-blue-500" href="/login">Se connecter</Link></FormLabel>
                </Grid>
              </Grid>
        </LoginBox>
      </main>
    );
}
