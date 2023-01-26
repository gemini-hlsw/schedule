import './MainTitle.scss'

interface MainTitleProps {
    title: string
}

export default function MainTitle({title}: MainTitleProps) {
    var splited_title = title.split("");

    return (
        <div className="main-title">
            {splited_title.map((letter, index) => (
                <span key={index}> {letter}</span>
            ))}
        </div>
    )
}