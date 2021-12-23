import 'tailwindcss/tailwind.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAt, faBars, faEnvelopeOpenText, faHeart, faPaperPlane, faPhone, faPhoneAlt} from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faPhone, faAt, faPhoneAlt, faEnvelopeOpenText, faHeart, faPaperPlane)


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
