import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/mongo";
import { createPatient} from "@/app/queries/patients";

export const POST = async (request: Request) => {
    const { fullname, email, phone, dateOfBirth, height, weight, gender} = await request.json();

    await dbConnect();

    const newPatient = {
        fullname,
        email,
        phone,
        dateOfBirth,
        height,
        weight,
        gender,
      };
      
      try {
        await createPatient(newPatient);
      } catch (error) {
        console.error('Failed to create Patient:', error);
        return new NextResponse("Failed to update the db", { status: 500 });
      }
  
      return new NextResponse("Patient has been created", { status: 201 });
};  