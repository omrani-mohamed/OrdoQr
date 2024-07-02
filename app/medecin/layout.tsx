import SideNav from '@/app/ui/medecin/sidenav';
import Link from 'next/link';
import Logo from '../ui/logo';
import Footer from '../ui/footer';

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
  return (
    <main className="flex min-h-screen flex-col p-6">
        <div
            className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-500 p-2 md:h-20">
            <Link href='/'>
                <Logo />
            </Link>
        </div> 
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
            <SideNav />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
        <hr />
        <Footer />
    </main>
  );
}