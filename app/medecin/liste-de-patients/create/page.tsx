"use client";

import React, { useState } from 'react';
import { Container, TextField, Button, Typography, MenuItem, Box, Grid} from '@mui/material';
import  styled  from '@emotion/styled';

export default function CreatePatientForm(){
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    dateNaissance: '',
    sexe: '',
    taille: '',
    poids: '',
    allergies: ''
  });

  const FormBox = styled(Box)({
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.75rem',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    console.log(formData);
  };

  return (
    <FormBox>
      <Grid container spacing={2}>
        <Typography variant="h4" component="h1" gutterBottom>
          Créer Un Patient
        </Typography>
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <TextField fullWidth margin="normal" label="Nom" name="nom" value={formData.nom} onChange={handleChange} required />
          <TextField fullWidth margin="normal" label="Prenom" name="prenom" value={formData.prenom} onChange={handleChange} required />
          <TextField fullWidth margin="normal" label="Date de Naissance" name="dateNaissance" type="date" value={formData.dateNaissance} onChange={handleChange} InputLabelProps={{shrink: true}} required />
          <TextField fullWidth margin="normal" select label="Sexe" name="sexe" value={formData.sexe} onChange={handleChange} required >
            <MenuItem value="Homme">Homme</MenuItem>
            <MenuItem value="Femme">Femme</MenuItem>
          </TextField>
          <TextField fullWidth margin="normal" label="Taille (cm)" name="taille" type="number" value={formData.taille} onChange={handleChange} required />
          <TextField fullWidth margin="normal" label="Poids (kg)" name="poids" type="number" value={formData.poids} onChange={handleChange} required />
          <TextField fullWidth margin="normal" label="Allergies" name="allergies" multiline rows={4} value={formData.allergies} onChange={handleChange} />
          <Box sx={{ mt: 2 }}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Confirmer
            </Button>
          </Box>
        </form>
      </Grid>
    </FormBox>
  );
};

