import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/mongo";
import { Patient } from "@/model/patient-model";

export const POST = async (req: Request) => {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({ error: 'Patient ID is required' }, { status: 400 });
    }

    const { fullname, email, phone, dateOfBirth, height, weight, gender } = await req.json();

    try {
        await dbConnect();

        const result = await Patient.findByIdAndUpdate(id, {
            $set: {
                fullname,
                email,
                phone,
                dateOfBirth,
                height,
                weight,
                gender
            }
        }, { new: true });

        if (!result) {
            return NextResponse.json({ error: 'Patient not found' }, { status: 404 });
        }

        return NextResponse.json({ message: "Patient's info updated successfully" }, { status: 200 });
    } catch (error) {
        console.error("Failed to update the Patient's info:", error);
        return NextResponse.json({ error: 'Failed to update the db' }, { status: 500 });
    }
};
