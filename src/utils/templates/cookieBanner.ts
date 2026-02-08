import type { PolicyData } from '../../appTypes';

export const generateCookieBannerCode = (data: PolicyData): string => {
    // Defaults if not provided
    const position = data.bannerPosition || 'bottom';
    const bannerColor = data.bannerColor || '#2b2b2b';
    const bannerTextColor = data.bannerTextColor || '#ffffff';
    const buttonColor = data.buttonColor || '#f1d600';
    const buttonTextColor = data.buttonTextColor || '#000000';
    const bannerText = data.bannerText || 'We use cookies to improve your experience on our site.';
    const buttonText = data.buttonText || 'Got it!';

    // CSS for the banner
    let containerStyle = `
        position: fixed;
        ${position === 'top' ? 'top: 0;' : 'bottom: 0;'}
        ${position === 'bottom-right' ? 'right: 20px; bottom: 20px; max-width: 350px; border-radius: 8px;' : ''}
        ${position === 'bottom-left' ? 'left: 20px; bottom: 20px; max-width: 350px; border-radius: 8px;' : ''}
        ${(position === 'top' || position === 'bottom') ? 'left: 0; right: 0; width: 100%;' : ''}
        background-color: ${bannerColor};
        color: ${bannerTextColor};
        padding: 15px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
        z-index: 9999;
        font-family: inherit;
        font-size: 14px;
        box-sizing: border-box;
    `;

    // Minify CSS slightly by removing newlines/excess space
    containerStyle = containerStyle.replace(/\s+/g, ' ').trim();

    return `
<!-- Cookie Consent Banner by LegalPolicyGen.com -->
<div id="cookie-consent-banner" style="${containerStyle}; display: none;">
    <div style="margin-right: 15px;">
        ${bannerText}
        <a href="/privacy-policy" style="color: ${bannerTextColor}; text-decoration: underline; margin-left: 5px;">Learn more</a>
    </div>
    <button id="cookie-consent-btn" style="background-color: ${buttonColor}; color: ${buttonTextColor}; border: none; padding: 8px 15px; border-radius: 4px; cursor: pointer; font-weight: bold; white-space: nowrap;">
        ${buttonText}
    </button>
</div>

<script>
(function() {
    var banner = document.getElementById('cookie-consent-banner');
    var btn = document.getElementById('cookie-consent-btn');
    
    // Check if user has already accepted
    if (!localStorage.getItem('cookieConsent')) {
        banner.style.display = 'flex';
    }

    btn.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'true');
        banner.style.display = 'none';
    });
})();
</script>
<!-- End Cookie Consent Banner -->
`;
};
