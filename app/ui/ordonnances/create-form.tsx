"use client";

import PrescriptionForm from "./perscription-form";
type Medication = {
  name: string;
  type: string;
  dosage: number;
  comment: string;
};
export default function CreatePrescription() {
  const handleSubmit = (medications: Medication[]) => {
  };

  return (
    <div>
      <PrescriptionForm onSubmit={handleSubmit} />
    </div>
  );
}
