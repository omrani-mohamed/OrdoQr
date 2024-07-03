import {
  CalendarIcon,
  UserGroupIcon,
  ClipboardDocumentListIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

const iconMap = {
  Patients: UserGroupIcon,
  Consultations: CalendarIcon,
  Ordonnances: ClipboardDocumentListIcon,
};

export default async function CardWrapper() {
  return (
    <>
      <Card 
        title="Totale Consultations" 
        value={0} 
        type="Consultations" 
      />
      <Card 
        title="Totale Ordonnances" 
        value={0} 
        type="Ordonnances" 
      />
      <Card
        title="totale Patients"
        value={0}
        type="Patients"
      />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'Ordonnances' | 'Patients' | 'Consultations';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}