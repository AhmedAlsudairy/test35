// File: app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';

// Mock database
const users = [
  { id: '1', name: 'John Doe', email: 'john@example.com' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
  { id: '3', name: 'Bob Johnson', email: 'bob@example.com' },
  { id: '4', name: 'Alice Brown', email: 'alice@example.com' },
  { id: '5', name: 'Charlie Davis', email: 'charlie@example.com' },
];

export async function GET(request: NextRequest) {
  // You can add query parameter handling here if needed
  // const { searchParams } = new URL(request.url);
  // const query = searchParams.get('query');

  // For now, we'll just return all users
  return NextResponse.json(users);
}

// Optionally, you can export a runtime configuration
export const runtime = 'edge'; // 'nodejs' (default) | 'edge'