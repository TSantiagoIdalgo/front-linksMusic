import Style from './startSection.module.css'
import SecondaryButton from '../../../buttons/secondaryButton/secondaryButton';

const StartSection = () => {
    return (
        <section className={Style.startSection}>
            <h2>What are you waiting to download it?</h2>
            <SecondaryButton text={'Get started'}/>
        </section>
    )
}

export default StartSection;