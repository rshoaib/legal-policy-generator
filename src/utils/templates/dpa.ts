import type { PolicyData } from '../../appTypes';

export const generateDPA = (data: PolicyData, lang: string = 'en'): string => {
    if (lang === 'es') {
        return `
ACUERDO DE PROCESAMIENTO DE DATOS (DPA)

Fecha de vigencia: ${data.date}

Este Acuerdo de Procesamiento de Datos ("Acuerdo") se celebra entre:

Responsable de Datos: ${data.companyName}
Dirección: ${data.companyAddress}
Sitio Web: ${data.websiteUrl}
Email de contacto: ${data.contactEmail}

Y: El Encargado del Tratamiento (el "Procesador").

1. Definiciones

1.1 "Datos Personales" se refiere a cualquier información relativa a una persona física identificada o identificable.
1.2 "Tratamiento" se refiere a cualquier operación realizada sobre Datos Personales, incluyendo recopilación, almacenamiento, modificación, uso, divulgación o eliminación.
1.3 "Interesado" se refiere a la persona física cuyos Datos Personales son procesados.
1.4 "Subencargado" se refiere a cualquier tercero contratado por el Procesador para asistir en el tratamiento de Datos Personales.

2. Alcance y Propósito del Tratamiento

2.1 El Procesador tratará los Datos Personales exclusivamente en nombre del Responsable y de acuerdo con las instrucciones documentadas del mismo.
2.2 ${data.dpaDataTypes || 'Los tipos de datos tratados incluyen: nombres, direcciones de correo electrónico, direcciones IP y datos de uso.'}
2.3 ${data.dpaProcessingPurpose || 'El propósito del tratamiento es: proporcionar y mejorar los servicios ofrecidos a través del sitio web del Responsable.'}

3. Obligaciones del Procesador

3.1 El Procesador deberá:
  a) Tratar los Datos Personales solo según las instrucciones documentadas del Responsable.
  b) Garantizar que las personas autorizadas para tratar Datos Personales se hayan comprometido a la confidencialidad.
  c) Implementar medidas técnicas y organizativas apropiadas para garantizar un nivel de seguridad adecuado al riesgo.
  d) No contratar a otro procesador sin la autorización previa por escrito del Responsable.
  e) Asistir al Responsable en el cumplimiento de las solicitudes de los Interesados.
  f) Eliminar o devolver todos los Datos Personales al Responsable al finalizar los servicios.
  g) Poner a disposición del Responsable toda la información necesaria para demostrar el cumplimiento.

4. Subencargados

4.1 El Procesador no contratará a ningún Subencargado sin el consentimiento previo por escrito del Responsable.
4.2 Cuando se autorice a un Subencargado, el Procesador le impondrá las mismas obligaciones de protección de datos.

5. Transferencias Internacionales

5.1 El Procesador no transferirá Datos Personales fuera del Espacio Económico Europeo sin el consentimiento previo del Responsable y sin garantizar salvaguardas apropiadas.

6. Notificación de Violaciones de Datos

6.1 El Procesador notificará al Responsable sin demora indebida tras tener conocimiento de una violación de Datos Personales.
6.2 La notificación incluirá: la naturaleza de la violación, las categorías de datos afectados, las consecuencias probables y las medidas adoptadas.

7. Auditorías

7.1 El Procesador permitirá y contribuirá a las auditorías e inspecciones realizadas por el Responsable o un auditor designado.

8. Duración y Finalización

8.1 Este Acuerdo permanecerá en vigencia mientras el Procesador trate Datos Personales en nombre del Responsable.
8.2 A la finalización, el Procesador deberá, a elección del Responsable, eliminar o devolver todos los Datos Personales.

9. Ley Aplicable

9.1 Este Acuerdo se regirá por las leyes de ${data.country}.

FIRMAS:

Responsable de Datos: __________________________
${data.companyName}

Procesador: __________________________
`;
    }

    // Default to English
    return `
DATA PROCESSING AGREEMENT (DPA)

Effective Date: ${data.date}

This Data Processing Agreement ("Agreement") is entered into between:

Data Controller: ${data.companyName}
Address: ${data.companyAddress}
Website: ${data.websiteUrl}
Contact Email: ${data.contactEmail}

And: The Data Processor (the "Processor").

1. Definitions

1.1 "Personal Data" means any information relating to an identified or identifiable natural person.
1.2 "Processing" means any operation performed on Personal Data, including collection, storage, modification, use, disclosure, or deletion.
1.3 "Data Subject" means the natural person whose Personal Data is processed.
1.4 "Sub-processor" means any third party engaged by the Processor to assist in the processing of Personal Data.

2. Scope and Purpose of Processing

2.1 The Processor shall process Personal Data only on behalf of the Controller and in accordance with the Controller's documented instructions.
2.2 ${data.dpaDataTypes || 'Types of data processed include: names, email addresses, IP addresses, and usage data.'}
2.3 ${data.dpaProcessingPurpose || 'The purpose of processing is: to provide and improve services offered through the Controller\'s website.'}

3. Obligations of the Processor

3.1 The Processor shall:
  a) Process Personal Data only on documented instructions from the Controller.
  b) Ensure that persons authorized to process Personal Data have committed themselves to confidentiality.
  c) Implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk.
  d) Not engage another processor without prior specific written authorization of the Controller.
  e) Assist the Controller in fulfilling Data Subject access requests.
  f) Delete or return all Personal Data to the Controller after the end of the provision of services.
  g) Make available to the Controller all information necessary to demonstrate compliance.

4. Sub-processors

4.1 The Processor shall not engage any Sub-processor without prior specific written consent of the Controller.
4.2 Where a Sub-processor is authorized, the Processor shall impose the same data protection obligations on that Sub-processor.

5. International Transfers

5.1 The Processor shall not transfer Personal Data outside the European Economic Area without prior consent of the Controller and without ensuring appropriate safeguards are in place.

6. Data Breach Notification

6.1 The Processor shall notify the Controller without undue delay after becoming aware of a Personal Data breach.
6.2 Such notification shall include: the nature of the breach, categories of data affected, likely consequences, and measures taken or proposed.

7. Audits

7.1 The Processor shall make available to the Controller all information necessary to demonstrate compliance and shall allow for and contribute to audits and inspections conducted by the Controller or an appointed auditor.

8. Duration and Termination

8.1 This Agreement shall remain in effect for as long as the Processor processes Personal Data on behalf of the Controller.
8.2 Upon termination, the Processor shall, at the choice of the Controller, delete or return all Personal Data.

9. Governing Law

9.1 This Agreement shall be governed by and construed in accordance with the laws of ${data.country}.

SIGNATURES:

Data Controller: __________________________
${data.companyName}

Data Processor: __________________________
`;
};
