import Breadcrumbs from "@/app/ui/medecin/breadcrumbs";

export default function CreatePerscription ({ params }: { params: { reference: string } }){
    const reference = params.reference; 
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                { label: "Liste des ordonnances", href: '/medecin/ordonnances/' },
                {
                    label: "Modifier l'Ordonnance",
                    href: `/medecin/ordonnancess/${reference}/edit`,
                    active: true,
                },
                ]}
            />
        </main>
    );
}