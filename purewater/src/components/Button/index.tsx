import React from "react";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button = ({ label, ...props }: Props) => {

  return (
    <button {...props} className={`${props.className} flex items-center justify-between mb-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
    >{label}</button>
  )
}

export default Button