import { useState } from "react";

export default function FAQ({ question, answer } : { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full h-auto flex flex-col" onClick={() => setIsOpen(!isOpen)}>
            <div className="w-full h-auto bg-darker-background cursor-pointer p-3">
                <h3 className="text-2xl font-bold text-gray-600">{question}</h3>
            </div>
            {isOpen && (
                <p className="text-xl font-gray-500 mt-2">{answer}</p>
            )}
        </div>
    )
}