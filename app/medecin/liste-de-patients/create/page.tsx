import Breadcrumbs from "@/app/ui/medecin/breadcrumbs";
import CreatePatientForm from "@/app/ui/medecin/create-patient-form";

export default function CreatePatientPage(){
  return (
    <main>
            <Breadcrumbs
        breadcrumbs={[
          { label: 'Liste de patients', href: '/medecin/liste-de-patients/' },
          {
            label: 'créer un patient ',
            href: `/medecin/liste-de-patients/create`,
            active: true,
          },
        ]}
      />
      <CreatePatientForm />
    </main>
  );
};

