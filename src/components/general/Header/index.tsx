'use client'

import Navbar from '@/components/general/Header/Navbar'
import useWindowWidth from '@/hooks/useWindowWidth'
import { breakpoints } from '@/utils/breakpoints'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useLayoutEffect, useState } from 'react'
import { BurguerIcon, CloseIcon } from '../Icons'

export default function Header() {
  const pathname = usePathname()
  const [isRoot, setIsRoot] = useState<boolean>(pathname === '/')
  const [open, setOpen] = useState<boolean>(false)
  const windowWidth = useWindowWidth()

  useLayoutEffect(() => {
    const mobileAndRoot = windowWidth < breakpoints.TABLET && pathname === '/'
    const desktopOrNotRoot =
      windowWidth >= breakpoints.TABLET || pathname !== '/'
    if (mobileAndRoot) setOpen(false)
    if (desktopOrNotRoot) setOpen(true)
    pathname === '/' ? setIsRoot(true) : setIsRoot(false)
  }, [windowWidth, pathname])

  const handleClick = (): void => setOpen((prev) => !prev)

  return (
    <>
      <header className="flex items-center justify-between bg-zinc-100 px-[10%] py-6">
        <a href="/">
          <Image
            className="w-32"
            src={'/logo.png'}
            width={188}
            height={68}
            alt="Logo da escola do real"
            priority
          />
        </a>
        {isRoot && (
          <div className="block lg:hidden" onClick={handleClick}>
            {open ? <CloseIcon className="h-10 w-10" /> : <BurguerIcon />}
          </div>
        )}
        <div className="hidden lg:block">
          <div className="flex gap-4">
            <button className="rounded-md bg-blue-500 px-5 py-3 text-sm uppercase text-white hover:bg-blue-700">
              Fazer Doação
            </button>
            <button className="rounded-md bg-green-600 px-5 py-3 text-sm uppercase text-white hover:bg-green-700">
              Faça Parte
            </button>
          </div>
        </div>
      </header>
      {open && <Navbar isRoot={isRoot} />}
    </>
  )
}
