export default function Button({
  children,
  onClick,
}: {
  children: string
  onClick?: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="m-auto block rounded-full bg-gradient-to-r from-green-500 to-blue-500 px-10 py-3 text-sm uppercase text-white md:text-base"
    >
      {children}
    </button>
  )
}
