import { lusitana } from "@/app/ui/fonts";
import Table from "@/app/ui/medecin/table";

export default function ListedePatients () {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>La liste de Patients</h1>
      <Table />
    </main>
  );
}