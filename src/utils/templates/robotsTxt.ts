import type { PolicyData } from '../../appTypes';

export const generateRobotsTxt = (data: PolicyData): string => {
    // Default to allow all if not specified
    const userAgent = data.robotsUserAgent || '*';
    const allow = data.robotsAllow || '/';
    const disallow = data.robotsDisallow || '';
    const sitemap = data.robotsSitemap || '';

    let content = `User-agent: ${userAgent}\n`;

    // Allow paths
    if (allow) {
        const allowPaths = allow.split('\n').filter(line => line.trim() !== '');
        allowPaths.forEach(path => {
            content += `Allow: ${path.trim()}\n`;
        });
    }

    // Disallow paths
    if (disallow) {
        const disallowPaths = disallow.split('\n').filter(line => line.trim() !== '');
        disallowPaths.forEach(path => {
            content += `Disallow: ${path.trim()}\n`;
        });
    }

    // Sitemap
    if (sitemap) {
        content += `\nSitemap: ${sitemap.trim()}`;
    }

    return content;
};
