import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <div className='contact__card'>
        <div className='contact__rainbow' aria-hidden='true' />
        <h2 className='contact__title'>Get In Touch</h2>
        <p className='contact__desc'>
          Have a project in mind or just want to say hello? I&apos;m always open to
          discussing new ideas and opportunities. Let&apos;s build something great
          together.
        </p>
        <a href={`mailto:${contact.email}`} target='_blank' rel='noreferrer'>
          <button type='button' className='contact__btn'>
            Say Hello
          </button>
        </a>
      </div>
    </section>
  )
}

export default Contact
