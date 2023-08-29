import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-20 bg-gradient-to-r from-green-500 to-blue-500 px-10 py-12">
      <div className="flex justify-center gap-4">
        <Link href="#">
          <Image
            width={29}
            height={29}
            src="/icons/instagram.svg"
            alt="logo do Instagram"
          />
        </Link>
        <Link href="#">
          <Image
            width={29}
            height={29}
            src="/icons/linkedin.svg"
            alt="logo do Linkedin"
          />
        </Link>
        <Link href="#">
          <Image
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
      <span className="flex items-center justify-center text-xs text-white">
        <span className="mr-1 ">Desenvolvido por </span>
        <a
          className="underline"
          rel="external"
          target="_blank"
          href="https://jdg-webpage.vercel.app"
        >
          Juniors Developers Group.
        </a>
        <Image
          className="mx-3 hidden md:visible"
          src="/JDG.png"
          alt="Logo Juniors Developers Group."
          height={29}
          width={29}
        />
      </span>
    </footer>
  )
}
