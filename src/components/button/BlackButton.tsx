import'./Button.scss'

interface ButtonProps {
    title: string
}

const BlackButton: React.FC<ButtonProps> = ({title}) => {
  return (
    <button className='app__blackbutton'>
      {title}
    </button>
  )
}

export default BlackButton
