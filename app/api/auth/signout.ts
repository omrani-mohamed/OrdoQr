import { NextResponse } from 'next/server';

export const POST = async(request : Request)=>{
  try {
    return NextResponse.json({ message: 'Signed out successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to sign out' }, { status: 500 });
  }
}