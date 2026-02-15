import { supabase } from './supabase'
import type { BlogPost } from './blogData'
export type { BlogPost }

// In-memory cache to avoid redundant fetches during navigation
let cachedPosts: BlogPost[] | null = null
let cacheTimestamp = 0
const CACHE_TTL = 5 * 60 * 1000 // 5 minutes

function isCacheValid(): boolean {
    return cachedPosts !== null && (Date.now() - cacheTimestamp) < CACHE_TTL
}

/**
 * Lazily load the 99KB local fallback only when Supabase is unavailable.
 * This keeps blogData.ts out of the initial JS bundle.
 */
async function getLocalPosts(): Promise<BlogPost[]> {
    const { blogPosts } = await import('./blogData')
    return blogPosts
}

/**
 * Fetch all blog posts, ordered by date descending.
 * Falls back to local data if Supabase is unavailable.
 */
export async function getAllPosts(): Promise<BlogPost[]> {
    if (isCacheValid()) {
        return cachedPosts!
    }

    if (!supabase) {
        return getLocalPosts()
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

        // Empty table — fall back to local data
        return getLocalPosts()
    } catch (err) {
        console.warn('Failed to fetch blog posts from Supabase, using local fallback:', err)
        return getLocalPosts()
    }
}

/**
 * Fetch a single blog post by slug.
 * Falls back to local data if Supabase is unavailable.
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
    // Check cache first
    if (isCacheValid()) {
        return cachedPosts!.find(p => p.slug === slug) || null
    }

    if (!supabase) {
        const posts = await getLocalPosts()
        return posts.find(p => p.slug === slug) || null
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
        console.warn(`Failed to fetch post "${slug}" from Supabase, using local fallback:`, err)
        const posts = await getLocalPosts()
        return posts.find(p => p.slug === slug) || null
    }
}
