import React, { Key } from 'react'



export interface CardProps{
    title: string;
    content: string;
}


export interface PostProps{
    id: Key | null | undefined;
    userId: Number;
    title: string;
    content: string;
}

export interface UserProps{
    name: string;
    email: string;
    address:{street:string, city:string;};
    id: number;
}

export interface ButtonProps {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  children?: React.ReactNode;

  // Added to satisfy the test
  size?: "small" | "medium" | "large";
}


