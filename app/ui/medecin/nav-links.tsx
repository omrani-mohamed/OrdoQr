"use client";

import {
  UserGroupIcon,
  HomeIcon,
  PresentationChartBarIcon,
  ClipboardDocumentListIcon,
} from '@heroicons/react/24/outline';

import Link from 'next/link';
import clsx from 'clsx';

import { usePathname } from 'next/navigation';


const links = [
  { name: "Page d'acceuil", href: '/medecin', icon: HomeIcon },
  { name: 'Dashboard', href: '/medecin/dashboard', icon: PresentationChartBarIcon},
  { name: 'Patients', href: '/medecin/liste-de-patients', icon: UserGroupIcon },
  { name: "Historique d'ordonnances", href:'/medecin/ordonnances', icon:ClipboardDocumentListIcon}
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
          className={clsx(
            'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
            {
              'bg-sky-100 text-blue-600': pathname === link.href,
            },
          )}
            key={link.name}
            href={link.href}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}