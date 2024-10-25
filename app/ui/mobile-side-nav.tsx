'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { cn } from '@/app/lib/utils'

import { ChartPieIcon, HomeIcon, ArrowsUpDownIcon, DocumentCurrencyDollarIcon, WalletIcon, ArrowLeftCircleIcon, UserCircleIcon } from '@heroicons/react/24/solid'
const NAV_LINKS = [
  {
    id: 0,
    name: 'Overview',
    icon: <HomeIcon className="w-5 h-5"/> ,
    link: '/dashboard',
  },
  {
    id: 1,
    name: 'Transactions',
    icon: <DocumentCurrencyDollarIcon className="w-5 h-5"/>,
    link: '/transactions',
  },
  // <ArrowsUpDownIcon className="w-5 h-5"/>
  {
    id: 2,
    name: 'Customers',
    icon: <UserCircleIcon className="w-5 h-5" />,
    link: '/customers',
  },
  {
    id: 3,
    name: 'Invoices',
    icon: <WalletIcon className="w-5 h-5"/>,
    link: '/invoice',
  },
  {
    id: 4,
    name: 'Sales',
    icon: <ChartPieIcon className="w-5 h-5"/>,
    link: '/sales',
  },
] as const
type NavLinkType = (typeof NAV_LINKS)[number]

export default function MobileSideNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 h-11 w-full rounded-t-lg bg-pink px-4 pt-2 text-white md:h-[66px] md:px-10 lg:hidden">
      <div className="flex h-full w-full">
        {NAV_LINKS.map((link) => (
          <NavLink key={link.id} link={link} />
        ))}
      </div>
    </div>
  )
}

function NavLink({ link }: { link: NavLinkType }) {
  const pathname = usePathname()

  return (
    <Link
      href={link.link}
      className={cn(
        'inline-flex h-full w-full flex-1 flex-col items-center justify-center gap-1',
        {
          'rounded-t-lg border-b-4 border-red-500 bg-white text-secondary-green':
            link.link === pathname,
        }
      )}
    >
      <span>{link.icon}</span>
      <p
        className={cn(
          'text-preset-5 hidden text-xs font-bold text-grey-300 md:block',
          {
            'text-grey-900': link.link === pathname,
          }
        )}
      >
        {link.name}
      </p>
    </Link>
  )
}