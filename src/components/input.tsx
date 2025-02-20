import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type InputProps = ComponentProps<'div'> & {
  error?: boolean
}

function Input({ className, error, ...props }: InputProps) {
  return (
    <div
      data-error={!!error}
      className={twMerge(
        'group w-full flex items-center gap-2 bg-gray-800 px-4 h-12 rounded-xl border border-gray-600 focus-within:border-gray-100',
        'data-[error=true]:border-danger',
        className
      )}
      {...props}
    />
  )
}

type InputIconProps = ComponentProps<'span'>

function InputIcon({ className, ...props }: InputIconProps) {
  return (
    <span
      className={twMerge(
        'text-gray-400',
        'group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger!',
        className
      )}
      {...props}
    />
  )
}

type InputFieldProps = ComponentProps<'input'>

function InputField({ className, ...props }: InputFieldProps) {
  return (
    <input
      className={twMerge(
        'flex-1 bg-transparent outline-none text-gray-100 placeholder:text-gray-400',
        className
      )}
      {...props}
    />
  )
}

export { Input, InputField, InputIcon }
