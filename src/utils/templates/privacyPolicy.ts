import type { PolicyData } from '../../appTypes';

export const generatePrivacyPolicy = (data: PolicyData, lang: string = 'en'): string => {
    let additionalSpanishClauses = '';
    let additionalEnglishClauses = '';
    
    if (data.privacySellData || data.privacyChildren || data.privacyGoogleAnalytics) {
        additionalSpanishClauses += `\n3. Cumplimiento Avanzado y Divulgaciones\n\n`;
        additionalEnglishClauses += `\n3. Advanced Compliance and Disclosures\n\n`;
        
        if (data.privacyGoogleAnalytics) {
            additionalSpanishClauses += `Rastreo y Análisis de Terceros\nUtilizamos Proveedores de Servicios externos, como Google Analytics, para monitorear y analizar el uso de nuestro Servicio. Estas partes tienen acceso a Sus Datos Personales solo para realizar estas tareas en Nuestro nombre y están obligadas a no divulgarlos ni utilizarlos para ningún otro propósito.\n\n`;
            additionalEnglishClauses += `Third-Party Tracking and Analytics\nWe use third-party Service Providers such as Google Analytics to monitor and analyze the use of our Service. These parties have access to Your Personal Data only to perform these tasks on Our behalf and are obligated not to disclose or use it for any other purpose.\n\n`;
        }
        
        if (data.privacySellData) {
            additionalSpanishClauses += `Aviso de Privacidad de CCPA/CPRA (No Vender Mi Información Personal)\nSegún la Ley de Privacidad del Consumidor de California (CCPA) y la CPRA, los residentes de California tienen derecho a optar por no "vender" o "compartir" su información personal. Si desea ejercer este derecho, contáctenos.\n\n`;
            additionalEnglishClauses += `CCPA/CPRA Privacy Notice (Do Not Sell My Personal Information)\nUnder the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA), California residents have the right to opt-out of the "sale" or "sharing" of their personal information. If You wish to exercise this right, please contact us.\n\n`;
        }
        
        if (data.privacyChildren) {
            additionalSpanishClauses += `Privacidad de los Menores (COPPA)\nNuestro Servicio no está dirigido a menores de 13 años. No recopilamos a sabiendas información de identificación personal de menores de 13 años. Si Nos damos cuenta de que hemos recopilado Datos Personales de un menor de 13 años, tomamos medidas para eliminar esa información.\n\n`;
            additionalEnglishClauses += `Children's Privacy (COPPA)\nOur Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.\n\n`;
        }
    }

    if (lang === 'es') {
        return `
Política de Privacidad de ${data.websiteName}

Última actualización: ${data.date}

Esta Política de Privacidad describe Nuestras políticas y procedimientos sobre la recopilación, uso y divulgación de Su información cuando Usted utiliza el Servicio y le informa sobre Sus derechos de privacidad y cómo la ley le protege.

Utilizamos Sus datos Personales para proporcionar y mejorar el Servicio. Al utilizar el Servicio, Usted acepta la recopilación y el uso de información de acuerdo con esta Política de Privacidad.

1. Interpretación y Definiciones

Interpretación
Las palabras de las cuales la letra inicial está en mayúscula tienen significados definidos bajo las siguientes condiciones. Las siguientes definiciones tendrán el mismo significado independientemente de si aparecen en singular o en plural.

Definiciones
A los efectos de esta Política de Privacidad:

* Cuenta significa una cuenta única creada para que Usted acceda a nuestro Servicio o partes de nuestro Servicio.
* Empresa (referida como "la Empresa", "Nosotros", "Nos" o "Nuestro" en este Acuerdo) se refiere a ${data.companyName}, ubicada en ${data.country}.
* Servicio se refiere al Sitio Web.
* Sitio Web se refiere a ${data.websiteName}, accesible desde ${data.websiteUrl}
* Usted significa la persona que accede o utiliza el Servicio, o la empresa, u otra entidad legal en nombre de la cual dicha persona accede o utiliza el Servicio, según corresponda.

2. Recopilación y Uso de Sus Datos Personales

Tipos de Datos Recopilados

Datos Personales
Mientras utiliza Nuestro Servicio, es posible que le pidamos que Nos proporcione cierta información de identificación personal que se puede utilizar para contactarlo o identificarlo. La información de identificación personal puede incluir, pero no se limita a:

* Dirección de correo electrónico
* Nombre y apellido
* Datos de uso
${additionalSpanishClauses}
${additionalSpanishClauses ? '4.' : '3.'} Contáctenos

Si tiene alguna pregunta sobre esta Política de Privacidad, puede contactarnos:

* Por correo electrónico: ${data.contactEmail}
`;
    }

    // Default to English
    return `
Privacy Policy for ${data.websiteName}

Last updated: ${data.date}

This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.

We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.

1. Interpretation and Definitions

Interpretation
The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.

Definitions
For the purposes of this Privacy Policy:

* Account means a unique account created for You to access our Service or parts of our Service.
* Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to ${data.companyName}, located in ${data.country}.
* Service refers to the Website.
* Website refers to ${data.websiteName}, accessible from ${data.websiteUrl}
* You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.

2. Collecting and Using Your Personal Data

Types of Data Collected

Personal Data
While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:

* Email address
* First name and last name
* Usage Data
${additionalEnglishClauses}
${additionalEnglishClauses ? '4.' : '3.'} Contact Us

If you have any questions about this Privacy Policy, You can contact us:

* By email: ${data.contactEmail}
`;
};
