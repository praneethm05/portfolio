import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title contact__title'>Get In Touch</h2>
      <p className='contact__desc'>
        Have a project in mind or just want to say hello? I&apos;m always open to
        discussing new ideas and opportunities. Let&apos;s build something great
        together.
      </p>
      <a href={`mailto:${contact.email}`}>
        <button type='button' className='btn btn--outline contact__btn'>
          Say Hello
        </button>
      </a>
    </section>
  )
}

export default Contact
