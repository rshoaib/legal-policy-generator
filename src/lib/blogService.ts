import 'server-only'
import fs from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'

export interface BlogPost {
    id?: string
    slug: string
    title: string
    excerpt: string
    content: string
    date: string
    author?: string
    category?: string
    image?: string
}

const POSTS_DIR = path.join(process.cwd(), 'content', 'blog')

let cachedPosts: BlogPost[] | null = null

async function loadAllFromDisk(): Promise<BlogPost[]> {
    let entries: string[]
    try {
        entries = await fs.readdir(POSTS_DIR)
    } catch (err) {
        console.warn(`Blog content directory not found at ${POSTS_DIR}:`, err)
        return []
    }

    const files = entries.filter(name => name.endsWith('.md'))

    const posts = await Promise.all(
        files.map(async (file): Promise<BlogPost | null> => {
            const filePath = path.join(POSTS_DIR, file)
            const raw = await fs.readFile(filePath, 'utf8')
            const { data, content } = matter(raw)

            const slug = (data.slug as string) || file.replace(/\.md$/, '')
            const title = data.title as string | undefined
            const date = data.date as string | undefined
            const excerpt = (data.excerpt as string) || ''

            if (!title || !date) {
                console.warn(`Skipping ${file}: missing title or date in frontmatter.`)
                return null
            }

            return {
                slug,
                title,
                date,
                excerpt,
                content: content.trim(),
                ...(data.author ? { author: data.author as string } : {}),
                ...(data.category ? { category: data.category as string } : {}),
                ...(data.image ? { image: data.image as string } : {}),
            }
        }),
    )

    return posts
        .filter((p): p is BlogPost => p !== null)
        .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
}

export async function getAllPosts(): Promise<BlogPost[]> {
    if (cachedPosts) return cachedPosts
    cachedPosts = await loadAllFromDisk()
    return cachedPosts
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
    const posts = await getAllPosts()
    return posts.find(p => p.slug === slug) ?? null
}
