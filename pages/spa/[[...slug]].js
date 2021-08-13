import { useState } from "react";
import {testData} from "../../data/fetchData";
import { useStore } from "../../lib/context";
import { observer } from "mobx-react";

import Topbar from "../../components/SPA/Topbar";
import Nav from "../../components/SPA/Nav";
import List from "../../components/SPA/List";
import Item from "../../components/SPA/Item";
import Sidebar from "../../components/SPA/Sidebar";
import { screenGT, screenLT } from "../../lib/screen";

const SPA = observer(({type, item, items}) => {
    const store = useStore()
    if (type !== null) store.setType(type)
    store.showItem(!!item)    
    const showMain = screenGT(store.screen, 'xs') || (!store.isItem && !store.sidebar)
    const showSidebar = !store.isItem && (screenGT(store.screen, 'xs') || store.sidebar)

    return (
        <>

        <h1>Helllo</h1>
        <Topbar />
        <div className="row">
            <div className="col-sm-2 border"><Nav /></div>
            { showMain && <div className={`col-sm-5 border`}><List items={items} /></div> }
            { showSidebar && <div className={`col-sm-5 border`}><Sidebar /></div> }          
            { store.isItem && <div className={`col-sm-5 border`}><Item item={item} /></div> }
        </div>
        </>
    )
})

export async function getStaticPaths() {
    return {
        paths: [
          ],
        fallback: 'blocking'
    };
}

export async function getStaticProps({params}) {
    const props = {
        type: null,
        item: null,
        items: []        
    }
    //const data = await fetchData()
    const data = testData()
    props.items = data.map(item => {
        return {
            type: item.type,
            slug: item.slug,
            title: item.title
        }
    })

    const slug = params.slug || ['']

    if (slug.length == 1) props.type = slug[0]
    if (slug.length == 2) {
        // get item from slug
        props.item = data.find(i => i.slug == slug[1]) || {slug: slug[1], title: 'Item not found', content: ''}
    }
    return {
      props,
      revalidate: 1
    }
}

export default SPA 
