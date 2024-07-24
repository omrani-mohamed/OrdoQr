'use client';

import { useEffect, useState } from 'react';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HeightIcon from '@mui/icons-material/Height';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import { Radio, RadioGroup, FormControlLabel } from '@mui/material';
import Link from 'next/link';
import { Button } from './button';

async function fetchPatientData(patientID: string) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';

  try {
    const response = await fetch(`${baseUrl}/api/getPatientById?id=${patientID}`, {
      method: "GET",
      cache: 'no-store'
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const patient = await response.json();
    return patient;
  } catch (error) {
    console.error('Error fetching patient:', error);
    return null;
  }
}

async function updatePatient(patientID: string, data: any) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';

  try {
    const response = await fetch(`${baseUrl}/api/updatePatient?id=${patientID}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to update data');
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error updating patient:', error);
    return null;
  }
}

export default function EditPatientForm({ patientID }: { patientID: string }) {
  const [patient, setPatient] = useState<any>(null);
  const [gender, setGender] = useState('Homme');
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    height: '',
    weight: '',
    gender: ''
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (`0${date.getMonth() + 1}`).slice(-2);
    const day = (`0${date.getDate()}`).slice(-2);
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    async function loadPatient() {
      const patientData = await fetchPatientData(patientID);
      setPatient(patientData);
      if (patientData) {
        setFormData({
          fullname: patientData.fullname,
          email: patientData.email,
          phone: patientData.phone,
          dateOfBirth: formatDate(patientData.dateOfBirth),
          height: patientData.height,
          weight: patientData.weight,
          gender: patientData.gender
        });
        setGender(patientData.gender);
      }
    }
    loadPatient();
  }, [patientID]);

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
    setFormData({ ...formData, gender: event.target.value });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await updatePatient(patientID, formData);
    if (result) {
      alert(result.message);
    }
  };

  if (!patient) {
    return <div>Loading...</div>;
  }

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
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              value={formData.fullname}
              onChange={handleChange}
            />
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
                value={formData.dateOfBirth}
                onChange={handleChange}
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
                value={formData.height}
                onChange={handleChange}
                placeholder="Modifier la taille du patient"
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
                value={formData.weight}
                onChange={handleChange}
                placeholder="Modifier le poids du patient"
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
            </div>
          </div>
        </fieldset>

        {/* Patient email */}
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email du Patient:
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Modifier l'email du patient"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <MailOutlineIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Patient phone */}
        <div className="mb-4">
          <label htmlFor="phone" className="mb-2 block text-sm font-medium">
            Numero du Patient :
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Modifier le numero du patient"
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
        <Button type="submit">
          Update Patient
        </Button>
      </div>
    </form>
  );
}
