import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Waitlist from '@/models/Waitlist';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  try {
    const body = await request.json();
    const { email } = body || {};

    // Validate email format
    if (!email || !emailRegex.test(String(email).toLowerCase())) {
      return NextResponse.json(
        { message: 'Invalid email' },
        { status: 400 }
      );
    }

    // Connect to database
    await connectDB();

    // Attempt to create new waitlist entry
    try {
      await Waitlist.create({ email });
      return NextResponse.json(
        { message: 'ok' },
        { status: 201 }
      );
    } catch (err) {
      // Handle duplicate email (MongoDB error code 11000)
      if (err && err.code === 11000) {
        return NextResponse.json(
          { message: 'Already joined' },
          { status: 409 }
        );
      }
      throw err;
    }
  } catch (error) {
    console.error('Waitlist API error:', error);
    return NextResponse.json(
      { message: 'Server error' },
      { status: 500 }
    );
  }
}
