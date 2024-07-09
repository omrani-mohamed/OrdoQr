'use client';

import {
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HeightIcon from '@mui/icons-material/Height';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';

import Link from 'next/link';
import { Button } from './button';

export default function EditPatientForm() {
  return (
    <form>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Patient Name */}
        <div className="mb-4">
          <label htmlFor="patient" className="mb-2 block text-sm font-medium">
            Nom et Prenom du patient : 
          </label>
          <div className="relative">
            <input
              id="patient"
              name="patientID"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue = "le nom de patient actuel"
            >
            </input>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Patient date of birth */}
        <div className="mb-4">
          <label htmlFor="date" className="mb-2 block text-sm font-medium">
            Date naissance du patient : 
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="date"
                type='date'
                name="date"
                autoComplete=''
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <EditCalendarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Patient height */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            La taille du Patient (cm):
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="taille"
                name="taille"
                type="number"
                step="0.01"
                defaultValue={0}
                placeholder="Modifier la taille du patient"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <HeightIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Patient weight */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Le poids du Patient (kg):
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="poids"
                name="poids"
                type="number"
                step="0.01"
                defaultValue={0}
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
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="Homme"
                  name="Sexe"
                  type="radio"
                  value="Homme"
                  defaultChecked 
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
                  value="Femme"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="Femme"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Femme <FemaleIcon className="h-4 w-4" />
                </label>
              </div>
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
                defaultValue = "email du patient actuel"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <MailOutlineIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Patient telephone */}
        <div className="mb-4">
          <label htmlFor="allergies" className="mb-2 block text-sm font-medium">
            Numero de téléphone du patient : 
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="phone"
                type="tel"
                name="phone"
                defaultValue = "Le téléphone du patient actuel"
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