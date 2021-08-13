import { promises as fs } from 'fs'
import path from 'path'

export default async function fetchData() {
    const filePath = path.join(process.cwd(), 'data/SPA/items.json')
    const fileContents = await fs.readFile(filePath, 'utf8')
    return JSON.parse(fileContents)
}

// Direct return to deploy on vercel
export function testData() {
    return [
        {
            "title": "First news post",
            "slug": "first-news-post",
            "content": "First news post content. <br />First news post content. <br />First news post content. <br />First news post content. <br />",
            "type": "news"
        },
        {
            "title": "second news post",
            "slug": "second-news-post",
            "content": "second news post content. <br />second news post content. <br />second news post content. <br />second news post content. <br />",
            "type": "news"
        },
        {
            "title": "third news post",
            "slug": "third-news-post",
            "content": "third news post content. <br />third news post content. <br />third news post content. <br />third news post content. <br />",
            "type": "news"
        },
        {
            "title": "forth news post",
            "slug": "forth-news-post",
            "content": "forth news post content. <br />forth news post content. <br />forth news post content. <br />forth news post content. <br />",
            "type": "news"
        },
        {
            "title": "post5 news post",
            "slug": "post5-news-post",
            "content": "post5 news post content. <br />post5 news post content. <br />post5 news post content. <br />post5 news post content. <br />",
            "type": "news"
        },
        {
            "title": "post6 news post",
            "slug": "post6-news-post",
            "content": "post6 news post content. <br />post6 news post content. <br />post6 news post content. <br />post6 news post content. <br />",
            "type": "news"
        },
        {
            "title": "post7 news post",
            "slug": "post7-news-post",
            "content": "post7 news post content. <br />post7 news post content. <br />post7 news post content. <br />post7 news post content. <br />",
            "type": "news"
        },
        {
            "title": "post8 news post",
            "slug": "post8-news-post",
            "content": "post8 news post content. <br />post8 news post content. <br />post8 news post content. <br />post8 news post content. <br />",
            "type": "news"
        },
    
        {
            "title": "The media1 post",
            "slug": "media1-post",
            "content": "The media1 post content. <br />The media1 post content. <br />The media1 post content. <br />The media1 post content. <br />",
            "type": "media"
        },
        {
            "title": "The media2 post",
            "slug": "media2-post",
            "content": "The media2 post content. <br />The media2 post content. <br />The media2 post content. <br />The media2 post content. <br />",
            "type": "media"
        },
        {
            "title": "The media3 post",
            "slug": "media3-post",
            "content": "The media3 post content. <br />The media3 post content. <br />The media3 post content. <br />The media3 post content. <br />",
            "type": "media"
        },
        {
            "title": "The media4 post",
            "slug": "media4-post",
            "content": "The media4 post content. <br />The media4 post content. <br />The media4 post content. <br />The media4 post content. <br />",
            "type": "media"
        },
        {
            "title": "The media5 post",
            "slug": "media5-post",
            "content": "The media5 post content. <br />The media5 post content. <br />The media5 post content. <br />The media5 post content. <br />",
            "type": "media"
        },
        {
            "title": "The media6 post",
            "slug": "media6-post",
            "content": "The media6 post content. <br />The media6 post content. <br />The media6 post content. <br />The media6 post content. <br />",
            "type": "media"
        },
        {
            "title": "The media7 post",
            "slug": "media7-post",
            "content": "The media7 post content. <br />The media7 post content. <br />The media7 post content. <br />The media7 post content. <br />",
            "type": "media"
        },
    
        {
            "title": "The project1 post",
            "slug": "project1-post",
            "content": "The project1 post content. <br />The project1 post content. <br />The project1 post content. <br />The project1 post content. <br />",
            "type": "project"
        },
        {
            "title": "The project2 post",
            "slug": "project2-post",
            "content": "The project2 post content. <br />The project2 post content. <br />The project2 post content. <br />The project2 post content. <br />",
            "type": "project"
        },
        {
            "title": "The project3 post",
            "slug": "project3-post",
            "content": "The project3 post content. <br />The project3 post content. <br />The project3 post content. <br />The project3 post content. <br />",
            "type": "project"
        },
        {
            "title": "The project4 post",
            "slug": "project4-post",
            "content": "The project4 post content. <br />The project4 post content. <br />The project4 post content. <br />The project4 post content. <br />",
            "type": "project"
        },
        {
            "title": "The project5 post",
            "slug": "project5-post",
            "content": "The project5 post content. <br />The project5 post content. <br />The project5 post content. <br />The project5 post content. <br />",
            "type": "project"
        },
        {
            "title": "The project6 post",
            "slug": "project6-post",
            "content": "The project6 post content. <br />The project6 post content. <br />The project6 post content. <br />The project6 post content. <br />",
            "type": "project"
        },
        {
            "title": "The project7 post",
            "slug": "project7-post",
            "content": "The project7 post content. <br />The project7 post content. <br />The project7 post content. <br />The project7 post content. <br />",
            "type": "project"
        },
    
        {
            "title": "The social1 post",
            "slug": "social1-post",
            "content": "The social1 post content. <br />The social1 post content. <br />The social1 post content. <br />The social1 post content. <br />",
            "type": "social"
        },
        {
            "title": "The social2 post",
            "slug": "social2-post",
            "content": "The social2 post content. <br />The social2 post content. <br />The social2 post content. <br />The social2 post content. <br />",
            "type": "social"
        },
        {
            "title": "The social3 post",
            "slug": "social3-post",
            "content": "The social3 post content. <br />The social3 post content. <br />The social3 post content. <br />The social3 post content. <br />",
            "type": "social"
        },
        {
            "title": "The social4 post",
            "slug": "social4-post",
            "content": "The social4 post content. <br />The social4 post content. <br />The social4 post content. <br />The social4 post content. <br />",
            "type": "social"
        },
        {
            "title": "The social5 post",
            "slug": "social5-post",
            "content": "The social5 post content. <br />The social5 post content. <br />The social5 post content. <br />The social5 post content. <br />",
            "type": "social"
        },
        {
            "title": "The social6 post",
            "slug": "social6-post",
            "content": "The social6 post content. <br />The social6 post content. <br />The social6 post content. <br />The social6 post content. <br />",
            "type": "social"
        },
        {
            "title": "The social7 post",
            "slug": "social7-post",
            "content": "The social7 post content. <br />The social7 post content. <br />The social7 post content. <br />The social7 post content. <br />",
            "type": "social"
        }
    ]
}