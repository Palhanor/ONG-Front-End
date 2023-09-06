import Image from 'next/image'

interface TitleProps {
  icon?: string
  children: string
}

export default function Title({ icon, children }: TitleProps) {
  return (
    <div className="mb-6 flex flex-col items-center">
      {icon && (
        <Image
          className="mb-3 w-10"
          src={icon}
          alt="Icone da seção"
          width={32}
          height={32}
        />
      )}
      <h2 className="inline-block border-b-4 border-green-500 px-4 pb-2 text-center text-xl font-semibold text-blue-500 md:text-2xl">
        {children}
      </h2>
    </div>
  )
}
