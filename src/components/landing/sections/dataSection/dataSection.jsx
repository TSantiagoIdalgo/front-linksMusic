import Style from './dataSection.module.css'
import FirstIcon from '../../../../assets/icons/section/first.png'
import SecondIcon from '../../../../assets/icons/section/second.png'
import ThirdIcon from '../../../../assets/icons/section/trhee.png'

const DataSection = () => {
    return (
        <section className={Style.container}>
            <SectionCard image={FirstIcon} tittle="Your favourite Music" parragraph="Listen to all the music you like in one place"/>
            <SectionCard image={SecondIcon} tittle="It’s free" parragraph="Save all the music you need without spending anything at all."/>
            <SectionCard image={ThirdIcon} tittle="It’s simple" parragraph="Log in and start listening non-stop"/>
        </section>
    )
}

const SectionCard = ({ image, tittle, parragraph }) => {
    return (
        <article className={Style.sectionCard}>
            <img src={image} alt="" />
            <h2>{tittle}</h2>
            <p>{parragraph}</p>
        </article>
    )
}

export default DataSection;