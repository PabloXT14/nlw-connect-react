import type { ComponentProps } from 'react'

type ButtonProps = ComponentProps<'button'>

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className="flex items-center justify-between px-5 w-full h-12 bg-gray-500 text-blue font-semibold rounded-xl cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900"
      {...props}
    />
  )
}
