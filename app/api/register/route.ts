import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const { nom, prenom, email, phone, password, role, specialty, adress } = await request.json();

  console.log(nom, prenom, email, phone, password, role, specialty, adress);

  return new NextResponse("user has been created", { status: 201 });
};
