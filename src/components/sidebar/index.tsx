import { LogoMark } from '../icons/logo'
import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  SquareStack,
  Users,
} from 'lucide-react'
import { NavItem } from './nav-item'
import { WidgetSpaceUsed } from './widget-space-used'
import { UserNav } from './user-nav'
import { InputRoot, InputPrefix, InputControl } from '../ui/input'
import { SearchIcon } from '../icons/search-icon'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <LogoMark />

      <InputRoot>
        <InputPrefix>
          <SearchIcon />
        </InputPrefix>
        <InputControl placeholder="Search..." />
      </InputRoot>

      <nav className="space-y-0.5">
        <NavItem title="Home" icon={Home} />
        <NavItem title="Dashboard" icon={BarChart} />
        <NavItem title="Projects" icon={SquareStack} />
        <NavItem title="Tasks" icon={CheckSquare} />
        <NavItem title="Reporting" icon={Flag} />
        <NavItem title="Users" icon={Users} />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <div className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </div>
      </div>

      <WidgetSpaceUsed />

      <div className="h-px w-full bg-zinc-200" />

      <UserNav />
    </aside>
  )
}
