import Style from './main.module.css'
import MainSection from '../sections/mainSection/mainSection'

const Main = () => {
    return (
        <main className={Style.main}>
            <MainSection/>
        </main>
    )
}

export default Main