import Breadcrumbs from "@/app/ui/medecin/breadcrumbs";
import React from 'react';
import { TextField, Button, Table, TableBody, TableCell, TableHead, TableRow, Typography, Box, TextareaAutosize } from '@mui/material';


export default function CreatePerscription (){
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                { label: "Liste des ordonnances", href: '/medecin/ordonnances/' },
                {
                    label: 'Nouvelle Ordonnance',
                    href: `/medecin/ordonnances/create`,
                    active: true,
                },
                ]}
            />
        </main>
    );
}

