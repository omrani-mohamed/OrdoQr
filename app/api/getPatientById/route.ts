import dbConnect from "@/app/lib/mongo";
import { Patient } from "@/model/patient-model";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'No patient ID provided' }, { status: 400 });
  }

  try {
    await dbConnect();
    const patient = await Patient.findById(id);

    if (!patient) {
      return NextResponse.json({ error: 'Patient not found' }, { status: 404 });
    }

    return NextResponse.json(patient, { status: 200 });
  } catch (error) {
    console.error('Failed to get the Patient:', error);
    return NextResponse.json({ error: 'Failed to read from the database' }, { status: 500 });
  }
}
