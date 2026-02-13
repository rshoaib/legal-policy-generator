import type { PolicyData } from '../../appTypes';

export const generateDMCA = (data: PolicyData, lang: string = 'en'): string => {
    if (lang === 'es') {
        return `
POLÍTICA DMCA (Derechos de Autor)

Fecha: ${data.date}

${data.companyName} ("Compañía") respeta los derechos de propiedad intelectual de otros. Cumplimos con la Ley de Derechos de Autor del Milenio Digital ("DMCA") y otras leyes de propiedad intelectual aplicables.

1. Notificación de Infracción

Si usted cree que su obra protegida por derechos de autor ha sido copiada de una manera que constituye una infracción de derechos de autor y es accesible a través del Servicio, por favor notifique a nuestro Agente de Derechos de Autor.

Su notificación debe incluir:
a) Una firma física o electrónica del titular de los derechos de autor.
b) Identificación de la obra protegida por derechos de autor que se alega ha sido infringida.
c) Identificación del material que se alega está infringiendo y dónde se encuentra en el Servicio.
d) Su información de contacto (dirección, teléfono, email).
e) Una declaración de que usted cree de buena fe que el uso del material no está autorizado.
f) Una declaración de que la información en la notificación es precisa.

2. Agente de Derechos de Autor

Por favor envíe las notificaciones de infracción a:

Agente DMCA
${data.companyName}
Email: ${data.contactEmail}
Dirección: ${data.companyAddress}

3. Contranotificación

Si usted cree que su material fue eliminado por error, puede enviar una contranotificación a nuestro Agente de Derechos de Autor incluyendo la información requerida por la DMCA.

4. Terminación de Reincidentes

Es política de la Compañía terminar, en circunstancias apropiadas, las cuentas de los usuarios que son infractores reincidentes.
`;
    }

    // Default to English
    return `
DMCA POLICY (Copyright)

Date: ${data.date}

${data.companyName} ("Company") respects the intellectual property rights of others. We comply with the Digital Millennium Copyright Act ("DMCA") and other applicable intellectual property laws.

1. Notification of Infringement

If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement and is accessible via the Service, please notify our Copyright Agent.

Your notification must include:
a) A physical or electronic signature of the copyright owner.
b) Identification of the copyrighted work claimed to have been infringed.
c) Identification of the material that is claimed to be infringing and where it is located on the Service.
d) Your contact information (address, phone number, email).
e) A statement that you have a good faith belief that use of the material is not authorized.
f) A statement that the information in the notification is accurate.

2. Copyright Agent

Please send notifications of infringement to:

DMCA Agent
${data.companyName}
Email: ${data.contactEmail}
Address: ${data.companyAddress}

3. Counter-Notification

If you believe your material was removed by mistake, you may submit a counter-notification to our Copyright Agent including the information required by the DMCA.

4. Termination of Repeat Infringers

It is the Company's policy to terminate, in appropriate circumstances, the accounts of users who are repeat infringers.
`;
};
