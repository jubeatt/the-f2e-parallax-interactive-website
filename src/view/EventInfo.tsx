import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function EventInfo() {
  const element = useRef<HTMLDivElement>(null)
  const [currentWidth, setCurrentWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.f2e-event-info-body',
          toggleActions: 'restart'
        }
      })
      if (currentWidth > 992) {
        animationPc(timeline)
      } else {
        animationMobile(timeline)
      }
    }, [element])

    window.addEventListener('resize', onResize)
    function onResize() {
      setCurrentWidth(window.innerWidth)
    }

    return () => {
      ctx.revert()
      window.removeEventListener('resize', onResize)
    }
  }, [currentWidth])

  function animationPc(timeline: gsap.core.Timeline) {
    for (let i = 1; i <= 3; i++) {
      // bar animation
      timeline.fromTo(
        `div[data-bar-id="${i}"]`,
        { width: 0 },
        { width: '100%', duration: 0.7, ease: 'linear' }
      )
      // triangle animation
      timeline.fromTo(
        `div[data-triangle-id="${i}"]`,
        { opacity: 0 },
        { opacity: 1, duration: 0.7, ease: 'linear' },
        '<'
      )
      // card animation
      timeline.fromTo(
        `div[data-card-id="${i}"]`,
        { opacity: 0, yPercent: '50' },
        { opacity: 1, yPercent: '0', duration: 0.7, ease: 'linear' },
        '<'
      )
    }
  }

  function animationMobile(timeline: gsap.core.Timeline) {
    for (let i = 1; i <= 3; i++) {
      // bar animation
      timeline.fromTo(
        `div[data-bar-id="${i}"]`,
        { height: 0 },
        { height: '100%', duration: 0.7, ease: 'linear' }
      )
      // triangle animation
      timeline.fromTo(
        `div[data-triangle-id="${i}"]`,
        { opacity: 0 },
        { opacity: 1, duration: 0.7, ease: 'linear' },
        '<'
      )
      // card animation
      timeline.fromTo(
        `div[data-card-id="${i}"]`,
        { opacity: 0, xPercent: '50' },
        { opacity: 1, xPercent: '0', duration: 0.7, ease: 'linear' },
        '<'
      )
    }
  }

  return (
    <div className='f2e-event-info-section' ref={element}>
      <div className='f2e-event-info-container'>
        <div className='f2e-event-info-header'>
          <h3 className='f2e-event-info-header-title'>活動說明</h3>
        </div>
        <div className='f2e-event-info-body'>
          <div className='f2e-event-info-body-card-wrapper'>
            <div className='f2e-event-info-body-card-timeline-bar' data-bar-id='1'>
              <div
                className='f2e-event-info-body-card-timeline-bar-triangle'
                data-triangle-id='1'
              ></div>
            </div>
            <div className='f2e-event-info-body-card' data-card-id='1'>
              <h4 className='f2e-event-info-body-card-title'>報名時間</h4>
              <div className='f2e-event-info-body-card-description'>
                10/13~10/30 <br />
                截止前可修改報名組別
              </div>
            </div>
          </div>
          <div className='f2e-event-info-body-card-wrapper'>
            <div className='f2e-event-info-body-card-timeline-bar' data-bar-id='2'>
              <div
                className='f2e-event-info-body-card-timeline-bar-triangle'
                data-triangle-id='2'
              ></div>
            </div>
            <div className='f2e-event-info-body-card' data-card-id='2'>
              <h4 className='f2e-event-info-body-card-title'>登錄作品</h4>
              <div className='f2e-event-info-body-card-description'>
                10/31~11/28 依賽程登錄作品 <br />
                10/31(一) UI、團體組開賽 <br />
                11/7(一) 前端組開賽
              </div>
            </div>
          </div>
          <div className='f2e-event-info-body-card-wrapper'>
            <div className='f2e-event-info-body-card-timeline-bar' data-bar-id='3'>
              <div
                className='f2e-event-info-body-card-timeline-bar-triangle'
                data-triangle-id='3'
              ></div>
            </div>
            <div className='f2e-event-info-body-card' data-card-id='3'>
              <h4 className='f2e-event-info-body-card-title'>額外競賽</h4>
              <div className='f2e-event-info-body-card-description'>主題豐厚獎金等著你</div>
            </div>
          </div>
        </div>
      </div>
      <div className='f2e-event-info-stick-1'>
        <div className='f2e-event-info-stick f2e-event-info-stick-blue'></div>
      </div>
      <div className='f2e-event-info-stick-2'>
        <div className='f2e-event-info-stick f2e-event-info-stick-pink'></div>
      </div>
      <div className='f2e-event-info-stick-3'>
        <div className='f2e-event-info-stick f2e-event-info-stick-yellow'></div>
      </div>
      <div className='f2e-event-info-stick-4'>
        <div className='f2e-event-info-stick f2e-event-info-stick-blue'></div>
      </div>
      <div className='f2e-event-info-stick-5'>
        <div className='f2e-event-info-stick f2e-event-info-stick-pink'></div>
      </div>
      <div className='f2e-event-info-stick-6'>
        <div className='f2e-event-info-stick f2e-event-info-stick-yellow'></div>
      </div>
    </div>
  )
}
