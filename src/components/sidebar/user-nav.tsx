import { LogOut } from 'lucide-react'
import Image from 'next/image'

export function UserNav() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <Image
        src="https://github.com/Nicolas-Moises.png"
        width={100}
        height={100}
        alt=""
        className="h-10 w-10 rounded-full"
      />

      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Nicolas Moises
        </span>
        <p className="text-sm text-zinc-500">nicolas@gmail.com</p>
      </div>

      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="h-5 w-5 text-red-500" />
      </button>
    </div>
  )
}
