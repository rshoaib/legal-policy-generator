const STORAGE_KEY = 'policy_history';

export interface SavedPolicy {
    id: string;
    type: string;
    label: string;
    content: string;
    createdAt: string; // ISO date string
}

function generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

export function getHistory(): SavedPolicy[] {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return [];
        const items: SavedPolicy[] = JSON.parse(raw);
        // Sort newest first
        return items.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } catch {
        return [];
    }
}

export function savePolicy(type: string, label: string, content: string): SavedPolicy {
    const entry: SavedPolicy = {
        id: generateId(),
        type,
        label,
        content,
        createdAt: new Date().toISOString(),
    };
    const history = getHistory();
    history.unshift(entry);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
    return entry;
}

export function deletePolicy(id: string): void {
    const history = getHistory().filter((p) => p.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

export function clearHistory(): void {
    localStorage.removeItem(STORAGE_KEY);
}
