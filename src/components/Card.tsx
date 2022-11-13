interface Props {
  decoration1?: JSX.Element
  decoration2?: JSX.Element
  number: number
  description: string
}

const Card: React.FC<Props> = (props) => {
  return (
    <div className='f2e-card'>
      <div className='f2e-card-header'>
        {props.decoration1 && props.decoration1}
        {props.decoration2 && <div className='f2e-card-header-decoration'>{props.decoration2}</div>}
        <div className='f2e-card-header-number'>{props.number}</div>
      </div>
      <div className='f2e-card-body'>
        <p className='f2e-card-body-text'>{props.description}</p>
        <span className='f2e-card-body-cursor'>|</span>
      </div>
    </div>
  )
}

export default Card
