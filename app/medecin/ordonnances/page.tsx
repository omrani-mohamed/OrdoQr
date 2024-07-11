import { lusitana } from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import { CreatePerscription } from "@/app/ui/medecin/buttons";
import Table from "@/app/ui/ordonnances/table";

export default function ListeOrdonnances () {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>La liste des ordonnances</h1>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8 max-sm:-mx-6">
        <Search placeholder="Chercher par nom de patient..." />
        <CreatePerscription/>
      </div>
      <Table/>
    </main>
  );
}