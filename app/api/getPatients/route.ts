import dbConnect from "@/app/lib/mongo";
import { Patient } from "@/model/patient-model";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    await dbConnect();

    const patients = await Patient.find({});

    return NextResponse.json(patients, { status: 200 });
  } catch (error) {
    console.error('Failed to get the Patients:', error);
    return NextResponse.json({ error: 'Failed to read from the db' }, { status: 500 });
  }
}
