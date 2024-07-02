import { lusitana } from '@/app/ui/fonts';

export default function Logo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <object data="/medicine-icon.svg" width="9%" height="9%"> </object>
      <p className="text-[44px]">OrdoQr</p>
    </div>
  );
}