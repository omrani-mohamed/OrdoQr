import dbConnect from "@/app/lib/mongo";
import { Patient } from "@/model/patient-model";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const DELETE = async (req: NextRequest) => {
    const { searchParams } = new URL(req.url);
    
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({ error: 'No patient ID provided' }, { status: 400 });
      }
    try {
        await dbConnect();

        const result = await Patient.findByIdAndDelete(id);
        if (!result) {
            return NextResponse.json({ error: 'Patient not found' }, { status: 404 });
        }
        return NextResponse.json({ message: 'Patient deleted successfully' }, { status: 200 });
    } catch (error) {
        console.error('Failed to delete the Patient:', error);
        return NextResponse.json({ error: 'Failed to delete from the db' }, { status: 500 });
    }
};
