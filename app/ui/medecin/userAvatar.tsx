import { auth } from "@/auth";
import Image from "next/image";

export default async function UserAvatar() {
  const session = await auth();

  if (!session || !session.user || !session.user.image) return null;

  return (
    <div>
      <Image src={session.user.image} alt="User Avatar" width={32} height={32} />
    </div>
  );
}
