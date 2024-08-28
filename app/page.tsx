import React from 'react';
import Link from "next/link";
import axios from 'axios';

// We'll use this to fetch data on the server side
async function getUsers() {
  try {
    const response = await axios.get('http://localhost:3000/api/auth/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}

export default async function UserListPage() {
  const users = await getUsers();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <ul className="space-y-2">
        {users.map((user:any) => (
          <li key={user.id} className="bg-gray-100 p-2 rounded">
            <Link href={`/users/${user.id}`} className="text-blue-600 hover:underline">
              {user.name} (ID: {user.id})
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <Link href='/auth' className="text-green-600 hover:underline">
          Go to auth page
        </Link>
      </div>
    </div>
  );
}