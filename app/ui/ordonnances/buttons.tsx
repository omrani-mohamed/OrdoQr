import {PlusIcon,PencilIcon,TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function CreatePerscription() {
    return (
      <Link
        href="/medecin/ordonnances/create"
        className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        <span className="hidden md:block">Nouvelle Ordonnnance</span>{' '}
        <PlusIcon className="h-5 md:ml-4" />
      </Link>
    );
  }
  
  export function UpdatePerscription({ refrence }: { refrence: string }) {
    return (
      <Link
      href={`/medecin/ordonnances/${refrence}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
      >
        <PencilIcon className="w-5" />
      </Link>
    );
  }
  
  export function DeletePerscription({ refrence }: { refrence: string }) {
    return (
      <form>
        <button className="rounded-md border p-2 hover:bg-gray-100">
          <span className="sr-only">Supprimer</span>
          <TrashIcon className="w-5" />
        </button>
      </form>
    );
  }

