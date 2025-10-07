'use client';

import { useState } from 'react';
import { styles, combine } from '@/styles';

interface QuestionItem {
    id: string;
    title: string;
    description: string;
    isExpanded: boolean;
    href: string;
}

const NightCharter_Vessels = () => {
    const [questions, setQuestions] = useState<QuestionItem[]>([
        {
            id: 'amadeus',
            title: 'Amadeus - built with purpose',
            description: 'A catamaran built with overnight charters in mind for your perfect escape to the islands.',
            isExpanded: true,
            href: 'https://www.faraway-yachting.com/crewed_boats/best-value-catamaran-phuket'
        },
        {
            id: 'nauti',
            title: 'Nauti By Nature - cool cruising',
            description: 'An older catamaran that has been fully rebuilt inside out in 2025 with newest electrical technology, cold aircon and huge fridge and freeze capacity for charters up to 3-4 weeks without re supplying',
            isExpanded: false,
            href: 'https://www.faraway-yachting.com/crewed_boats/sy-nauti-by-nature'
        },
        {
            id: 'mozart',
            title: 'Mozart - for the budget conscious sailors',
            description: 'Mozart is a boat with charm and wooden saloon interior from the past decade - perfect if you are looking for the cheapest overnight charter in Phuket while enjoying an amazing service ',
            isExpanded: false,
            href: 'https://www.faraway-yachting.com/crewed_boats/cruising-overnight-yacht-charter-phuket'
        },
        {
            id: 'shindig',
            title: 'Shindig - modern art',
            description: 'Shindig is a state of the art sailing catamaran, built in 2019 it has everything  modern sailing catamaran requires!',
            isExpanded: false,
            href: 'https://www.faraway-yachting.com/crewed_boats/sy-shindig-48-ft'
        }
    ]);

    const toggleQuestion = (id: string) => {
        setQuestions(prev =>
            prev.map(question =>
                question.id === id
                    ? { ...question, isExpanded: !question.isExpanded }
                    : { ...question, isExpanded: false }
            )
        );
    };

    return (
        <div>
            {/* Section Title */}
            <h3 className={combine(styles.h5, "text-zink font-bold mb-3")}>
                Our Best Overnight Charter Vessels:
            </h3>

            {/* Accordion Container */} 
            <div className="max-w-3xl">
                {questions.map((question, index) => (
                    <div key={question.id}>
                        {/* Question Header */}
                        <button
                            onClick={() => toggleQuestion(question.id)}
                            className="w-full px-6 py-4 text-left flex items-center justify-between"
                        >
                            <a href={question.href} target="_blank" rel="noopener noreferrer" className="block">
                                <h3 className={combine(
                                    "text-[#005292] font-semibold text-xl hover:text-[#d6ab62] transition-colors ",
                                    question.isExpanded ? "underline" : "hover:underline"
                                )}>
                                    {question.title}
                                </h3>
                            </a>

                            {/* Caret Icon */}
                            <div className="ml-4 flex-shrink-0">
                                <svg
                                    className={`w-5 h-5 text-[#005292] hover:text-[#d6ab62] transition-transform duration-200 ${question.isExpanded ? 'rotate-180' : 'rotate-0'
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </button>

                        {/* Answer Content */}
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${question.isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            }`}>
                            <div className="px-6 pb-4">
                                <p className={combine(styles.p3, "text-zink max-w-lg leading-relaxed")}>
                                    {question.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NightCharter_Vessels;
