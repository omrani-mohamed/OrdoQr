import Breadcrumbs from "@/app/ui/medecin/breadcrumbs";
import React from 'react';
import CreatePrescription from "@/app/ui/ordonnances/create-form";

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
            <CreatePrescription/>
        </main>
    );
}

