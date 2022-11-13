import week1 from '@/assets/images/week1.png'
import week2 from '@/assets/images/week2.png'
import week3 from '@/assets/images/week3.png'
import Board, { BoardProps } from '@/components/Board'
import { BlueBubble, RedBubble, YellowBubble } from '@/svgs'

const list: BoardProps[] = [
  {
    imgSrc: week1,
    week: 'Week1',
    title: 'The F2E 活動網站設計',
    description: 'The F2E 活動網站設計',
    tags: ['#視差滾動', '#版塊設計'],
    link: 'https://2022.thef2e.com/news/week1'
  },
  {
    imgSrc: week2,
    week: 'Week2',
    title: '今晚，我想來點點簽',
    description: '每次要 PDF 簽名都要列印出來再掃描好麻煩，自幹一個 Web 版本的簽名服務吧！',
    tags: ['#canvas', '#凱鈿行動科技'],
    link: 'https://2022.thef2e.com/news/week2'
  },
  {
    imgSrc: week3,
    week: 'Week3',
    title: 'Scrum 新手村',
    description: 'Scrum 工作法的知識點介紹，讓新手快速上手',
    tags: ['#JS draggable', '#新加坡商鈦坦科技'],
    link: 'https://2022.thef2e.com/news/week3'
  }
]

export default function Solution() {
  return (
    <div className='f2e-solution-section'>
      <div className='f2e-solution-container'>
        <div className='f2e-solution-board-list'>
          {list.map((data, index) => (
            <Board key={index} {...data} />
          ))}
        </div>
        <div className='f2e-bubble f2e-bubble-1'>
          <YellowBubble />
        </div>
        <div className='f2e-bubble f2e-bubble-2'>
          <BlueBubble />
        </div>
        <div className='f2e-bubble f2e-bubble-3'>
          <YellowBubble />
        </div>
        <div className='f2e-bubble f2e-bubble-4'>
          <RedBubble />
        </div>
      </div>
    </div>
  )
}
