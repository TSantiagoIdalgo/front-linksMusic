import Style from './main.module.css'
import MainSection from '../sections/mainSection/mainSection'
import DataSection from '../sections/dataSection/dataSection'
import InfoSection from '../sections/infoSection/infoSection'
import StartSection from '../sections/startSection/startSection'

const Main = () => {
    return (
        <main className={Style.main}>
            <MainSection/>
            <DataSection/>
            <InfoSection/>
            <StartSection/>
        </main>
    )
}

export default Main