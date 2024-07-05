import { lusitana } from "@/app/ui/fonts";
import Table from "@/app/ui/medecin/table";
import { CreatePatient } from '../../ui/medecin/buttons';
import Search from "@/app/ui/search";

export default function ListedePatients () {
  return (
    <main className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>La liste de Patients</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Chercher Patients..." />
        <CreatePatient />
      </div>
      <Table />
    </main>
  );
}