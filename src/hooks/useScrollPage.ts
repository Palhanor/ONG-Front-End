import { useEffect, useState } from 'react'

export default function useScrollPage() {
  const [y, setY] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => setY(window.scrollY))
    return () => window.removeEventListener('scroll', () => setY)
  }, [y])

  return y
}
