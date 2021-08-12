import Link from "next/link"
import { useStore } from '../../lib/context'

const List = ({items}) => {
    const store = useStore()
    const type = store.type

    const list = type ? items.filter(i => i.type == type) : items
    return (
        <>
        <ul>
            {list.map(item => <li><Link href={`/spa/item/${item.slug}`}><a>{item.title}</a></Link></li>)}
        </ul>
        </>
    )
}

export default List