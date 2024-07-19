'use client';

import React, { useState } from 'react';
import { Button, TextField, Typography, Grid, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import styled from '@emotion/styled';
import Logo from '@/app/ui/logo';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LogoContainer = styled('div')({
  height: '80px', 
  display: 'flex',
  alignItems: 'center',
  marginBottom: '20px', 
});

export default function RegisterForm() {
  const router = useRouter();
  const [role, setRole] = useState('medecin');
  const [specialty, setSpecialty] = useState('');
  const [adress, setAdress] = useState('');

  const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole(event.target.value);
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get('name') as string;
    const firstname = formData.get('firstname') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const password = formData.get('password') as string;
    const confpassword = formData.get('confpassword') as string;
    const address = formData.get('address') as string;
    const specialty = formData.get('specialty') as string;

    if (password !== confpassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }
    if (phone.length!== 8){
      alert ("Il s'agit d'un numero de téléphone invalide");
      return;
    }

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name,
          firstname,
          email,
          phone,
          password,
          role,
          address,
          specialty: role === 'medecin' ? specialty : null,
        }),
      });

      if (response.status === 201) {
        alert("Votre compte a été créer avec succée.");
        router.push("/login");
      }

    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <main className="flex min-h-screen flex-col p-6">
      <LogoContainer className='rounded-lg bg-blue-500 p-4'>
        <Logo />
      </LogoContainer>
      <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center max-w-lg m-auto'>
        <Typography variant="h3" component="h1" gutterBottom className='mr-auto'>
          Créer un compte
        </Typography>
        <Typography className='mr-auto'>
          Entrez vos coordonnées ci-dessous pour créer un compte.
        </Typography>
        <br />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="Nom" type="text" name="name" id="name" variant="outlined" margin="normal" fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Prénom" type="text" name="firstname" id="firstname" variant="outlined" margin="normal" fullWidth required />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Email" type="email" name="email" id="email" variant="outlined" margin="normal" fullWidth required />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Numéro téléphone" type="number" name="phone" id="phone" variant="outlined" margin="normal" fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Mot de passe" type="password" name="password" id="password" variant="outlined" margin="normal" fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Confirmer le mot de passe" type="password" name="confpassword" id="confpassword" variant="outlined" margin="normal" fullWidth required />
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Rôle</FormLabel>
              <RadioGroup row aria-label="role" name="role" id="role" value={role} onChange={handleRoleChange}>
                <FormControlLabel value="medecin" control={<Radio />} label="Médecin" />
                <FormControlLabel value="patient" control={<Radio />} label="Patient" />
              </RadioGroup>
            </FormControl>
          </Grid>
          {role === 'medecin' && (
            <Grid item xs={12}>
              <TextField label="Spécialité" type="text" name="specialty" id="specialty" variant="outlined" margin="normal" fullWidth value={specialty} onChange={(e) => setSpecialty(e.target.value)} />
            </Grid>
          )}
          {role === 'medecin' && (
            <Grid item xs={12}>
              <TextField label="Adresse Cabinet" type="text" name="address" id="address" variant="outlined" margin="normal" fullWidth value={adress} onChange={(e) => setAdress(e.target.value)} />
            </Grid>
          )}
          <Grid item xs={12}>
            <Button className='bg-blue-500' type="submit" variant="contained" color="primary" fullWidth>
              Confirmer
            </Button>
          </Grid>
          <Grid item xs={12}>
            <FormLabel>Vous avez déjà un compte? <Link className="text-blue-500" href="/login">Se connecter</Link></FormLabel>
          </Grid>
        </Grid>
      </form>
    </main>
  );
}
