import { useStore } from '../../lib/context'
import { observer } from 'mobx-react'
import { screenLT } from '../../lib/screen'

const Topbar = observer(() => {
    const store = useStore()

    const toggle = name => store.toggle(name)

    const Switcher = ({className, name, onlbl, offlbl, val}) => {
        const id = `opt-$(name)`
        const checked = !!val
        const label = checked ? onlbl : offlbl

        return (
            <li className={`nav-item ${className || ''}`}>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id={id} checked={checked} onChange={() => toggle(name)} />
                <label className="form-check-label" for={id}>{label}</label>
            </div>
            </li>
        )
    }

    return (
        <>
        <ul className="nav">
            <Switcher name="darkmode" onlbl="Switch to Light" offlbl="Switch to Dark" val={store?.darkmode} />
            { !store.isItem && screenLT(store.screen, 'sm') && <Switcher name="sidebar" onlbl="Hide Sidebar" offlbl="Show Sidebar" val={store?.sidebar} /> }
        </ul>
        </>
    )
})

export default Topbar