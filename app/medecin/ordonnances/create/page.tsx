import Breadcrumbs from "@/app/ui/medecin/breadcrumbs";

export default function CreatePerscription (){
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                { label: "Liste des ordonnances", href: '/medecin/ordonnances/' },
                {
                    label: 'Nouvelle Ordonnance',
                    href: `/medecin/ordonnances/create`,
                    active: true,
                },
                ]}
            />
        </main>
    );
}