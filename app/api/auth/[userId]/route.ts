// File: app/api/users/[userId]/route.ts
import { NextRequest, NextResponse } from 'next/server';

// Mock database
const users = [
  { id: '1', name: 'John Doe', email: 'john@example.com' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
  { id: '3', name: 'Bob Johnson', email: 'bob@example.com' },
];

export async function GET(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  const userId = params.userId;

  // Find the user in our mock database
  const user = users.find(u => u.id === userId);

  if (user) {
    return NextResponse.json(user);
  } else {
    return NextResponse.json(
      { error: 'User not found' },
      { status: 404 }
    );
  }
}

// Optionally, you can export a runtime configuration
