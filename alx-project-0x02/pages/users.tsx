// pages/user.tsx
import {useEffect, useState} from "react";
import { UserProps } from "@/interfaces"; //Import interface
import UserCard from "@/components/common/UserCard"; //Import Usercar js from component/common
import Header from "@/components/layout/Header"; //Import header for navigation

export default function UsersPage(){
    // React state to hold the list of users
    const [users, setUsers] =useState<UserProps[]>([]);
    // Fetch users from the API when the component first loads
    useEffect(async () =>{
        // Fetch Json
        const res = await fetch("https://jsonplaceholder.typicode.com");
        const data = await res.json();

        //Map data to fit our UserProps shape
        const mappedUsers: UserProps[] = data.map((user: any) => ({
            id: user.id,
            name: user.name,
            email: user.email,
            address: {street: user.address.street, city:user.address.city,},
        }));

        // save user in state
        // Save users in state
      setUsers(mappedUsers);
    }

    fetchUsers(); // Call the function
  }, []); // Empty array → run once when page loads

  return (
    <>
      <Header /> {/* Navigation bar */}
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Users</h1>

        {/* If no users yet, show "Loading..." */}
        {users.length === 0 ? (
          <p>Loading users...</p>
        ) : (
          // Otherwise, render UserCard for each user
          users.map(() => (
            <UserCard
              key={user.id} // unique key
              id={user.id}
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))
        )}
      </main>
    </>
  );
