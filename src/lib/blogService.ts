import { supabase } from './supabase'

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

// In-memory cache to avoid redundant fetches during navigation
let cachedPosts: BlogPost[] | null = null
let cacheTimestamp = 0
const CACHE_TTL = 5 * 60 * 1000 // 5 minutes

function isCacheValid(): boolean {
    return cachedPosts !== null && (Date.now() - cacheTimestamp) < CACHE_TTL
}

/**
 * Fetch all blog posts, ordered by date descending.
 */
export async function getAllPosts(): Promise<BlogPost[]> {
    if (isCacheValid()) {
        return cachedPosts!
    }

    if (!supabase) {
        return []
    }

    try {
        const { data, error } = await supabase
            .from('blog_posts')
            .select('slug, title, excerpt, date, content')
            .order('date', { ascending: false })

        if (error) throw error

        if (data && data.length > 0) {
            cachedPosts = data as BlogPost[]
            cacheTimestamp = Date.now()
            return cachedPosts
        }

        return []
    } catch (err) {
        console.warn('Failed to fetch blog posts from Supabase:', err)
        return []
    }
}

/**
 * Fetch a single blog post by slug.
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
    // Check cache first
    if (isCacheValid()) {
        return cachedPosts!.find(p => p.slug === slug) || null
    }

    if (!supabase) {
        return null
    }

    try {
        const { data, error } = await supabase
            .from('blog_posts')
            .select('slug, title, excerpt, date, content')
            .eq('slug', slug)
            .single()

        if (error) throw error

        return data as BlogPost
    } catch (err) {
        console.warn(`Failed to fetch post "${slug}" from Supabase:`, err)
        return null
    }
}
