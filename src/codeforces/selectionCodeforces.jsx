import { useState } from "react";

function SelectionMenuCF({ setDivView }) {
    const [activeButton, setActiveButton] = useState("div1");

    const handleClick = (value) => {
        setActiveButton(value); 
        setDivView(value);      
    };

    const buttonClass = (value) =>
        `basis-1/6 px-4 py-2 hover:bg-cyan-100 cursor-pointer ${
            activeButton === value ? "bg-cyan-200" : "bg-white"} ${value === 'global' ? '' : 'border-r-3'}
        }`;

    return (
        <div className="px-8 w-screen">
            <div className="text-xl w-full flex flex-row border border-black-300 border-3 overflow-hidden rounded-2xl">
                <button onClick={() => handleClick("div1")} className={buttonClass("div1")}>
                    div. 1
                </button>
                <button onClick={() => handleClick("div2")} className={buttonClass("div2")}>
                    div. 2
                </button>
                <button onClick={() => handleClick("div3")} className={buttonClass("div3")}>
                    div. 3
                </button>
                <button onClick={() => handleClick("div4")} className={buttonClass("div4")}>
                    div. 4
                </button>
                <button onClick={() => handleClick("educational")} className={buttonClass("educational")}>
                    educational
                </button>
                <button onClick={() => handleClick("global")} className={buttonClass("global")}>
                    global
                </button>
            </div>
        </div>
    );
}

export default SelectionMenuCF;
