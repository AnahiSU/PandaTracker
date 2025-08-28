import ContestsGrid from "./codeforces"
import SearchBar from "../searchBar";
import SelectionMenuCF from "./selectionCodeforces"
import { useState } from "react";
function CodeforcesView(){
    const [divView, setDivView] = useState("div1");
    const [username, setUsername] = useState("");
    return(
        <div className="grid grid-cols-1">
            <div className="justify-items-end m-4"><SearchBar title="username" setUsername={setUsername}></SearchBar></div>
            <SelectionMenuCF setDivView = {setDivView}></SelectionMenuCF>
            <ContestsGrid divView = {divView} username={username}/>
        </div>
    )
}

export default CodeforcesView