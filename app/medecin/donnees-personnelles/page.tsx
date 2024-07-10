import * as React from 'react';
import { lusitana } from "@/app/ui/fonts";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {UserCircleIcon} from '@heroicons/react/24/outline';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button } from '@/app/ui/medecin/button';


export default function PersonalInfoPage() {
  return (
    <main>
        <div className="rounded-md bg-gray-50 p-4 -mx-6 md:mx-0 md:p-4">
            <div>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Ajouter ou modifier vos données personnelles</h1>
            </div>
            <div className='mb-4'>
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
                <hr className='w-auto'/>
                <br />
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
                    {/* Date naissance */}
                    <div className="mb-4">
                        <label className="mb-2 block text-sm font-medium">
                            date naissance : 
                        </label>
                        <div className="relative">
                            <input
                            id="date"
                            name="dateId"
                            type='date'
                            className="block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                            >
                            </input>
                        </div>
                    </div>
                    {/* Title */}
                    <div className="mb-4">
                        <label className="mb-2 block text-sm font-medium">
                            Titre : 
                        </label>
                        <div className="relative">
                            <input
                            id="title"
                            name="titleId"
                            type='text'
                            required
                            className="block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                            >
                            </input>
                        </div>
                    </div>
                    <div className="mt-6 flex justify-end gap-4">
                        <Button type="submit">Enregistrer</Button>
                     </div>
                </form>
                </AccordionDetails>
            </Accordion>
            </div>
            <div className='mb-4'>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                >
                <div>    
                    <Typography className='pl-8'>Contact</Typography>
                    <ContactPhoneOutlinedIcon className="pointer-events-none absolute left-3 top-1/2 h-[24px] w-[24px] -translate-y-1/2 text-gray-500"  />
                </div>
                </AccordionSummary>
                <AccordionDetails>
                    <hr className='w-auto'/>
                    <br />
                <form>
                    {/*numero portable */}
                    <div className="mb-4">
                        <label className="mb-2 block text-sm font-medium">
                            Téléphone portable : 
                        </label>
                        <label className="mb-2 block text-sm font-medium text-gray-200">
                            *Votre numero de téléphone portable ne sera pas affiché a votre patients
                        </label>
                        <div className="relative">
                            <input
                            id="mobilephone"
                            name="mobilephone"
                            type='tel'
                            className="block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                            >
                            </input>
                        </div>
                    </div>
                    {/* numero fixe */}
                    <div className="mb-4">
                        <label className="mb-2 block text-sm font-medium">
                            Téléphone fixe :  
                        </label>
                        <div className="relative">
                            <input
                            id="phone"
                            name="phone"
                            required
                            type="tel"
                            className="block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                            >
                            </input>
                        </div>
                    </div>
                    {/* numero fixe */}
                    <div className="mb-4">
                        <label className="mb-2 block text-sm font-medium">
                            Adresse Email :  
                        </label>
                        <div className="relative">
                            <input
                            id="email"
                            name="email"
                            required
                            type="email"
                            className="block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                            >
                            </input>
                        </div>
                    </div>
                    <div className="mt-6 flex justify-end gap-4">
                        <Button type="submit">Enregistrer</Button>
                    </div>
                </form>
                </AccordionDetails>
            </Accordion>
            </div>
            <div className='mb-4'>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                <div>
                    <Typography className='pl-8'>Adresse Cabinet</Typography>
                    <LocationOnIcon className='pointer-events-none absolute left-3 top-1/2 h-[24px] w-[24px] -translate-y-1/2 text-gray-500'/>
                </div>
                </AccordionSummary>
                <AccordionDetails>
                    <hr />
                    <br />
                    <form>
                    {/* Adresse */}
                    <div className="mb-4 flex lg:flex-row sm:flex-col max-sm:flex-col">
                        <div className="relative lg:mr-8 sm:mr-0 lg:w-1/2 sm:w-auto sm:mb-4">
                            <label className="mb-2 block text-sm font-medium ">
                                Adresse cabinet : 
                            </label>
                            <input
                            id="address"
                            name="address"
                            type="text"
                            className="block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                            >
                            </input>
                        </div>
                        <div className="relative lg:mr-8 sm:mr-0 sm:mb-4 ">
                            <label className="mb-2 block text-sm font-medium">
                                Ville : 
                            </label>
                            <input
                            id="ville"
                            name="ville"
                            type="text"
                            className="block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                            >
                            </input>
                        </div>
                        <div className="relative sm:mr-0 sm:mb-4">
                            <label className="mb-2 block text-sm font-medium">
                                code Postale : 
                            </label>
                            <input
                            id="code"
                            name="code"
                            type="number"
                            className="block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                            >
                            </input>
                        </div>
                    </div>
                    <div className="mt-6 flex justify-end gap-4">
                        <Button type="submit">Enregistrer</Button>
                     </div>
                    </form>
                </AccordionDetails>
            </Accordion>
            </div>
        </div>
    </main>
  );
}
