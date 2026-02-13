import type { PolicyData } from '../../appTypes';

export const generateSocialMediaPolicy = (data: PolicyData, lang: string = 'en'): string => {
    if (lang === 'es') {
        return `
POLÍTICA DE REDES SOCIALES

Fecha: ${data.date}

Esta Política de Redes Sociales describe las pautas para el uso de las redes sociales por parte de los empleados y representantes de ${data.companyName} ("Compañía"), tanto a título profesional como personal cuando se haga referencia a la Compañía.

1. Uso Profesional

Al utilizar las cuentas de redes sociales de la Compañía:
- Sea respetuoso y profesional en todo momento.
- No publique información confidencial o propietaria.
- Asegúrese de que toda la información compartida sea precisa y no engañosa.
- Respete los derechos de propiedad intelectual de terceros.

2. Uso Personal

Al utilizar sus propias cuentas de redes sociales:
- Deje claro que sus opiniones son suyas y no representan las de la Compañía.
- No revele secretos comerciales ni información interna de la Compañía.
- Evite comportamientos que puedan dañar la reputación de la Compañía.

3. Conducta Prohibida

Está estrictamente prohibido:
- Acosar, intimidar o discriminar a colegas, clientes o competidores.
- Publicar comentarios difamatorios o despectivos sobre la Compañía o sus productos.

4. Monitoreo

La Compañía se reserva el derecho de monitorear su uso de los recursos de TI de la Compañía, incluido el acceso a redes sociales.

5. Violaciones

Las violaciones de esta política pueden resultar en medidas disciplinarias, hasta e incluyendo la terminación del empleo.

6. Contacto

Si tiene preguntas sobre esta política, contacte a: ${data.contactEmail}
`;
    }

    // Default to English
    return `
SOCIAL MEDIA POLICY

Date: ${data.date}

This Social Media Policy outlines guidelines for the use of social media by employees and representatives of ${data.companyName} ("Company"), both in a professional capacity and personally when referencing the Company.

1. Professional Use

When using Company social media accounts:
- Be respectful and professional at all times.
- Do not post confidential or proprietary information.
- Ensure all shared information is accurate and not misleading.
- Respect third-party intellectual property rights.

2. Personal Use

When using your own social media accounts:
- Make clear that your opinions are your own and do not represent those of the Company.
- Do not disclose trade secrets or internal Company information.
- Avoid behavior that could damage the Company's reputation.

3. Prohibited Conduct

It is strictly prohibited to:
- Harass, bully, or discriminate against colleagues, clients, or competitors.
- Post defamatory or disparaging comments about the Company or its products.

4. Monitoring

The Company reserves the right to monitor your use of Company IT resources, including access to social media.

5. Violations

Violations of this policy may result in disciplinary action, up to and including termination of employment.

6. Contact

If you have questions about this policy, please contact: ${data.contactEmail}
`;
};
