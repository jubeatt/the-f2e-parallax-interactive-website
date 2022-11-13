import { Fist, Fist2, NextButton, PrevButton, Ribbon, Stage } from '@/svgs'
import { Navigation, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import paper from '@/assets/images/paper.png'
import money from '@/assets/images/money.png'
import moneyBag from '@/assets/images/money-bag.png'
import PrizeCard, { PrizeCardProps } from '@/components/PrizeCard'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function EventPrize() {
  const element = useRef<HTMLDivElement>(null)
  const [list, setList] = useState<PrizeCardProps[]>([
    {
      title: '初選佳作',
      prize: '數位獎狀',
      quota: '（共六十位）',
      imgSrc: paper
    },
    {
      title: '團體企業獎',
      prize: 'NTD 3,000/位',
      quota: '（共六位）',
      imgSrc: moneyBag,
      data: { prizeValue: 3000 }
    },
    {
      title: '個人企業獎',
      prize: 'NTD 10,000/組',
      quota: '（共三組）',
      imgSrc: money,
      data: { prizeValue: 10000 }
    }
  ])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.f2e-event-prize-header-fist-left', {
        scrollTrigger: {
          trigger: '.f2e-event-prize-header-fist-left',
          toggleClass: 'slide-in-blurred-left',
          start: 'bottom bottom'
        }
      })
      gsap.to('.f2e-event-prize-header-fist-right', {
        scrollTrigger: {
          trigger: '.f2e-event-prize-header-fist-right',
          toggleClass: 'slide-in-blurred-right',
          start: 'bottom bottom'
        }
      })

      gsap.to('.f2e-event-prize-mobile-only-fist', {
        scrollTrigger: {
          trigger: '.f2e-event-prize-mobile-only-fist',
          toggleClass: 'slide-in-blurred-tl'
        }
      })
    }, [element])

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <div className='f2e-event-prize-section' ref={element}>
      <div className='f2e-event-prize-mobile-only-fist'>
        <Fist2 />
      </div>
      <div className='f2e-event-prize-container'>
        <div className='f2e-event-prize-header'>
          <div className='f2e-event-prize-header-fist f2e-event-prize-header-fist-left'>
            <Fist />
          </div>
          <h3 className='f2e-event-prize-header-title'>
            區區修煉已經無法滿足了嗎？
            <br />
            還有<strong>比賽</strong>等著你！
          </h3>
          <div className='f2e-event-prize-header-fist f2e-event-prize-header-fist-right'>
            <Fist />
          </div>
        </div>
        <div className='f2e-event-prize-body'>
          <h3 className='f2e-event-prize-body-title'>** 評審機制 **</h3>
          <p className='f2e-event-prize-body-description'>
            初選：將由六角學院前端、UI 評審進行第一波篩選。
          </p>
          <p className='f2e-event-prize-body-description'>
            決選：由六角學院與贊助廠商討論，進行最後篩選，並於 12/30(五) 由評審進行直播公布名單！
          </p>
        </div>
        <div className='f2e-swiper-header'>
          <h3 className='f2e-swiper-header-title'>獎項</h3>
        </div>
        <div className='f2e-swiper-wrapper'>
          <Swiper
            modules={[Navigation, A11y, Autoplay]}
            navigation={{
              prevEl: '.f2e-slide-prev-button',
              nextEl: '.f2e-slide-next-button'
            }}
            loop={true}
            centeredSlides={true}
            onSlideChange={(swiper) => {
              if (list[swiper.realIndex].data) {
                const originalList = JSON.parse(JSON.stringify(list))
                const newList = JSON.parse(JSON.stringify(list))
                newList[swiper.realIndex].data.prizeValue = 0
                setList(newList)
                setTimeout(() => setList(originalList), 100)
              }
            }}
            spaceBetween={120}
            slidesPerView={1}
            breakpoints={{
              992: {
                slidesPerView: 2
              },
              1200: {
                slidesPerView: 3
              }
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            {list.map((data) => (
              <SwiperSlide key={data.prize}>
                <PrizeCard {...data} />
              </SwiperSlide>
            ))}
            <div className='f2e-slide-button f2e-slide-prev-button'>
              <PrevButton />
            </div>
            <div className='f2e-slide-button f2e-slide-next-button'>
              <NextButton />
            </div>
          </Swiper>
        </div>
        <div className='f2e-event-prize-stage-wrapper'>
          <div className='f2e-event-prize-stage'>
            <Stage />
          </div>
          <div className='f2e-event-prize-stage-ribbon'>
            <Ribbon />
          </div>
        </div>
      </div>
    </div>
  )
}
