import { HalfCircle, Sparkles, Bulb, Tree, QuestionMark, Gamepad } from '@/svgs'
import Card from '@/components/Card'
import Eye from '@/components/Eye'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

const config = {
  transition: {
    ease: 'expo.out',
    duration: 2,
    offset: 1000
  },
  typing: {
    ease: 'none',
    duration: 2
  },
  button: {
    delay: 0.6,
    duration: 1
  }
}

export default function Question() {
  const element = useRef<HTMLDivElement>(null)
  const typingAnimationData = useRef([
    {
      text: '羨慕別人的酷酷網頁動畫？',
      isComplete: true
    },
    {
      text: '動畫技能樹太雜無從下手？',
      isComplete: true
    },
    {
      text: '滿足不了同事的許願？',
      isComplete: true
    }
  ])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // cursor animation
      gsap.fromTo(
        '.f2e-card-body-cursor',
        {
          visibility: 'hidden'
        },
        {
          duration: 0,
          visibility: 'visible',
          repeat: -1,
          yoyo: true,
          repeatDelay: 0.3
        }
      )

      // button animation
      ScrollTrigger.create({
        trigger: '.f2e-question-section-button',
        // start: 'bottom bottom',
        onEnter: () => {
          gsap.fromTo(
            '.f2e-question-section-button',
            {
              opacity: 0,
              right: -200
            },
            {
              opacity: 1,
              right: 20,
              delay: config.button.delay,
              duration: config.button.duration
            }
          )
        }
      })

      gsap.utils.toArray<HTMLElement>('.f2e-card').forEach((cardElement, index) => {
        const textElement = cardElement.querySelector('.f2e-card-body-text') as HTMLElement
        // text animation
        ScrollTrigger.create({
          trigger: textElement,
          onEnter: () => {
            // prevent replay while animation is playing
            if (typingAnimationData.current[index].isComplete) {
              typing(textElement, index)
            }
          }
        })

        // card animation
        ScrollTrigger.create({
          trigger: cardElement,
          onEnter: () => {
            window.innerWidth > 1200
              ? TransitionFromBottom(cardElement) // pc
              : TransitionFromSide(cardElement, index) // mobile
          },
          onLeaveBack: () => hide(cardElement),
          onLeave: () => {}
        })
      })
    }, [element])

    // eye animation
    const container = document.getElementById('f2e-container')
    container?.addEventListener('mousemove', onMousemove)

    return () => {
      ctx.revert()
      container?.removeEventListener('mousemove', onMousemove)
    }
  }, [])

  function TransitionFromBottom(element: HTMLElement) {
    gsap.fromTo(
      element,
      {
        y: config.transition.offset,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: config.transition.duration,
        ease: config.transition.ease
      }
    )
  }

  function TransitionFromSide(element: HTMLElement, index: number) {
    gsap.fromTo(
      element,
      {
        x: index % 2 === 0 ? config.transition.offset * -1 : config.transition.offset,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: config.transition.duration,
        ease: config.transition.ease
      }
    )
  }

  function hide(element: HTMLElement) {
    gsap.set(element, { opacity: 0 })
  }

  function typing(element: HTMLElement, index: number) {
    typingAnimationData.current[index].isComplete = false
    gsap.fromTo(
      element,
      {
        text: ''
      },
      {
        text: typingAnimationData.current[index].text,
        ease: config.typing.ease,
        duration: config.typing.duration,
        onComplete: () => {
          typingAnimationData.current[index].isComplete = true
        }
      }
    )
  }

  function onMousemove(event: MouseEvent) {
    const eyes = document.querySelectorAll('.f2e-eye-ball') as NodeListOf<HTMLElement>
    eyes.forEach((eye: HTMLElement) => {
      const x = (event.clientX * 100) / window.innerWidth
      const y = (event.clientY * 100) / window.innerWidth
      const left = x > 70 ? x - (x % 70) : x // max: 70
      const top = y > 70 ? y - (y % 70) : y // max: 70
      eye.style.left = left + '%'
      eye.style.top = top + '%'
    })
  }

  return (
    <div className='f2e-question-section' ref={element}>
      <div className='f2e-question-container'>
        <div className='f2e-question-header'>
          <div className='f2e-question-header-wrapper'>
            <div className='f2e-question-header-eye'>
              <Eye />
              <Eye />
            </div>
            <h3 className='f2e-question-header-title'>你是否也有以下困擾？</h3>
          </div>
        </div>
        <div className='f2e-question-content'>
          <Card
            number={1}
            decoration1={<Gamepad />}
            decoration2={<Sparkles />}
            description='羨慕別人的酷酷網頁動畫？'
          />
          <Card number={2} decoration1={<Bulb />} description='滿足不了同事的許願？' />
          <Card
            number={3}
            decoration1={<Tree />}
            decoration2={<QuestionMark />}
            description='動畫技能樹太雜無從下手？'
          />
        </div>
      </div>
      <div className='half-circle-1'>
        <HalfCircle />
      </div>
      <div className='half-circle-2'>
        <HalfCircle />
      </div>
      <button className='f2e-question-section-button'>立即報名</button>
    </div>
  )
}
