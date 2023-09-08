'use client'

import useScrollPage from '@/hooks/useScrollPage'
import { TopIcon } from '../Icons'

export default function ScrollTop() {
  const scrollPosition = useScrollPage()
  const handleClick = () => window.scrollTo(0, 0)

  return (
    <>
      {!!scrollPosition && (
        <div
          className="fixed bottom-10 right-8 cursor-pointer rounded-full border border-white bg-black/70 p-3 text-white hover:bg-black/80"
          onClick={handleClick}
        >
          <TopIcon />
        </div>
      )}
    </>
  )
}
