import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import dbConnect from "@/app/lib/mongo";
import { createUser } from "@/app/queries/users";

export const POST = async (request: Request) => {
  const { name, firstname, email, phone, password, role, specialty, address } = await request.json();

  // Connecting to the database
  await dbConnect();
  
  // Hashing the password
  try {
    const hashedPassword = await bcrypt.hash(password, 5);
    console.log('Hashed password:', hashedPassword);

    // Form a db payload
    const newUser = {
      name,
      firstname,
      email,
      phone,
      password: hashedPassword,
      role,
      specialty,
      address
    };
    
    // Update the db
    try {
      await createUser(newUser);
    } catch (error) {
      console.error('Failed to create user:', error);
      return new NextResponse("Failed to update the db", { status: 500 });
    }

    return new NextResponse("User has been created", { status: 201 });
  } catch (error) {
    console.error('Error hashing password:', error);
    return new NextResponse("Error hashing password", { status: 500 });
  }
};
