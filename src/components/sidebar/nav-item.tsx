import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { ElementType } from 'react'

interface NavItemProps {
  link?: string
  icon: ElementType
  title: string
}

export function NavItem({ title, link = '#', icon: Icon }: NavItemProps) {
  return (
    <Link
      href={link}
      className="group flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ease-linear hover:bg-violet-50"
    >
      <Icon className="h-5 w-5 text-zinc-500" />
      <span className="font-medium text-zinc-700 group-hover:text-violet-500">
        {title}
      </span>
      <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-300" />
    </Link>
  )
}
