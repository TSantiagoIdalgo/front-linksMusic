import Style from './landingDownload.module.css';
import { NavLink } from 'react-router-dom';

export default function LandingDownload() {
    return (
        <section className={Style.landingDownload} id='download'>
            <h2>What are you waiting to download it?</h2>
            <NavLink to='/download'>Download</NavLink>
        </section>
    )

}