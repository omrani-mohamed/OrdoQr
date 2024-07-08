import * as React from 'react';
import { lusitana } from "@/app/ui/fonts";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {UserCircleIcon} from '@heroicons/react/24/outline';

export default function AccordionExpandDefault() {
  return (
    <main>
        <div className="rounded-md bg-gray-100 p-4 md:p-4">
            <div>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Ajouter ou modifier vos données personnelles</h1>
            </div>
            <div>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                <div>
                    <Typography className='pl-8'>identité</Typography>
                    <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[24px] w-[24px] -translate-y-1/2 text-gray-500" />
                </div>
                </AccordionSummary>
                <AccordionDetails>
                <form>
                    {/* Nom */}
                    <div className="mb-4">
                        <label className="mb-2 block text-sm font-medium">
                            Nom : 
                        </label>
                        <div className="relative">
                            <input
                            id="Nom"
                            name="NomID"
                            required
                            className="block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                            >
                            </input>
                        </div>
                    </div>
                    {/* Prenom */}
                    <div className="mb-4">
                        <label className="mb-2 block text-sm font-medium">
                            Prenom : 
                        </label>
                        <div className="relative">
                            <input
                            id="Prenom"
                            name="PrenomID"
                            required
                            className="block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                            >
                            </input>
                        </div>
                    </div>
                </form>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                >
                <Typography>Contact</Typography>
                </AccordionSummary>
                <AccordionDetails>

                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                <Typography>Adresse Cabinet</Typography>
                </AccordionSummary>
                <AccordionDetails>
                
                </AccordionDetails>
            </Accordion>
            </div>
        </div>
    </main>
  );
}
