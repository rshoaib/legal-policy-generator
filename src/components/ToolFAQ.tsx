'use client'
import React, { useState } from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface ToolFAQProps {
  faqs: FAQItem[];
  title?: string;
}

/**
 * Reusable accordion FAQ component with FAQPage JSON-LD schema.
 * Drop into any generator page to add rich-results–eligible Q&A.
 */
export const ToolFAQ: React.FC<ToolFAQProps> = ({ faqs, title = 'Frequently Asked Questions' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(prev => (prev === i ? null : i));

  /* Generate FAQPage JSON-LD automatically from the faqs array */
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  return (
    <section className="tool-faq" style={{ marginBottom: '3rem' }}>
      {/* JSON-LD injected once */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <h2 className="text-gradient tool-faq__title">{title}</h2>

      <div className="tool-faq__list">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} className={`tool-faq__item ${isOpen ? 'tool-faq__item--open' : ''}`}>
              <button
                className="tool-faq__question"
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                id={`faq-q-${i}`}
                aria-controls={`faq-a-${i}`}
              >
                <span>{faq.question}</span>
                <span className="tool-faq__chevron">{isOpen ? '−' : '+'}</span>
              </button>
              <div
                className="tool-faq__answer"
                id={`faq-a-${i}`}
                role="region"
                aria-labelledby={`faq-q-${i}`}
                style={{
                  maxHeight: isOpen ? '600px' : '0',
                  opacity: isOpen ? 1 : 0,
                  paddingTop: isOpen ? '1rem' : '0',
                  paddingBottom: isOpen ? '1.25rem' : '0',
                }}
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
