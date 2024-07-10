import SideNav from '@/app/ui/medecin/sidenav';
import Link from 'next/link';
import Logo from '../ui/logo';
import Footer from '../ui/footer';
import AccountMenu from '../ui/medecin/AccountMenu';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen flex-col p-4">
      <div className="mb-2 flex h-20 items-center justify-start rounded-md bg-blue-500 p-2 md:h-20">
        <Link href='/'>
          <Logo />
        </Link>
        <div className="flex mb-1 ml-auto p-2">
          <AccountMenu />
        </div>
      </div>
      <div className="flex flex-grow flex-col md:flex-row">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="flex-grow p-6 md:p-12 min-h-[100vh]"> 
          <div className="container mx-auto">
            {children}
          </div>
        </div>
      </div>
      <hr />
      <Footer />
    </main>
  );
}
