'use client'

import Navbar from '@/components/general/Header/Navbar'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useLayoutEffect, useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [isRoot, setIsRoot] = useState<boolean>(pathname === '/')
  const [open, setOpen] = useState<boolean>(false)

  useLayoutEffect(() => {
    const mobileAndRoot = window.innerWidth < 768 && pathname === '/'
    const desktopOrNotRoot = window.innerWidth >= 768 || pathname !== '/'
    if (mobileAndRoot) setOpen(false)
    if (desktopOrNotRoot) setOpen(true)
    pathname === '/' ? setIsRoot(true) : setIsRoot(false)
  }, [pathname])

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
          <div className="block md:hidden" onClick={handleClick}>
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-10 w-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-10 w-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </div>
        )}
        <div className="hidden md:block">
          <div className="flex gap-4">
            <button className="rounded-md bg-blue-500 px-5 py-3 text-sm uppercase text-white hover:bg-blue-700">
              Fazer Doação
            </button>
            <button className="rounded-md bg-green-500 px-5 py-3 text-sm uppercase text-white hover:bg-green-600">
              Faça Parte
            </button>
          </div>
        </div>
      </header>
      {open && <Navbar isRoot={isRoot} />}
    </>
  )
}
