import type { PolicyData } from '../../appTypes';

export const generateEULA = (data: PolicyData, lang: string = 'en'): string => {
    const licenseType = data.eulaLicenseType || 'single-user';
    const subscriptionBased = data.eulaSubscription || false;

    if (lang === 'es') {
        return `
CONTRATO DE LICENCIA DE USUARIO FINAL (EULA)

Última actualización: ${data.date}

Este Contrato de Licencia de Usuario Final ("Contrato") es un acuerdo legal entre usted ("Usuario") y ${data.companyName} ("Licenciante"), que rige su uso del software, la aplicación o el servicio proporcionado en ${data.websiteUrl} ("${data.websiteName}").

Al instalar, acceder o usar el Software, usted acepta estar sujeto a los términos de este Contrato. Si no está de acuerdo, no use el Software.

1. OTORGAMIENTO DE LICENCIA

${licenseType === 'single-user'
                ? 'Se le otorga una licencia personal, no transferible, no exclusiva para usar el Software en un solo dispositivo de su propiedad o bajo su control.'
                : licenseType === 'multi-user'
                    ? 'Se le otorga una licencia no exclusiva, no transferible para instalar y usar el Software en múltiples dispositivos dentro de su organización.'
                    : 'Se le otorga una licencia no exclusiva, no transferible para usar el Software como un servicio a través de internet.'}

2. RESTRICCIONES

Usted no podrá:
a) Copiar, modificar o distribuir el Software sin autorización previa por escrito;
b) Realizar ingeniería inversa, descompilar o desensamblar el Software;
c) Alquilar, arrendar, prestar o sublicenciar el Software a terceros;
d) Usar el Software para fines ilegales o no autorizados;
e) Eliminar avisos de propiedad, etiquetas o marcas del Software.

3. PROPIEDAD INTELECTUAL

El Software y todo el contenido, características y funcionalidad relacionados son propiedad de ${data.companyName} y están protegidos por leyes de derechos de autor, marcas registradas y otras leyes de propiedad intelectual de ${data.country}.

4. ${subscriptionBased ? 'SUSCRIPCIÓN Y PAGO' : 'PLAZO'}

${subscriptionBased
                ? `El acceso al Software requiere una suscripción activa. Las tarifas de suscripción se cobran según el plan seleccionado. El incumplimiento de pago puede resultar en la suspensión o terminación del acceso.

El Licenciante se reserva el derecho de cambiar los precios de suscripción con previo aviso. Los cambios de precio entrarán en vigencia al inicio del siguiente período de facturación.`
                : `Esta licencia es efectiva hasta que sea terminada. Usted puede terminar este Contrato en cualquier momento dejando de usar y destruyendo todas las copias del Software.`}

5. EXENCIÓN DE GARANTÍAS

EL SOFTWARE SE PROPORCIONA "TAL CUAL" Y "SEGÚN DISPONIBILIDAD", SIN GARANTÍAS DE NINGÚN TIPO, YA SEAN EXPRESAS O IMPLÍCITAS. ${data.companyName} NO GARANTIZA QUE EL SOFTWARE SERÁ ININTERRUMPIDO, LIBRE DE ERRORES O SEGURO.

6. LIMITACIÓN DE RESPONSABILIDAD

EN NINGÚN CASO ${data.companyName.toUpperCase()} SERÁ RESPONSABLE POR DAÑOS INDIRECTOS, INCIDENTALES, ESPECIALES, CONSECUENTES O PUNITIVOS, INCLUYENDO PÉRDIDA DE DATOS, BENEFICIOS O INTERRUPCIÓN DE NEGOCIO.

7. ACTUALIZACIONES Y MODIFICACIONES

${data.companyName} puede proporcionar actualizaciones, mejoras o modificaciones al Software a su discreción. Tales actualizaciones pueden ser obligatorias y pueden cambiar la funcionalidad del Software.

8. TERMINACIÓN

${data.companyName} puede terminar esta licencia en cualquier momento si usted viola cualquier término de este Contrato. Tras la terminación, debe cesar todo uso del Software y destruir todas las copias.

9. LEY APLICABLE

Este Contrato se regirá por las leyes de ${data.country}, sin tener en cuenta los principios de conflictos de leyes.

10. CONTACTO

Para preguntas sobre este EULA, contáctenos en:
${data.companyName}
${data.companyAddress}
Email: ${data.contactEmail}
`;
    }

    // Default to English
    return `
END USER LICENSE AGREEMENT (EULA)

Last Updated: ${data.date}

This End User License Agreement ("Agreement") is a legal agreement between you ("User") and ${data.companyName} ("Licensor"), governing your use of the software, application, or service provided at ${data.websiteUrl} ("${data.websiteName}").

By installing, accessing, or using the Software, you agree to be bound by the terms of this Agreement. If you do not agree, do not use the Software.

1. GRANT OF LICENSE

${licenseType === 'single-user'
            ? 'You are granted a personal, non-transferable, non-exclusive license to use the Software on a single device owned or controlled by you.'
            : licenseType === 'multi-user'
                ? 'You are granted a non-exclusive, non-transferable license to install and use the Software on multiple devices within your organization.'
                : 'You are granted a non-exclusive, non-transferable license to access and use the Software as a service delivered over the internet (SaaS).'}

2. RESTRICTIONS

You shall not:
a) Copy, modify, or distribute the Software without prior written authorization;
b) Reverse engineer, decompile, or disassemble the Software;
c) Rent, lease, lend, or sublicense the Software to any third party;
d) Use the Software for any illegal or unauthorized purpose;
e) Remove any proprietary notices, labels, or marks from the Software.

3. INTELLECTUAL PROPERTY

The Software and all related content, features, and functionality are owned by ${data.companyName} and are protected by copyright, trademark, and other intellectual property laws of ${data.country}.

4. ${subscriptionBased ? 'SUBSCRIPTION AND PAYMENT' : 'TERM'}

${subscriptionBased
            ? `Access to the Software requires an active subscription. Subscription fees are charged based on the plan you select. Failure to pay may result in suspension or termination of access.

The Licensor reserves the right to change subscription pricing with prior notice. Pricing changes will take effect at the start of the next billing cycle.`
            : `This license is effective until terminated. You may terminate this Agreement at any time by ceasing to use and destroying all copies of the Software.`}

5. DISCLAIMER OF WARRANTIES

THE SOFTWARE IS PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. ${data.companyName} DOES NOT WARRANT THAT THE SOFTWARE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.

6. LIMITATION OF LIABILITY

IN NO EVENT SHALL ${data.companyName.toUpperCase()} BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF DATA, PROFITS, OR BUSINESS INTERRUPTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OF THE SOFTWARE.

7. UPDATES AND MODIFICATIONS

${data.companyName} may provide updates, enhancements, or modifications to the Software at its sole discretion. Such updates may be mandatory and may change the functionality of the Software.

8. TERMINATION

${data.companyName} may terminate this license at any time if you breach any term of this Agreement. Upon termination, you must cease all use of the Software and destroy all copies in your possession.

9. GOVERNING LAW

This Agreement shall be governed by and construed in accordance with the laws of ${data.country}, without regard to its conflict of law principles.

10. CONTACT INFORMATION

For questions about this EULA, please contact us at:
${data.companyName}
${data.companyAddress}
Email: ${data.contactEmail}
`;
};
