import Link from "next/link"
import { useStore } from "../../lib/context"

const Item = ({item}) => {
    const store = useStore()
    const {title, content} = item
    return (
        <div className="item">
            <Link href={`/spa/${store.type || ''}`}><a>Close</a></Link>
            <h3 className="item-title">{title}</h3>
            <div className="item-content" dangerouslySetInnerHTML={{__html: content}}></div>
        </div>
    )
}

export default Item