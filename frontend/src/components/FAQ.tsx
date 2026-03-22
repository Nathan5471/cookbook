import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export default function FAQ({ question, answer } : { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full h-auto flex flex-col" onClick={() => setIsOpen(!isOpen)}>
            <div className="w-full h-auto flex flex-row bg-darker-background cursor-pointer p-3">
                <h3 className="text-2xl font-bold text-gray-600">{question}</h3>
                <div className="ml-auto">
                    {isOpen ? <MdKeyboardArrowUp size={36} className="text-gray-600" /> : <MdKeyboardArrowDown size={36} className="text-gray-600" />}
                </div>
            </div>
            {isOpen && (
                <p className="text-xl font-gray-500 mt-2">{answer}</p>
            )}
        </div>
    )
}