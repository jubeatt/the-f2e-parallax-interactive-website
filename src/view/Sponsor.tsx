import sponsor1 from '@/assets/images/sponsor1.png'
import sponsor2 from '@/assets/images/sponsor2.png'
import sponsor3 from '@/assets/images/sponsor3.png'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'

export default function Sponsor() {
  const element = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLDivElement>('.the-f2e-sponsor-body-card').forEach((cardElement) => {
        gsap.to(cardElement, {
          scrollTrigger: {
            trigger: cardElement,
            toggleClass: 'roll-in-top'
          }
        })
      })
    }, [element])

    return () => {
      ctx.revert()
    }
  })

  return (
    <div className='the-f2e-sponsor-section' ref={element}>
      <div className='the-f2e-sponsor-container'>
        <div className='the-f2e-sponsor-header'>
          <h3 className='the-f2e-sponsor-header-title'>贊助單位</h3>
        </div>
        <div className='the-f2e-sponsor-body'>
          <div className='the-f2e-sponsor-body-card'>
            <img src={sponsor1} alt='凱鈿行動科技' />
          </div>
          <div className='the-f2e-sponsor-body-card'>
            <img src={sponsor2} alt='板塊設計' />
          </div>
          <div className='the-f2e-sponsor-body-card'>
            <img src={sponsor3} alt='新加坡商鈦坦科技' />
          </div>
        </div>
        <div className='the-f2e-sponsor-link-wrapper'>
          <a
            className='the-f2e-sponsor-link'
            href='https://2022.thef2e.com/signup'
            target='_blank'
            rel='noreferrer'
          >
            立即報名
          </a>
        </div>
      </div>
    </div>
  )
}
