import type { PolicyData } from '../../appTypes';

export const generateTermsOfService = (data: PolicyData, lang: string = 'en'): string => {
    const date = data.date || new Date().toISOString().split('T')[0];

    if (lang === 'es') {
        return `
Términos de Servicio de ${data.companyName || data.websiteName}

Fecha de vigencia: ${date}

Bienvenido a ${data.websiteName}. Al acceder o utilizar nuestro servicio, usted acepta estar sujeto a estos Términos de Servicio.

1. Aceptación de los Términos

Al utilizar ${data.websiteName} ("Servicio"), usted acepta cumplir con estos Términos de Servicio ("Términos"). Si no está de acuerdo con estos Términos, no utilice el Servicio.

2. Descripción del Servicio

${data.companyName} proporciona ${data.websiteName}, accesible en ${data.websiteUrl}. El Servicio se proporciona "tal cual" y "según disponibilidad".

3. Cuentas de Usuario

Usted es responsable de mantener la confidencialidad de su cuenta y contraseña. Acepta la responsabilidad de todas las actividades que ocurran bajo su cuenta.

4. Uso Aceptable

Usted acepta no:
* Violar cualquier ley o regulación aplicable
* Infringir los derechos de propiedad intelectual de otros
* Transmitir material dañino, ofensivo o ilegal
* Intentar acceso no autorizado al Servicio
* Interferir con la operación del Servicio

5. Propiedad Intelectual

Todo el contenido, características y funcionalidad del Servicio son propiedad de ${data.companyName} y están protegidos por las leyes de propiedad intelectual de ${data.country}.

6. Limitación de Responsabilidad

En la medida permitida por la ley, ${data.companyName} no será responsable de ningún daño indirecto, incidental, especial, consecuencial o punitivo.

7. Modificaciones

Nos reservamos el derecho de modificar estos Términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación. El uso continuado del Servicio constituye la aceptación de los Términos modificados.

8. Ley Aplicable

Estos Términos se rigen por las leyes de ${data.country}.

9. Contacto

Si tiene preguntas sobre estos Términos de Servicio, contáctenos:

* Por correo electrónico: ${data.contactEmail}
`;
    }

    return `
Terms of Service for ${data.companyName || data.websiteName}

Effective Date: ${date}

Welcome to ${data.websiteName}. By accessing or using our service, you agree to be bound by these Terms of Service.

1. Acceptance of Terms

By using ${data.websiteName} ("Service"), you agree to comply with these Terms of Service ("Terms"). If you do not agree with these Terms, do not use the Service.

2. Description of Service

${data.companyName} provides ${data.websiteName}, accessible at ${data.websiteUrl}. The Service is provided on an "as is" and "as available" basis.

3. User Accounts

You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.

4. Acceptable Use

You agree not to:
* Violate any applicable law or regulation
* Infringe on the intellectual property rights of others
* Transmit harmful, offensive, or unlawful material
* Attempt unauthorized access to the Service
* Interfere with the operation of the Service

5. Intellectual Property

All content, features, and functionality of the Service are owned by ${data.companyName} and are protected by the intellectual property laws of ${data.country}.

6. Limitation of Liability

To the maximum extent permitted by law, ${data.companyName} shall not be liable for any indirect, incidental, special, consequential, or punitive damages.

7. Modifications

We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of the Service constitutes acceptance of the modified Terms.

8. Governing Law

These Terms shall be governed by the laws of ${data.country}.

9. Contact Us

If you have any questions about these Terms of Service, please contact us:

* By email: ${data.contactEmail}
`;
};
