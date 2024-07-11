"use client";

import { useEffect, useState } from 'react';
import PrescriptionForm from './perscription-form';

type Medication = {
  name: string;
  type: string;
  dosage: number;
  comment: string;
};

const EditPrescription = () => {

  const [initialMedications, setInitialMedications] = useState<Medication[]>([]);

      const fetchPrescriptionData = async () => {
        // Placeholder data
        const fetchedData: Medication[] = [
          { name: 'Medicament A', type: 'Type A', dosage: 10, comment: 'Comment A' },
          { name: 'Medicament B', type: 'Type B', dosage: 20, comment: 'Comment B' },
        ];
        // Simulate a delay for fetching data
        await new Promise(resolve => setTimeout(resolve, 1000));
        setInitialMedications(fetchedData);
      };

      fetchPrescriptionData();
      return (
        <div>
          <PrescriptionForm initialMedications={initialMedications} onSubmit={handleSubmit} />
        </div>
      );
  };

  

  const handleSubmit = (medications: Medication[]) => {
    // Handle update logic
    console.log('Updating prescription with medications:', medications);
    // Redirect or show success message
  }

export default EditPrescription;
