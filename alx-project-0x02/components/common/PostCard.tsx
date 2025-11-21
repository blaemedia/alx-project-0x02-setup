import React from "react";
import { PostProps } from "@/interfaces";

export default function({title, content, userId}: PostProps){
    return(
        <div className="border p-4 rounded-lg shadow-md bg-white mb-4">
            <h2 className="text-x1 font-semibold">{title}</h2>
            <h2 className="text-gray-700 mt-2">{content}</h2>
            <h2 className="text-sm text-gray-500">User ID</h2>
        </div>
    );
}