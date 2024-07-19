import { lusitana } from '../ui/fonts';
import { auth } from "@/auth";

export default async function HomePage () {
  const session = await auth();

  if (!session || !session.user) return null;

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Biencenue, {session.user.name}</h1> 
    </main>
  );
}


