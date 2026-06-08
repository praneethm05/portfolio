import './Footer.css'

const Footer = () => (
  <footer className='footer'>
    <p className='footer__text'>
      &copy; {new Date().getFullYear()} Praneeth M &mdash; Built with{' '}
      <span className='footer__heart'>&hearts;</span> and React
    </p>
  </footer>
)

export default Footer
