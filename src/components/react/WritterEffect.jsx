import { useTypewriter ,Cursor} from 'react-simple-typewriter'

const WritterEffect = () => {
  const [text] = useTypewriter({
    words: ['pescadores', 'cazadores', 'y otros mentirosos...'],
    loop: 0
  })

  return (
    <>
      <span>{text}</span>
      <Cursor cursorStyle='_'/>
    </>
  )
}

export default WritterEffect