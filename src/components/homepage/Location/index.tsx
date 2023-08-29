import Title from '../../general/Title'
import Card from './Card'

const data = [
  {
    src: '/icons/globe.svg',
    alt: 'globe icon',
    title: 'Estrutura',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
  {
    src: '/icons/hands.svg',
    alt: 'hands icon',
    title: 'Estrutura',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
  {
    src: '/icons/location.svg',
    alt: 'location icon',
    title: 'Estrutura',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
  {
    src: '/icons/talk.svg',
    alt: 'talk icon',
    title: 'Estrutura',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
]

export default function Location() {
  return (
    <section className="custom-py-section" id="onde-atuamos">
      <Title icon="/icons/location.svg">Onde Atuamos</Title>
      <h3 className="h-60 w-full bg-people-backgroud bg-cover bg-center px-10 py-10 text-center text-2xl font-bold text-white md:py-16 md:text-3xl">
        Capacitação de Pessoas para um Futuro <br /> Financeiramente
        Sustentável!
      </h3>
      <section className="mx-[13%] -mt-12 grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 lg:grid-cols-4 ">
        {data.map((item) => (
          <Card key={item.src} item={item} />
        ))}
      </section>
    </section>
  )
}
