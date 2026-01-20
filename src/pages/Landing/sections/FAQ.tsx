import { useState } from 'react'

function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const faqs = [
        { q: 'What is Didactio?', a: 'Didactio is an AI-powered platform that helps educators create professional course syllabi and learning materials in minutes.' },
        { q: 'How does Didactio differ from other tools?', a: 'Didactio combines multiple AI models with pedagogical expertise to generate structured, high-quality educational content tailored to your needs.' },
        { q: 'What should I use Didactio for?', a: 'Use Didactio to create course outlines, learning objectives, module structures, and comprehensive syllabi for any subject or educational level.' },
        { q: 'Is Didactio suitable for my subject area?', a: 'Yes! Didactio works across all disciplines, from STEM to humanities, arts, and professional development courses.' },
        { q: 'Can I edit the generated syllabus?', a: 'Absolutely. All generated content is fully editable, allowing you to customize and refine the materials to your exact specifications.' },
        { q: 'What content types can Didactio generate?', a: 'Didactio can generate course overviews, learning objectives, module breakdowns, assessments, and recommended resources.' },
        { q: 'How long is a typical generated syllabus?', a: 'The length varies based on your requirements, but typically includes a comprehensive overview with multiple modules and detailed learning objectives.' },
        { q: 'Does Didactio support multiple languages?', a: 'Yes, Didactio can generate content in multiple languages to serve educators and students worldwide.' },
    ]

    return (
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-1/3">
                        <h2 className="font-sora font-bold text-3xl text-dark mb-4">
                            Frequently asked questions
                        </h2>
                        <img
                            src="/assets/props/faq-prop.png"
                            alt=""
                            className="w-48 h-48 object-contain"
                        />
                    </div>

                    <div className="lg:w-2/3 space-y-3">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-secondary/30 rounded-xl overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                                >
                                    <span className="font-inter font-medium text-dark">{faq.q}</span>
                                    <img
                                        src="/assets/icons/angle-down-solid-full 1.png"
                                        alt=""
                                        className={`w-4 h-4 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                {openIndex === index && (
                                    <div className="px-6 pb-4">
                                        <p className="font-inter text-sm text-dark/70">{faq.a}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ
