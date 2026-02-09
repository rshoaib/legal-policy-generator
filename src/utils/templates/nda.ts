import type { PolicyData } from '../../appTypes';

export const generateNDA = (data: PolicyData, lang: string = 'en'): string => {
    if (lang === 'es') {
        return `
ACUERDO DE CONFIDENCIALIDAD (NDA)

Este Acuerdo de Confidencialidad (el "Acuerdo") entra en vigencia el ${data.date}.

ENTRE: ${data.companyName} (la "Parte Divulgadora"), una empresa organizada y existente bajo las leyes de ${data.country}, con domicilio en ${data.companyAddress}.

Y: El Destinatario (la "Parte Receptora").

1. Definición de Información Confidencial
A los efectos de este Acuerdo, "Información Confidencial" incluirá toda la información o material que tenga o pueda tener valor comercial u otra utilidad en el negocio en el que la Parte Divulgadora está comprometida.

2. Obligaciones de la Parte Receptora
La Parte Receptora mantendrá la Información Confidencial en estricta confianza y no la divulgará a terceros sin el consentimiento previo por escrito de la Parte Divulgadora.

3. Exclusiones
Las obligaciones de la Parte Receptora bajo este Acuerdo no se extenderán a información que sea de conocimiento público al momento de la divulgación o que posteriormente pase al dominio público sin culpa de la Parte Receptora.

4. Plazo
Este Acuerdo permanecerá en vigencia por un período de [X] años a partir de la Fecha de Vigencia.

5. Ley Aplicable
Este Acuerdo se regirá e interpretará de acuerdo con las leyes de ${data.country}.

FIRMAS:

Parte Divulgadora: __________________________
${data.companyName}

Parte Receptora: __________________________
`;
    }

    // Default to English
    return `
NON-DISCLOSURE AGREEMENT (NDA)

This Non-Disclosure Agreement (the "Agreement") is entered into as of ${data.date}.

BETWEEN: ${data.companyName} (the "Disclosing Party"), a company organized and existing under the laws of ${data.country}, with its head office located at ${data.companyAddress}.

AND: The Recipient (the "Receiving Party").

1. Definition of Confidential Information
For purposes of this Agreement, "Confidential Information" shall include all information or material that has or could have commercial value or other utility in the business in which Disclosing Party is engaged.

2. Obligations of Receiving Party
Receiving Party shall hold and maintain the Confidential Information in strictest confidence for the sole and exclusive benefit of the Disclosing Party. Receiving Party shall carefully restrict access to Confidential Information to employees, contractors, and third parties as is reasonably required.

3. Exclusions
Receiving Party's obligations under this Agreement shall not extend to information that is publicly known at the time of disclosure or subsequently becomes publicly known through no fault of the Receiving Party.

4. Term
This Agreement shall remain in effect for a period of [X] years from the Effective Date.

5. Governing Law
This Agreement shall be governed by and construed in accordance with the laws of ${data.country}.

SIGNATURES:

Disclosing Party: __________________________
${data.companyName}

Receiving Party: __________________________
`;
};
