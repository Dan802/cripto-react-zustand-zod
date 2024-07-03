type ErrorMessagesProps = {
  children: React.ReactNode
}

export default function ErrorMessages({children}: ErrorMessagesProps) {
  return (
    <div>{children}</div>
  )
}
