import Link from 'next/link'
import { useStore } from '../../lib/context'

const Nav = () => {
    const store = useStore()
    const type = store.type || ''
    const NavLink = ({to, title}) => {
        const cls = 'nav-link' + (to == type ? ' active' : '')
        return <li className="nav-item"><Link href={`/spa/${to}`}><a className={cls}>{title}</a></Link></li>
    }

    return (
        <>
        <ul className="nav flex-column">
            <NavLink to="" title="Explore" />
            <NavLink to="news" title="News" />
            <NavLink to="social" title="Social" />
            <NavLink to="media" title="Media" />
            <NavLink to="project" title="Projects" />
        </ul>
        </>
    )
}

export default Nav