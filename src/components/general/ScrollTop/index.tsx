'use client'

import { useEffect, useState } from 'react'
import { TopIcon } from '../Icons'

export default function ScrollTop() {
  const [y, setY] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => setY(window.scrollY))
    return () => window.removeEventListener('scroll', () => setY)
  }, [y])

  return (
    <>
      {!!y && (
        <div
          className="fixed bottom-10 right-8 cursor-pointer rounded-full border border-white bg-black/70 p-3 text-white hover:bg-black/80"
          onClick={() => window.scrollTo(0, 0)}
        >
          <TopIcon />
        </div>
      )}
    </>
  )
}
