import { lusitana } from "@/app/ui/fonts";
import CardWrapper from "@/app/ui/medecin/cards";

export default function DashboardPage () {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardWrapper />
      </div>
    </main>
  );
}