// TODO: Fazer os ajustes no campo de voltar para a página inicial

import Image from 'next/image'
import Link from 'next/link'
import { LeftIcon } from '../../Icons'

const data = [
  {
    href: '#escola-do-real',
    icon: '/icons/globe.svg',
    text: 'Conheça a Escola do Real',
    alt: 'Ícone da seção Conheça a Escola do Real',
  },
  {
    href: '#onde-atuamos',
    icon: '/icons/location.svg',
    text: 'Onde Atuamos',
    alt: 'Ícone da seção Onde Atuamos',
  },
  {
    href: '#nosso-curso',
    icon: '/icons/hands.svg',
    text: 'Nosso curso',
    alt: 'Ícone da seção Nosso curso',
  },
  {
    href: '#fale-conosco',
    icon: '/icons/talk.svg',
    text: 'Fale conosco',
    alt: 'Ícone da seção Fale conosco',
  },
]

export default function Navbar({ isRoot }: { isRoot: boolean }) {
  return (
    <nav className="custom-mx-global flex flex-col pb-6">
      {isRoot ? (
        <>
          <ul className="flex flex-col items-center justify-center gap-6 border-b-2 border-green-500 py-6 text-base font-bold lg:flex-row lg:justify-between">
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
          <div className="mt-5 flex justify-between gap-4 lg:hidden">
            <button className="rounded-md bg-blue-500 px-5 py-4 text-xs uppercase text-white hover:bg-blue-700">
              Fazer Doação
            </button>
            <button className="rounded-md bg-green-500 px-5 py-4 text-xs uppercase text-white hover:bg-green-600">
              Faça Parte
            </button>
          </div>
        </>
      ) : (
        <Link
          href={'/'}
          className="mt-6 flex gap-2 text-base font-bold text-blue-500"
        >
          <LeftIcon />
          <span>Página Inicial</span>
        </Link>
      )}
    </nav>
  )
}
