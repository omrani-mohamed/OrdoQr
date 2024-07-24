import { Patient } from "@/model/patient-model";

export async function createPatient(patient : any) {
  try {
    const patientData = await Patient.create(patient);

    console.log('Patient created successfully:', patientData);
  } catch (error) {
    console.error('Failed to create Patient:', error);
    throw new Error('Failed to create Patient.');
  }
}
