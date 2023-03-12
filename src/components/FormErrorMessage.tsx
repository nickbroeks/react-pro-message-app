type FormErrorMessageProps = {
  message: string
}

export default function FormErrorMessage({ message }: FormErrorMessageProps) {

  return (
    <div>
      <p>Error:</p>
      <p>{message}</p>
    </div>
  )
}