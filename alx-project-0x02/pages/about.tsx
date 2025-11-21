import React from "react";
import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

export default function AboutPage(){
    return(
        <>

       

        <main>

            <div className="p-8 space-y-4">
            <h1 className="text-2xl font-bold">About Page</h1>

            {/* Small + rounded-sm */}
            <Button size="small" shape="rounded-sm">
                Small – Rounded SM
            </Button>

            {/* Medium + rounded-md */}
            <Button size="medium" shape="rounded-md">
                Medium – Rounded MD
            </Button>

            {/* Large + rounded-full */}
            <Button size="large" shape="rounded-full">
                Large – Rounded FULL
            </Button>
            </div>
            <Header/>

            <h1>About us</h1>
            <p>This is your about page of Content</p>
            <div>
                <Button label="Small Button" size="small" shape="rounded-sm"/>
                <Button label = "small Button" size= "small" shape="rounded-md"/>
                <Button label = "small Button" size= "small" shape="rounded-lg"/>
            </div>
        </main>
        </>
    );
}