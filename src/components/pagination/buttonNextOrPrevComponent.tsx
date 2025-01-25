import React from "react";

interface IButtonNextOrPrev {
    allowButtonCondition:boolean,
    cursorCondition: boolean,
    textButton: string,
    onClick: () => void
}


export const ButtonNextOrPrevComponent = ({allowButtonCondition, cursorCondition,textButton, onClick }: IButtonNextOrPrev) => {
    return (
        <button
            key={textButton}
            onClick={onClick}
            disabled={allowButtonCondition}
            className={`flex items-center justify-center px-4 py-2 rounded-full text-white ${
            cursorCondition
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-gray-800 hover:bg-gradient-to-r from-blue-500 to-teal-500"
            }`}>
            {textButton}
        </button>
    )

}