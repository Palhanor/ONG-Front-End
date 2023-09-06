import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
}

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className="m-auto block rounded-full bg-gradient-to-r from-green-500 to-blue-500 px-10 py-3 text-sm uppercase text-white md:text-base"
    >
      {children}
    </button>
  )
}
