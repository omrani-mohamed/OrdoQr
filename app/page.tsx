'use client';
import { ArrowRight } from '@mui/icons-material';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import Logo from '@/app/ui/logo';
import { Typography} from '@mui/material';
import styled from '@emotion/styled';

export default function Page() {
  const Footer = styled('footer')({
    backgroundColor: '#ffffff',
    padding: '20px',
  });
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <Logo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
        <div className={styles.shape}/>
          <p className ={`${lusitana.className} antialiased`}>
            <strong>OrdoQr.</strong> Application d&apos;ordonnances numériques{' '}
            , pour simplifier et sécuriser le processus de création d&apos;ordonnances et de délivrance des médicaments grâce aux codes QR.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRight className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
          src='/landingPage.png'
          width={1200}
          height={960}
          priority
          className="hidden md:block"
          alt="Screenshots of the OrdoQr project showing desktop version"
          />
          <Image
          src="/seam.png"
          width={560}
          height={620}
          priority
          style={{ width: 'auto', height: 'auto' }}
          className="block md:hidden"
          alt="Screenshot of the OrdoQr project showing mobile version"
          />
        </div>
      </div>
      <br></br>
      <hr></hr>
      <Footer>
        <Typography variant="h6" align="center" gutterBottom></Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          OrdoQr - La technologie pour faciliter la gestion de vos ordonnances.
        </Typography>
      </Footer>
    </main>
  );
}