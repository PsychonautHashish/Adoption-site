import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import '../styles/styles.css';

const FAQ_DATA = [
  {
    question: "Who can adopt a child?",
    answer: "Any individual or couple meeting legal requirements..."
  },
  {
    question: "How long does the process take?",
    answer: "Typically 6-12 months depending on various factors..."
  },
  {
    question: "What support is provided post-adoption?",
    answer: "We offer counseling, resources, and community support..."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Frequently Asked Questions</h1>
      
      <div className="faq-container">
        {FAQ_DATA.map((faq, index) => (
          <div 
            key={index} 
            className={`glass-card faq-item ${activeIndex === index ? 'active' : ''}`}
          >
            <div 
              className="faq-question" 
              onClick={() => toggleFAQ(index)}
            >
              <h3>{faq.question}</h3>
              {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}