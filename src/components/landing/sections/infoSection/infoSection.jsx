import Style from './infoSection.module.css'
import PersonImg from '../../../../assets/icons/section/persona 1.png'

const InfoSection = () => {
    return (
        <section className={Style.infoSection}>
            <article className={Style.infoSection_p}>
                <h2>The <span>highest loyalty</span> on the market</h2>
                <p>Without any type of audio loss or compression, your favorite music at its best with our services.</p>
                <p>You will no longer have to worry about running out of space on your cell phone and having to delete those songs to which you are love.</p>
                <p>Up to 10 GB of storage so you can save the music you need and stop it depending on your local storage.</p>
            </article>
            <img src={PersonImg} alt="person" />
        </section>
    )
}

export default InfoSection;