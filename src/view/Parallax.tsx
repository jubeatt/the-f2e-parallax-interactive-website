import { City, CityShadow, Star, Cloud } from '@/svgs'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const config = {
  city: {
    duration: 2,
    ease: 'none',
    filter: 'brightness(0.8)'
  }
}

export default function Parallax() {
  const element = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: element.current,
          pin: true,
          scrub: true
          // scrub: 2
        }
      })

      // city(back) animation
      timeline.to('.f2e-parallax-body-city-shadow', {
        duration: config.city.duration,
        ease: config.city.ease,
        filter: config.city.filter,
        top: window.innerWidth < 576 ? -280 : 0
      })

      // city animation
      timeline.to(
        '.f2e-parallax-body-city',
        {
          duration: config.city.duration,
          ease: config.city.ease,
          filter: config.city.filter,
          top: window.innerWidth < 576 ? -820 : -570
        },
        0.5
      )

      // mask animation (enhance scroll experience)
      timeline.to('.f2e-parallax-body-mask', {
        duration: config.city.duration,
        ease: config.city.ease,
        filter: config.city.filter,
        top: -1000
      })
    }, [element])

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <div className='f2e-parallax-section' ref={element}>
      <div className='f2e-parallax-container'>
        <div className='f2e-parallax-header'>
          <h3 className='f2e-parallax-header-title'>
            年度最強合作，<strong>三大</strong>主題來襲
          </h3>
          <p className='f2e-parallax-header-desc'>
            各路廠商強強聯手，共同設計出接地氣的網頁互動挑戰關卡
          </p>
        </div>
      </div>
      <div className='f2e-parallax-body'>
        <div className='f2e-parallax-body-city-shadow'>
          <CityShadow />
        </div>
        <div className='f2e-parallax-body-city'>
          <City />
        </div>
        <div className='f2e-parallax-body-mask'></div>
      </div>
      {/* stars */}
      {Array(14)
        .fill('f2e-star')
        .map((it, index) => (
          <div key={index} className={`${it} ${it}-${index + 1}`}>
            <Star />
          </div>
        ))}
      <div className='f2e-cloud f2e-cloud-1'>
        <Cloud />
      </div>
      <div className='f2e-cloud f2e-cloud-2'>
        <Cloud />
      </div>
    </div>
  )
}
