"use client";

import {UserCircleIcon} from '@heroicons/react/24/outline';
import Search from '../search';
import { Button } from '../medecin/button';
import { useState, useEffect } from 'react';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const calculateAge = (dateOfBirth: string): number => {
    const [day, month, year] = dateOfBirth.split('/');
    const birthDate = new Date(`${year}-${month}-${day}`);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
  
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
};

type Medication = {
  name: string;
  type: string;
  dosage: number;
  comment: string;
};

type Patient = {
    id: number;
    name: string;
    dateOfBirth: string;
    gender: string;
};

type PrescriptionFormProps = {
  initialMedications?: Medication[];
  onSubmit: (medications: Medication[]) => void;
};

const patient1: Patient = { id: 1, name: 'John Doe',dateOfBirth: "20/06/2000",gender: "Homme", };
const patient2: Patient = { id: 2, name: 'Jane Smith',dateOfBirth: "15/07/2007",gender: "Femme", };
const patient3: Patient = { id: 3, name: 'Alice Johnson',dateOfBirth: "25/01/1998",gender: "Femme", };
const patient4: Patient = { id: 4, name: 'Bob Brown',dateOfBirth: "01/10/1996",gender: "Homme", };
const Patients: Patient[] = [patient1, patient2, patient3, patient4];

export default function PrescriptionForm({ initialMedications = [], onSubmit }: PrescriptionFormProps) {

  const [medications, setMedications] = useState<Medication[]>(initialMedications.length > 0 ? initialMedications : [
    { name: '', type: '', dosage: 0, comment: '' }
  ]);

  const handleAddMedication = () => {
    setMedications([...medications, { name: '', type: '', dosage: 0, comment: '' }]);
  };

  const handleMedicationChange = (index: number, field: string, value: string | number) => {
    const newMedications = [...medications];
    newMedications[index] = { ...newMedications[index], [field]: value };
    setMedications(newMedications);
  };

  const handleRemoveMedication = (index: number) => {
    setMedications(medications.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(medications);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6 max-sm:-mx-6">
        {/* Patient's Name */}
        <div className="mb-4">
          <label htmlFor="Patient" className="mb-2 block text-sm font-medium">
            Choisir le patient
          </label>
          <div className="relative">
            <select
              id="Patient"
              name="PatientId"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Selectionner un patient
              </option>
              {Patients.map((Patient) => (
                <option key={Patient.id} value={Patient.id}>
                  {Patient.gender === "Homme" ? "M " : "Mme "}
                  {Patient.name}
                  {"              "}
                  {`age : ${calculateAge(Patient.dateOfBirth)}`}
                  {"              "}
                  {Patient.gender}
                </option>
              ))}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="taille" className="mb-2 block text-sm font-medium">
            Rechercher le medicament ici
          </label>
          <Search placeholder="Nom du medicament" />
        </div>
        <br />
        <br />
        <div className="mb-4">
          <label htmlFor="taille" className="mb-2 block text-sm font-medium">
            Dans le cas où le medicament est introuvable, insérez manuellement
          </label>
          {medications.map((medication, index) => (
            <div key={index} className="mb-4 flex lg:flex-row sm:flex-col max-sm:flex-col">
              <div className="relative lg:mr-4 sm:mr-0 lg:w-1/3 sm:w-auto sm:mb-4">
                <label className="mb-2 block text-sm font-medium">
                  Nom Medicament:
                </label>
                <input
                  type="text"
                  className="block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                  value={medication.name}
                  onChange={(e) => handleMedicationChange(index, 'name', e.target.value)}
                />
              </div>
              <div className="relative lg:mr-4 sm:mr-0 sm:mb-4">
                <label className="mb-2 block text-sm font-medium">
                  Type:
                </label>
                <input
                  type="text"
                  className="block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                  value={medication.type}
                  onChange={(e) => handleMedicationChange(index, 'type', e.target.value)}
                />
              </div>
              <div className="flex-1 lg:mr-4 sm:mr-0 sm:mb-4">
                <label className="mb-2 block text-sm font-medium">
                  Dosage:
                </label>
                <input
                  type="number"
                  className="block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                  placeholder={(medication.dosage).toString()}
                  onChange={(e) => handleMedicationChange(index, 'dosage', Number(e.target.value))}
                />
              </div>
              <div className="flex flex-col mr-4">
                <label htmlFor="comment" className="smb-2 block text-sm font-medium">
                  Commentaire additionnel:
                </label>
                <textarea
                  className="block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                  value={medication.comment}
                  onChange={(e) => handleMedicationChange(index, 'comment', e.target.value)}
                />
              </div>
              <button
                type="button"
                className="mt-6 mb-6 inline-flex items-center justify-center border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700"
                onClick={() => handleRemoveMedication(index)}
              >
                <label className='block md:hidden'>Supprimer medicament</label> 
                <DeleteOutlinedIcon className='hidden md:block'/>
              </button>
            </div>
          ))}
          <button
            type="button"
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            onClick={handleAddMedication}
          >
            Ajouter Medicament
          </button>
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <Button>Enregistrer</Button>
          <Button className='bg-green-500 hover:bg-green-400'>Submit</Button>
        </div>
      </div>
    </form>
  );
}
