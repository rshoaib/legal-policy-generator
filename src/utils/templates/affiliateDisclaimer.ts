import type { PolicyData } from '../../appTypes';

export const generateAffiliateDisclaimer = (data: PolicyData, lang: string = 'en'): string => {
    if (lang === 'es') {
        return `
DIVULGACIÓN DE AFILIADOS

Fecha: ${data.date}

${data.companyName} participa en varios programas de marketing de afiliados, lo que significa que podemos recibir comisiones por las compras realizadas a través de nuestros enlaces a sitios de minoristas.

1. Cómo Funciona

Cuando usted hace clic en enlaces a varios comerciantes en este sitio y realiza una compra, esto puede resultar en que este sitio gane una comisión. Los programas de afiliados y las afiliaciones incluyen, entre otros, el Programa de Asociados de Amazon.

2. Integridad Editorial

Nuestras recomendaciones y análisis son independientes y se basan en nuestra propia investigación y análisis. La compensación recibida a través de enlaces de afiliados no influye en nuestro contenido editorial.

3. Transparencia

Nos esforzamos por ser transparentes sobre nuestras relaciones de afiliados. Asuma que cualquier enlace que conduzca a un producto o servicio es un enlace de afiliado.

4. Costo para Usted

El uso de enlaces de afiliados no tiene ningún costo adicional para usted. El precio que paga es el mismo si utiliza nuestro enlace de afiliado o si va directamente al sitio del vendedor.

5. Contacto

Si tiene alguna pregunta sobre nuestra divulgación de afiliados, por favor contáctenos en: ${data.contactEmail}
`;
    }

    // Default to English
    return `
AFFILIATE DISCLOSURE

Date: ${data.date}

${data.companyName} participates in various affiliate marketing programs, which means we may get paid commissions on purchases made through our links to retailer sites.

1. How It Works

When you click on links to various merchants on this site and make a purchase, this can result in this site earning a commission. Affiliate programs and affiliations include, but are not limited to, the Amazon Associates Program.

2. Editorial Integrity

Our recommendations and reviews are independent and based on our own research and analysis. Compensation received through affiliate links does not influence our editorial content.

3. Transparency

We strive to be transparent about our affiliate relationships. You should assume that any link leading to a product or service is an affiliate link.

4. Cost to You

Using affiliate links comes at no extra cost to you. The price you pay is the same whether you use our affiliate link or go directly to the vendor's site.

5. Contact

If you have any questions regarding our affiliate disclosure, please contact us at: ${data.contactEmail}
`;
};
