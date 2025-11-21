import { UserProps } from "@/interfaces";

export default function({name, email, address, id}: UserProps){
    // UserCard is a reusable component that accepts a UserProps object
    return(
        <div className="border p-4 rounded-lg shadow-mdbg-white mb-4">
            {/* Display user name */}
            <h2 className="text-xl font-semibold">{name}</h2>

            {/* Display email */}
            <p className="text-gray-700">{email}</p>
            <p className="text-gray-500 text-sm">{address.street}, {address.city}</p>
        </div>
    );
}