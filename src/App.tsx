import Banner from '@/view/Banner'
import Question from '@/view/Question'
import Parallax from '@/view/Parallax'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import TextPlugin from 'gsap/TextPlugin'
import Solution from './view/Solution'
import EventInfo from './view/EventInfo'
import EventPrize from './view/EventPrize'
import QA from './view/QA'
import Sponsor from './view/Sponsor'

function App() {
  gsap.registerPlugin(ScrollTrigger, TextPlugin)

  return (
    <div id='f2e-container'>
      <Banner />
      <Question />
      <Parallax />
      <Solution />
      <EventInfo />
      <EventPrize />
      <QA />
      <Sponsor />
      <footer>
        Copyright © {new Date().getFullYear()}{' '}
        <a href='https://www.behance.net/alena0528a' target='_blank' rel='noreferrer'>
          Hsu Lan Design.
        </a>{' '}
        &{' '}
        <a href='https://github.com/jubeatt' target='_blank' rel='noreferrer'>
          PeaNu
        </a>{' '}
        All rights reserved.
      </footer>
    </div>
  )
}

export default App
