import { promises as fs } from 'fs'
import path from 'path'

export default async function fetchData() {
    const filePath = path.join(process.cwd(), 'data/SPA/items.json')
    const fileContents = await fs.readFile(filePath, 'utf8')
    return JSON.parse(fileContents)
}