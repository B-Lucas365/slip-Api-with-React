import './styles.scss'
import devider from '../../assets/pattern-divider-desktop.svg'

export const Card = ({title, number, dados}) => {
    return (
        <div className='card'>
            <h3>{title}<span>#{number}</span></h3>
            <p>{dados.advice}</p>
            <img src={devider}></img>
        </div>
    )
}