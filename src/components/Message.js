import Alert from 'react-bootstrap/Alert'

const Message = ({ balance }) => {
  return (
    <div>
      <Alert varient='info'> balance: {balance}</Alert>
    </div>
  )
}

export default Message