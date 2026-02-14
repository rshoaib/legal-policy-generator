import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

/* Only bundle EN + ES (primary audience) — all others loaded on demand */
import enTranslation from './locales/en/translation.json';
import esTranslation from './locales/es/translation.json';

/* Lazy loaders for secondary languages */
const lazyTranslations: Record<string, () => Promise<Record<string, string>>> = {
    fr: () => import('./locales/fr/translation.json').then(m => m.default),
    de: () => import('./locales/de/translation.json').then(m => m.default),
    pt: () => import('./locales/pt/translation.json').then(m => m.default),
    ar: () => import('./locales/ar/translation.json').then(m => m.default),
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: enTranslation },
            es: { translation: esTranslation },
        },
        fallbackLng: 'en',
        supportedLngs: ['en', 'es', 'fr', 'de', 'pt', 'ar'],
        interpolation: {
            escapeValue: false
        }
    });

/* Load secondary language bundles on demand */
i18n.on('languageChanged', async (lng: string) => {
    if (lazyTranslations[lng] && !i18n.hasResourceBundle(lng, 'translation')) {
        const translations = await lazyTranslations[lng]();
        i18n.addResourceBundle(lng, 'translation', translations);
    }
});

export default i18n;
