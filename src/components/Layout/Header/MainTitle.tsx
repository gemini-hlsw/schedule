import { useNavigate } from 'react-router-dom'
import './MainTitle.scss'

interface MainTitleProps {
  title: string
}

export default function MainTitle({title}: MainTitleProps) {
  var splited_title = title.split("")
  const navigate = useNavigate()

  return (
    <div className="header-title" onClick={() => navigate("/")}>
      {splited_title.map((letter, index) => (
        <span key={index}>{letter}</span>
      ))}
    </div>
  )
}