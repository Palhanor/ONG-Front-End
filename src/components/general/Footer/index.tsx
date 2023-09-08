import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-20 bg-gradient-to-r from-green-500 to-blue-500 px-10 py-12">
      <div className="flex justify-center gap-4">
        <Link href="#">
          <Image
            className="h-8 w-auto"
            width={29}
            height={29}
            src="/icons/instagram.svg"
            alt="logo do Instagram"
          />
        </Link>
        <Link href="#">
          <Image
            className="h-8 w-auto"
            width={29}
            height={29}
            src="/icons/linkedin.svg"
            alt="logo do Linkedin"
          />
        </Link>
        <Link href="#">
          <Image
            className="h-8 w-auto"
            width={29}
            height={29}
            src="/icons/facebook.svg"
            alt="logo do Facebook"
          />
        </Link>
      </div>
      <small className="my-3 block text-center text-sm text-white md:text-base">
        &copy; 2023 - Escola do Real - Todos os direitos reservados
      </small>
      <div className="flex items-center justify-center text-center text-xs text-white">
        <span>
          Desenvolvido por{' '}
          <Link
            className="underline"
            rel="external"
            target="_blank"
            href="https://jdg-webpage.vercel.app"
          >
            Juniors Developers Group.
          </Link>
        </span>
      </div>
    </footer>
  )
}
