import Breadcrumbs from "@/app/ui/medecin/breadcrumbs";
import EditPatientForm from "@/app/ui/medecin/edit-form";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Liste de patients', href: '/medecin/liste-de-patients/' },
          {
            label: 'Modifier les details du patient ',
            href: `/medecin/liste-de-patients/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditPatientForm />
    </main>
  );
}