import type { PolicyData } from '../../appTypes';

export const generateAUP = (data: PolicyData, lang: string = 'en'): string => {
    if (lang === 'es') {
        return `
POLÍTICA DE USO ACEPTABLE

Última actualización: ${data.date}

Esta Política de Uso Aceptable ("Política") describe las actividades prohibidas en relación con el uso de los servicios ofrecidos por ${data.companyName} ("Compañía") a través del sitio web ${data.websiteUrl} (el "Servicio").

1. Uso Prohibido

Usted acepta no utilizar el Servicio para:
a) Violar cualquier ley, reglamento u ordenanza aplicable.
b) Infringir los derechos de propiedad intelectual de otros.
c) Transmitir cualquier material que sea acosador, difamatorio, fraudulento o obsceno.
d) Distribuir virus, malware o cualquier otro código informático dañino.
e) Participar en actividades que interfieran con o interrumpan el Servicio.

2. Seguridad del Sistema y de la Red

Están prohibidas las violaciones de la seguridad del sistema o de la red, y pueden dar lugar a responsabilidad penal y civil. La Compañía investigará los incidentes que involucren tales violaciones.

3. Correo No Deseado (Spam)

Usted no puede utilizar el Servicio para transmitir correo electrónico no solicitado, masivo o comercial (Spam).

4. Suspensión y Terminación

La Compañía se reserva el derecho de suspender o terminar su acceso al Servicio si determina, a su sola discreción, que usted ha violado esta Política.

5. Reporte de Violaciones

Por favor reporte cualquier violación de esta Política a: ${data.contactEmail}
`;
    }

    // Default to English
    return `
ACCEPTABLE USE POLICY

Last updated: ${data.date}

This Acceptable Use Policy ("Policy") outlines prohibited activities in connection with the use of the services offered by ${data.companyName} ("Company") via the website ${data.websiteUrl} (the "Service").

1. Prohibited Use

You agree not to use the Service to:
a) Violate any applicable law, regulation, or ordinance.
b) Infringe upon the intellectual property rights of others.
c) Transmit any material that is harassing, defamatory, fraudulent, or obscene.
d) Distribute viruses, malware, or any other harmful computer code.
e) Engage in any activity that interferes with or disrupts the Service.

2. System and Network Security

Violations of system or network security are prohibited, and may result in criminal and civil liability. The Company will investigate incidents involving such violations.

3. Spam

You may not use the Service to transmit unsolicited, bulk, or commercial email (Spam).

4. Suspension and Termination

The Company reserves the right to suspend or terminate your access to the Service if it determines, in its sole discretion, that you have violated this Policy.

5. Reporting Violations

Please report any violations of this Policy to: ${data.contactEmail}
`;
};
