// TODO: Fazer os ajustes no campo de voltar para a página inicial

import Image from 'next/image'
import Link from 'next/link'

const data = [
  {
    href: '#escola-do-real',
    icon: '/icons/globe.svg',
    text: 'Conheça a Escola do Real',
    alt: 'icon globe',
  },
  {
    href: '#onde-atuamos',
    icon: '/icons/location.svg',
    text: 'Onde Atuamos',
    alt: 'icon location',
  },
  {
    href: '#nosso-curso',
    icon: '/icons/hands.svg',
    text: 'Nosso curso',
    alt: 'icon hands',
  },
  {
    href: '#fale-conosco',
    icon: '/icons/talk.svg',
    text: 'Fale conosco',
    alt: 'icon talk',
  },
]

export default function Navbar({ isRoot }: { isRoot: boolean }) {
  return (
    <nav className="custom-mx-global flex flex-col pb-6">
      {isRoot ? (
        <>
          <ul className="flex flex-col items-center justify-center gap-6 border-b-2 border-green-500 py-6 text-base font-bold md:flex-row md:justify-between">
            {data.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  target="_parent"
                  className="flex h-full items-center gap-2"
                >
                  <Image
                    className="max-h-8"
                    src={item.icon}
                    height={35}
                    width={35}
                    alt={item.alt}
                  />
                  <span className="text-blue-500">{item.text}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex justify-between md:hidden">
            <button className="rounded-md bg-blue-500 px-5 py-3 uppercase text-white hover:bg-blue-700">
              Fazer Doação
            </button>
            <button className="rounded-md bg-green-500 px-5 py-3 uppercase text-white hover:bg-green-600">
              Faça Parte
            </button>
          </div>
        </>
      ) : (
        <Link
          href={'/'}
          className="mt-6 flex gap-2 text-base font-bold text-blue-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6 font-bold text-green-500"
          >
            <path
              fillRule="evenodd"
              d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
              clipRule="evenodd"
            />
          </svg>
          <span>Página Inicial</span>
        </Link>
      )}
    </nav>
  )
}
