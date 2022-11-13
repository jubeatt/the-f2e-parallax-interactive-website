import { Medal } from '@/svgs'
// @ts-ignore (this pack does not support typescript)
import AnimatedNumber from 'animated-number-react'

export interface PrizeCardProps {
  title: string
  prize: string
  quota: string
  imgSrc: string
  data?: { prizeValue: number }
}

const PrizeCard: React.FC<PrizeCardProps> = (props) => {
  const pattern = {
    numberWithString: /\d+[\,]\d+/g,
    numberOnly: /\d+/g
  }

  function formatValue(_: number) {
    const value = Math.floor(_)
    if (value >= 10000) {
      const newValue = value.toString().split('')
      newValue.splice(2, 0, ',')
      return newValue.join('')
    } else if (value >= 1000) {
      const newValue = value.toString().split('')
      newValue.splice(1, 0, ',')
      return newValue.join('')
    } else {
      return value
    }
  }

  return (
    <div className='f2e-prize-card'>
      <div className='f2e-prize-card-title'>
        <div className='f2e-prize-card-title-medal'>
          <Medal />
        </div>
        <h4 className='f2e-prize-card-title-text'>{props.title}</h4>
      </div>
      <div className='f2e-prize-card-content'>
        <img className='f2e-prize-card-content-image' src={props.imgSrc} alt={props.prize} />
        <div className='f2e-prize-card-content-description'>
          {props.data ? (
            <>
              <p>
                {/* NTD */}
                {props.prize.replace(pattern.numberWithString, '').split(' ')[0]}
                <AnimatedNumber
                  className='f2e-prize-card-content-number'
                  value={props.data.prizeValue}
                  formatValue={formatValue}
                  duration={1500}
                />
                {/* /組 or /位 */}
                {props.prize.replace(pattern.numberWithString, '').split(' ')[1]}
              </p>
              <small>{props.quota}</small>
            </>
          ) : (
            <>
              <p>{props.prize}</p>
              <small>{props.quota}</small>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default PrizeCard
