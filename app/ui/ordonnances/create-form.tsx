import {UserCircleIcon} from '@heroicons/react/24/outline';
import Search from '../search';


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

type Patient = {
    id: number;
    name: string;
    dateOfBirth: string;
    gender: string;
  };

const patient1: Patient = { id: 1, name: 'John Doe',dateOfBirth: "20/06/2000",gender: "Homme", };
const patient2: Patient = { id: 2, name: 'Jane Smith',dateOfBirth: "15/07/2007",gender: "Femme", };
const patient3: Patient = { id: 3, name: 'Alice Johnson',dateOfBirth: "25/01/1998",gender: "Femme", };
const patient4: Patient = { id: 4, name: 'Bob Brown',dateOfBirth: "01/10/1996",gender: "Homme", };
const Patients: Patient[] = [patient1, patient2, patient3, patient4];

export default function CreatePerscriptionForm() {
    return (
      <form>
        <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Patient's Name */}
        <div className="mb-4">
          <label htmlFor="Patient" className="mb-2 block text-sm font-medium">
            choisir le patient
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
            rechercher le medicament ici
          </label>
          <Search placeholder='Nom du medicament'/>
        </div>
        <br />
        <br />
        <div className="mb-4">
          <label htmlFor="taille" className="mb-2 block text-sm font-medium">
            Dans le cas ou le medicament est introuvable, insérez manuellement  
          </label>
          <div className="mb-4 flex lg:flex-row sm:flex-col max-sm:flex-col">
                        <div className="relative lg:mr-8 sm:mr-0 lg:w-1/2 sm:w-auto sm:mb-4">
                            <label className="mb-2 block text-sm font-medium ">
                                Nom Medicament: 
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
                                type : 
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
                                Dosage : 
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
                    <div className="flex flex-col">
                    <label htmlFor="comment">Commentaire additionnel</label>
                    <textarea name="comment" id="commentID"><p className='ml-4'></p></textarea>
                    </div>
        </div>
        </div>
      </form>
    );
  }