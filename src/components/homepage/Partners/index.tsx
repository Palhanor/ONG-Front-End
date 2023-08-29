import Image from 'next/image'
import Title from '../../general/Title'

const data = [
  {
    src: '/images/logo-partners/vital.png',
    alt: 'Logo do Parceiro 1',
  },
  {
    src: '/images/logo-partners/obecon.png',
    alt: 'Logo do Parceiro 2',
  },
  {
    src: '/images/logo-partners/celeritas.png',
    alt: 'Logo do Parceiro 3',
  },
  {
    src: '/images/logo-partners/olimpiadas.png',
    alt: 'Logo do Parceiro 4',
  },
]

export default function Partners() {
  return (
    <section className="custom-py-section custom-mx-global">
      <Title icon="/icons/hands.svg">Nossos Parceiros</Title>
      <div>
        <ul className="mt-12 grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-3 lg:grid-cols-4">
          {data.map((item) => (
            <li key={item.src} className="flex items-center justify-center">
              <Image src={item.src} alt={item.alt} width={150} height={100} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
