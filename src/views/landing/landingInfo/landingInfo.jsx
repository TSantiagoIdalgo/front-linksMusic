import Style from './landingInfo.module.css'
import CardLanding from '../cardLanding/CardLanding'
import CardIcon from '../../../assets/image/icon/card/iconInfo1.png'
import CardIcon2 from '../../../assets/image/icon/card/iconInfo2.png'
import CardIcon3 from '../../../assets/image/icon/card/iconInfo3.png'

export default function LandingInfo () {
    return (
        <section className={Style.info}>
            <h1>Why Links Music</h1>
            <div className={Style.info_cards}>
            <CardLanding img={CardIcon} 
            tittle={'Your favourite Music'} 
            p={`Listen to all the music you like in one place`}/>
            <CardLanding img={CardIcon2}
            tittle={'It`s free'} 
            p={`Save all the music you need without spending anything at all.`}/>
            <CardLanding img={CardIcon3}
            tittle={'It`s simple'} 
            p={`Log in and start listening non-stop`}/>
            </div>
        </section>
    )
}
