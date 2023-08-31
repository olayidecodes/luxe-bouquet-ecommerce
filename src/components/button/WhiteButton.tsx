import'./Button.scss'

interface ButtonProps {
    title: string
}

const WhiteButton: React.FC<ButtonProps> = ({title}) => {
  return (
    <button className='app__whitebutton'>
      {title}
    </button>
  )
}

export default WhiteButton