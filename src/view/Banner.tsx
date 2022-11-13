import { Panel, Stick } from '@/svgs'
import lighting from '@/assets/images/lighting.png'

export default function Banner() {
  return (
    <div className='f2e-banner-section'>
      <div className='f2e-banner-container'>
        <div className='f2e-banner-left'>
          <h1 className='f2e-banner-title'>
            <div className='f2e-banner-title-text'>The F2E 4th</div>
            <div className='f2e-banner-title-text-layer f2e-banner-title-text-layer-0'>
              The F2E 4th
            </div>
            <div className='f2e-banner-title-text-layer f2e-banner-title-text-layer-1'>
              The F2E 4th
            </div>
            <Stick />
          </h1>
          <h2 className='f2e-banner-sub-title'>
            <div className='f2e-banner-sub-title-text'>互動網頁設計</div>
            <div className='f2e-banner-sub-title-text-layer f2e-banner-sub-title-text-layer-0'>
              互動網頁設計
            </div>
            <div className='f2e-banner-sub-title-text-layer f2e-banner-sub-title-text-layer-1'>
              互動網頁設計
            </div>
          </h2>
          <p className='f2e-banner-description'>
            UI 設計師 x 前端工程師最強合作，
            <br />
            三大主題來襲網頁互動關卡
            <br />
            等你來挑戰 !
          </p>
          <div className='lighting-1'>
            <img src={lighting} alt='Lighting' />
          </div>
          <div className='lighting-2'>
            <img src={lighting} alt='Lighting' />
          </div>
        </div>
        <div className='f2e-banner-right'>
          <Panel />
        </div>
      </div>
    </div>
  )
}
