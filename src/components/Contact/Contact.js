import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact' id='contact'>
      <h2 className='contact__title'>Get in touch.</h2>
      <p className='contact__desc'>
        Have a project in mind or just want to say hello? I&apos;m always open to
        discussing new ideas and opportunities.
      </p>
      <a href={`mailto:${contact.email}`}>
        <button type='button' className='contact__btn'>
          Say Hello
        </button>
      </a>
    </section>
  )
}

export default Contact
