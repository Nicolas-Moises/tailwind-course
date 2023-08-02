import { ComponentProps } from 'react'

type InputPrefixProps = ComponentProps<'div'>

type InputRootProps = ComponentProps<'div'>

type InputControlProps = ComponentProps<'input'>

const InputRoot = (props: InputRootProps) => {
  return (
    <div
      className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  )
}

const InputPrefix = (props: InputPrefixProps) => {
  return <div {...props} />
}

const InputControl = (props: InputControlProps) => {
  return (
    <input
      {...props}
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder:text-zinc-500 focus:outline-none"
    />
  )
}

export { InputRoot, InputPrefix, InputControl }
