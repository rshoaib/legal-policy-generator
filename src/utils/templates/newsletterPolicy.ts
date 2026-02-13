import type { PolicyData } from '../../appTypes';

export const generateNewsletterPolicy = (data: PolicyData, lang: string = 'en'): string => {
    if (lang === 'es') {
        return `
POLÍTICA DE SUSCRIPCIÓN A NEWSLETTER

Fecha: ${data.date}

Esta política describe cómo ${data.companyName} gestiona su suscripción a nuestro boletín de noticias (newsletter).

1. Consentimiento

Al suscribirse a nuestro boletín, usted acepta recibir correos electrónicos de nuestra parte. La suscripción es completamente voluntaria.

2. Información Recopilada

Solo recopilamos su dirección de correo electrónico y, opcionalmente, su nombre, con el único propósito de enviarle el boletín.

3. Uso de la Información

Su información se utiliza exclusivamente para enviarle noticias, actualizaciones, promociones e información relevante sobre nuestros servicios. No vendemos ni compartimos su correo electrónico con terceros con fines de marketing.

4. Frecuencia

Enviaremos boletines periódicamente. Nos esforzamos por no saturar su bandeja de entrada.

5. Cancelación de Suscripción

Puede cancelar su suscripción en cualquier momento haciendo clic en el enlace "Darse de baja" o "Unsubscribe" que aparece al pie de cada correo electrónico, o contactándonos directamente.

6. Privacidad

Su información se maneja de acuerdo con nuestra Política de Privacidad general.

7. Contacto

Si tiene problemas con su suscripción, contáctenos en: ${data.contactEmail}
`;
    }

    // Default to English
    return `
NEWSLETTER SUBSCRIPTION POLICY

Date: ${data.date}

This policy outlines how ${data.companyName} manages your subscription to our newsletter.

1. Consent

By subscribing to our newsletter, you agree to receive emails from us. Subscription is completely voluntary.

2. Information Collected

We only collect your email address and, optionally, your name, for the sole purpose of sending you the newsletter.

3. Use of Information

Your information is used exclusively to send you news, updates, promotions, and relevant information about our services. We do not sell or share your email with third parties for marketing purposes.

4. Frequency

We will send newsletters periodically. We strive not to clutter your inbox.

5. Unsubscribing

You may unsubscribe at any time by clicking the "Unsubscribe" link at the bottom of every email, or by contacting us directly.

6. Privacy

Your information is handled in accordance with our general Privacy Policy.

7. Contact

If you have issues with your subscription, please contact us at: ${data.contactEmail}
`;
};
