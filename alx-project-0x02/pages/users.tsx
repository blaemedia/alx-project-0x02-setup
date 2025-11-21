// pages/user.tsx
import { useEffect, useState } from "react";
import { UserProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";

export default function UsersPage() {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();

      const mappedUsers: UserProps[] = data.map((user: any) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        address: {
          street: user.address.street,
          city: user.address.city,
        },
      }));

      setUsers(mappedUsers);
    }

    fetchUsers();
  }, []);

  return (
    <>
      <Header />

      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Users</h1>

        {users.length === 0 ? (
          <p>Loading users...</p>
        ) : (
          users.map((user) => (
            <UserCard
              key={user.id}
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
}


export async function getStaticProps() {
  return {
    props: {},
  };
}
