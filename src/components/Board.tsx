export interface BoardProps {
  imgSrc: string
  week: string
  title: string
  description: string
  tags: string[]
  link: string
}

const Board: React.FC<BoardProps> = (props) => {
  return (
    <div className='f2e-board'>
      <div className='f2e-board-wrapper'>
        <div className='f2e-board-outter'>
          <div className='f2e-board-inner'>
            <div className='f2e-board-image'>
              <img src={props.imgSrc} alt='week1' />
            </div>
            <div className='f2e-board-content'>
              <div className='f2e-board-content-week'>{props.week}</div>
              <h3 className='f2e-board-content-title'>{props.title}</h3>
              <p className='f2e-board-content-description'>{props.description}</p>
              {props.tags.map((tag) => (
                <div key={tag} className='f2e-board-content-tag'>
                  {tag}
                </div>
              ))}
              <a
                className='f2e-board-content-link'
                href={props.link}
                target='_blank'
                rel='noreferrer'
              >
                查看關卡細節
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Board
