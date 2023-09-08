import { useEffect, useState } from 'react'

export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState<number>(0)

  function changeWidth() {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    window.addEventListener('resize', changeWidth)
    return () => window.removeEventListener('resize', changeWidth)
  }, [])

  return windowWidth
}
