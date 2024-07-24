import { DeletePatient, UpdatePatient } from "./buttons";
import { FormattedPatientsTable } from '@/app/lib/definitions';

async function fetchPatientsData() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';

  try {
    const response = await fetch(`${baseUrl}/api/getPatients`, {
      method: "GET",
      cache: 'no-store'
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching patients:', error);
    return [];
  }
}

export default async function PatientsTable() {
  const patients: FormattedPatientsTable[] = await fetchPatientsData();

  return (
    <div className="mt-6 flow-root max-sm:-mx-6">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-100 p-2 md:pt-0">
          <div className="md:hidden">
            {patients.map((patient) => (
              <div key={patient._id} className="mb-2 w-full rounded-md bg-white p-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{patient.fullname}</p>
                    </div>
                    <p className="text-sm text-gray-600">{patient.email}</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">Date de naissance</p>
                    <p>{new Date(patient.dateOfBirth).toLocaleDateString()}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdatePatient id={patient._id} />
                    <DeletePatient id={patient._id}/>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Nom et Prénom
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date de naissance
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Sexe
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Numéro de téléphone
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {patients.map((patient) => (
                <tr key={patient._id} className="group">
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{patient.fullname}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <p>{new Date(patient.dateOfBirth).toLocaleDateString()}</p>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <p>{patient.gender}</p>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <p>{patient.email}</p>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <p>{patient.phone}</p>
                  </td>
                  <td className="flex justify-end gap-2 whitespace-nowrap px-6 py-4 text-sm">
                    <div className="flex justify-end gap-3">
                      <UpdatePatient id={patient._id} />
                      <DeletePatient id={patient._id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
