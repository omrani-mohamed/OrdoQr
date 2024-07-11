import Breadcrumbs from "@/app/ui/medecin/breadcrumbs";
import EditPrescription from "@/app/ui/ordonnances/edit-form";

export default function EditPerscription ({ params }: { params: { reference: string } }){
    const reference = params.reference; 
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                { label: "Liste des ordonnances", href: '/medecin/ordonnances/' },
                {
                    label: "Modifier l'Ordonnance",
                    href: `/medecin/ordonnances/${reference}/edit`,
                    active: true,
                },
                ]}
            />
            <EditPrescription />
        </main>
    );
}