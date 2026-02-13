import type { PolicyData } from '../../appTypes';

export const generateEmployeePrivacy = (data: PolicyData, lang: string = 'en'): string => {
    if (lang === 'es') {
        return `
POLÍTICA DE PRIVACIDAD PARA EMPLEADOS

Fecha: ${data.date}

Esta Política de Privacidad para Empleados explica cómo ${data.companyName} ("Compañía") recopila, utiliza y protege la información personal de sus empleados y candidatos.

1. Información que Recopilamos

Podemos recopilar los siguientes tipos de información personal:
- Información de contacto (nombre, dirección, email, teléfono).
- Información de empleo (CV, historial laboral, referencias).
- Información financiera (cuenta bancaria para nómina, número de seguridad social).
- Datos de desempeño y evaluaciones.

2. Uso de la Información

Utilizamos su información personal para:
- Procesar nóminas y beneficios.
- Gestionar el desempeño y desarrollo profesional.
- Cumplir con obligaciones legales y regulatorias.
- Mantener la seguridad en el lugar de trabajo.

3. Seguridad de los Datos

Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra acceso no autorizado, pérdida o alteración.

4. Compartir Información

Solo compartimos su información con terceros cuando es necesario para la administración de beneficios, el procesamiento de nóminas o cuando lo exige la ley.

5. Sus Derechos

Usted tiene derecho a acceder, corregir o eliminar su información personal, sujeto a ciertas excepciones legales.

6. Contacto

Si tiene preguntas sobre esta política, contacte a Recursos Humanos en: ${data.contactEmail}
`;
    }

    // Default to English
    return `
EMPLOYEE PRIVACY POLICY

Date: ${data.date}

This Employee Privacy Policy explains how ${data.companyName} ("Company") collects, uses, and protects the personal information of its employees and candidates.

1. Information We Collect

We may collect the following types of personal information:
- Contact information (name, address, email, phone).
- Employment information (resume, work history, references).
- Financial information (bank account for payroll, social security number).
- Performance data and evaluations.

2. How We Use Information

We use your personal information to:
- Process payroll and benefits.
- Manage performance and professional development.
- Comply with legal and regulatory obligations.
- Maintain workplace security.

3. Data Security

We implement technical and organizational security measures to protect your personal information against unauthorized access, loss, or alteration.

4. Sharing Information

We only share your information with third parties when necessary for benefits administration, payroll processing, or as required by law.

5. Your Rights

You have the right to access, correct, or delete your personal information, subject to certain legal exceptions.

6. Contact

If you have questions about this policy, please contact Human Resources at: ${data.contactEmail}
`;
};
