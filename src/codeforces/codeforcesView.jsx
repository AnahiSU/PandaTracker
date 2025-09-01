import ContestsGrid from "./codeforces"
import SearchBar from "../searchBar";
import SelectionMenuCF from "./selectionCodeforces"
import { useState } from "react";
function CodeforcesView(){
    const [divView, setDivView] = useState("div1");
    return(
        <div className="grid grid-cols-1">
            <div className="flex justify-end m-4"><SearchBar title="username" ></SearchBar></div>
            <SelectionMenuCF setDivView = {setDivView}></SelectionMenuCF>
            <ContestsGrid divView = {divView}/>
        </div>
    )
}

export default CodeforcesView