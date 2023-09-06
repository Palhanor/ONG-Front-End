export default function Toast({
  status,
  message,
}: {
  status: boolean
  message: string
}) {
  return (
    <h2
      className={
        'fixed right-0 top-0 rounded-md p-5 ' +
        (status ? 'bg-green-300' : 'bg-red-300')
      }
    >
      {message}
    </h2>
  )
}
