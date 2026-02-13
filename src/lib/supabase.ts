import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string

function isValidUrl(url: string): boolean {
    try {
        const parsed = new URL(url)
        return parsed.protocol === 'http:' || parsed.protocol === 'https:'
    } catch {
        return false
    }
}

function createSupabaseClient(): SupabaseClient | null {
    if (!supabaseUrl || !supabaseAnonKey || !isValidUrl(supabaseUrl)) {
        console.warn('Supabase credentials not configured. Blog will use local fallback data.')
        return null
    }

    try {
        return createClient(supabaseUrl, supabaseAnonKey)
    } catch (err) {
        console.warn('Failed to initialize Supabase client. Blog will use local fallback data.', err)
        return null
    }
}

export const supabase = createSupabaseClient()
