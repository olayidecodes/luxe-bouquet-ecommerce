interface ContactBoxProps {
    title: string
    content: string
}

const ContactBox: React.FC<ContactBoxProps> = ({title, content}) => {
  return (
    <div className='footer__contact_box'>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  )
}

export default ContactBox
