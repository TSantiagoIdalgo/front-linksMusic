import Style from './register.module.css'
import Logo from '../../logo/logo'
import RegisterData from './registerData/registerData'
import Registered from './registered/registered'
import { useQuery } from '../../../hooks/helpers/user/register'
import { Link } from 'react-router-dom'


export default function Register() {
    const { registered } = useQuery()
    return (
        <div className={Style.register}>
            <nav className={Style.register_nav}>
                <Link to={'/'}>
                    <Logo/>
                </Link>
            </nav>
            <div className={Style.template}>
                { registered === 'true'
                  ? <Registered/>
                  : <section className={Style.register_template}>
                      <h1>Register in Links Music</h1>
                      <RegisterData/>
                    </section>
                }
            </div>
        </div>
    )
}