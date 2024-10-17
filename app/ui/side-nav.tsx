'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

import { cn } from '@/app/lib/utils'

import Icons from '@/app/ui/icon'
  

  const NAV_LINKS = [
    {
      id: 0,
      name: 'Overview',
      icon: <Icons.House />,
      link: '/',
    },
    {
      id: 1,
      name: 'Transactions',
      icon: <Icons.ArrowsDownUp />,
      link: '/transactions',
    },
    {
      id: 2,
      name: 'Budgets',
      icon: <Icons.ChartDonut />,
      link: '/budgets',
    },
    {
      id: 3,
      name: 'Pots',
      icon: <Icons.Jar />,
      link: '/pots',
    },
    {
      id: 4,
      name: 'Recurring bills',
      icon: <Icons.Receipt />,
      link: '/recurring-bills',
    },
  ] as const
  type NavLinkType = (typeof NAV_LINKS)[number]
  
  export default function SideNav() {
    const [isActive, setActive] = React.useState<boolean>(false)
  const ref = useRef(null)

  useOnClickOutside(ref, () => {
    if (isActive) setActive(false)
  })

  const toggle = () => setActive(!isActive)
  return (
    <motion.div
      ref={ref}
      initial={{
        width: '88px',
      }}
      animate={{
        width: isActive ? '300px' : '88px',
      }}
      transition={{ duration: 0.3 }}
      className="hidden h-screen flex-col gap-6 rounded-r-lg bg-pink text-white lg:flex"
    >
      {/* LOGO */}
      <div className="flex h-[101px] items-center justify-start px-8 py-10">
        <AnimatePresence mode="wait">
          {isActive ? (
            <motion.div
              key="full-logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/">
                <Icons.Logo />
              </Link>
            </motion.div>
          ) : (
            <motion.div
              key="short-logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/">
                <Icons.ShortLogo />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* MENU */}
      <nav className="w-full flex-grow">
        <ul className="flex flex-col gap-1 pr-6">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.id} link={link} isActive={isActive} />
          ))}
        </ul>
      </nav>

      {/* TOGGLE */}
      <motion.button
        onClick={toggle}
        className="group mb-6 mt-auto flex items-center gap-2 px-8 py-4"
      >
        <motion.div
          className="h-fit w-fit group-hover:text-white"
          animate={{
            rotate: isActive ? 0 : 180,
          }}
          transition={{ duration: 0.3 }}
        >
          <Icons.ArrowFatLinesLeft />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-preset-3 truncate font-bold text-grey-300 group-hover:text-white"
        >
          Minimize Menu
        </motion.p>
      </motion.button>
    </motion.div>
  )
  }
  
  function NavLink({ link, isActive }: { link: NavLinkType; isActive: boolean }) {
    const pathname = usePathname()
  
    const isLinkActive = pathname === link.link
  
    return (
      <Link
        href={link.link}
        className={cn('group flex items-center gap-4 px-8 py-4', {
          'rounded-r-lg border-l-4 border-red-700 bg-white text-white':
            isLinkActive && isActive,
          'hover:bg-grey-800 hover:text-white': !isLinkActive,
        })}
      >
        <span
          className={cn('text-current', {
            'text-secondary-green': isLinkActive,
          })}
        >
          {link.icon}
        </span>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className={cn('text-preset-3 truncate font-bold', {
            'group-hover:text-white': !isLinkActive,
            'text-grey-900': isLinkActive,
            'text-white': !isLinkActive,
          })}
        >
          {link.name}
        </motion.p>
      </Link>
    )
  }