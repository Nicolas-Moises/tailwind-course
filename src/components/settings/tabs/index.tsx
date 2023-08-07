'use client'
import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './tab-item'
import { useState } from 'react'

const tabs = [
  {
    title: 'My details',
    value: 'my-details',
  },
  {
    title: 'Profile',
    value: 'profile',
  },
  {
    title: 'Password',
    value: 'password',
  },
  {
    title: 'Team',
    value: 'team',
  },
  {
    title: 'Plan',
    value: 'plan',
  },
  {
    title: 'Billing',
    value: 'billing',
  },
  {
    title: 'E-mail',
    value: 'email',
  },
  {
    title: 'Notifications',
    value: 'notifications',
  },
  {
    title: 'Integrations',
    value: 'integrations',
  },
  {
    title: 'API',
    value: 'api',
  },
]

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('my-details')
  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        {tabs.map((tab) => {
          return (
            <TabItem
              title={tab.title}
              value={tab.value}
              key={tab.value}
              isSelected={currentTab === tab.value}
            />
          )
        })}
      </Tabs.List>
    </Tabs.Root>
  )
}
