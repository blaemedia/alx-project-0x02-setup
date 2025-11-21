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
  children?: React.ReactNode;
  onClick?: () => void;

  /** Size of the button */
  size?: "small" | "medium" | "large";

  /** Shape (border-radius) */
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";

  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

