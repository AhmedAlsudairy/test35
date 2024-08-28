import React from 'react';
import axios from 'axios';
import Link from 'next/link';

async function getUser(userId: string) {
  try {
    const response = await axios.get(`http://localhost:3000/api/auth/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
}



export default async function UserPage({ params }: { params: { userId: string } }) {
  const user = await getUser(params.userId);
console.log(user)

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-4xl font-bold mb-4">User not found</h1>
        <Link href="/users" className="text-blue-600 hover:underline">
          Back to User List
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">User Details</h1>
      <p className="text-xl mb-2">Name: {user.name}</p>
      <p className="text-xl mb-4">Email: {user.email}</p>
      <Link href="/users" className="text-blue-600 hover:underline">
        Back to User List
      </Link>
    </div>
  );
}
