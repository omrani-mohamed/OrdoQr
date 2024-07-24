"use client";

import Link from 'next/link';
import {UserCircleIcon} from '@heroicons/react/24/outline';
import { Button } from './button';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HeightIcon from '@mui/icons-material/Height';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import { useRouter } from 'next/navigation';
import {Radio, RadioGroup, FormControlLabel} from '@mui/material';
import React, { useState } from 'react';

export default function CreatePatientForm() {
  const router = useRouter();
  const [gender, setGender] = useState('Homme');

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const fullname = formData.get('fullname') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const dateOfBirth = formData.get('dateOfBirth')as string;
    const height = formData.get('height')as string;
    const weight = formData.get('weight')as string;
    const gender = formData.get('gender')as string;

    if (phone.length!== 8){
      alert ("Il s'agit d'un numero de téléphone invalide");
      return;
    }

    try {
      const response = await fetch('/api/createPatient', {
        method: 'POST',
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          fullname,
          email,
          phone,
          dateOfBirth,
          height,
          weight,
          gender,
        }),
      });

      if (response.status === 201) {
        alert("Le patient a été créer avec succée.");
        router.push("/medecin/liste-de-patients");
      }

    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Patient Name */}
        <div className="mb-4">
          <label htmlFor="fullname" className="mb-2 block text-sm font-medium">
            Nom et Prenom du patient : 
          </label>
          <div className="relative">
            <input
              id="fullname"
              name="fullname"
              required
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            >
            </input>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Patient date of birth */}
        <div className="mb-4">
          <label htmlFor="dateOfBirth" className="mb-2 block text-sm font-medium">
            Date naissance du patient : 
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="dateOfBirth"
                type='date'
                name="dateOfBirth"
                required
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <EditCalendarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Patient height */}
        <div className="mb-4">
          <label htmlFor="height" className="mb-2 block text-sm font-medium">
            La taille du Patient (cm):
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="height"
                name="height"
                type="number"
                step="0.01"
                required
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <HeightIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Patient weight */}
        <div className="mb-4">
          <label htmlFor="weight" className="mb-2 block text-sm font-medium">
            Le poids du Patient (kg):
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="weight"
                name="weight"
                type="number"
                step="0.01"
                required
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <MonitorWeightIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Patient Sexe */}
        <fieldset className='mb-4'>
          <legend className="mb-2 block text-sm font-medium">
            Le Sexe du patient : 
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4 max-sm:flex-col">
            <RadioGroup row aria-label="gender" name="gender" id="gender" value={gender} onChange={handleGenderChange}>
              <div className="max-sm:mb-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600">
                <FormControlLabel
                  value="Homme"
                  control={<Radio className="h-3 w-3 mx-2" />}
                  label="Homme"
                  className="text-xs"
                />
                <MaleIcon className="h-5 w-5" />
              </div>
              <div className="max-sm:ml-0 ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600">
                <FormControlLabel
                  value="Femme"
                  control={<Radio className="h-3 w-3 mx-2" />}
                  label="Femme"
                  className="text-xs"
                />
                <FemaleIcon className="h-5 w-5" />
              </div>
            </RadioGroup>
              {/* <div className="flex items-center">
                <input
                  id="Homme"
                  name="sexe"
                  type="radio"
                  required
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="Homme"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Homme <MaleIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="Femme"
                  name="sexe"
                  type="radio"
                  required
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="Femme"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Femme <FemaleIcon className="h-4 w-4" />
                </label>
              </div> */}
            </div>
          </div>
        </fieldset>

        {/* Patient Email */}
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            L&apos;adresse email du patient : 
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                required
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <MailOutlineIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Patient telephone number */}
        <div className="mb-4">
          <label htmlFor="telephone number" className="mb-2 block text-sm font-medium">
            Le numero de téléphone du patient : 
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="phone"
                type="number"
                name="phone"
                maxLength={8}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <LocalPhoneOutlinedIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/medecin/liste-de-patients"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Annuler
        </Link>
        <Button type="submit">Confirmer</Button>
      </div>
    </form>
  );
}