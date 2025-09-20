import ContestsGrid from "./codeforces"
import SearchBar from "./searchBar";
import SelectionMenuCF from "./selectionCodeforces"
import { useEffect, useState } from "react";
function CodeforcesView(){
    const [divView, setDivView] = useState("div1");

    const [username, setUsername] = useState("");
    const [statusMap, setStatusMap] = useState({});
    
    useEffect(() => {
        fetch(`https://codeforces.com/api/user.status?handle=${username}`)
        .then(res=>res.json())
        .then(data =>{
            if(data.status === "OK"){
                const map = {};
                
                data.result.forEach( sub =>{
                    const key = `${sub.problem.contestId}${sub.problem.index}`;
                    if(sub.verdict === "OK"){
                        map[key] = "OK";
                    }else if(!map[key]){
                        map[key] = sub.veredict;
                    }
                });
                setStatusMap(map);
            }
        })
    }, [username]);

    return(
        <div className="grid grid-cols-1">
            <div className="flex justify-end m-4"><SearchBar title="username" setUsername={setUsername}></SearchBar></div>
            <SelectionMenuCF setDivView = {setDivView}></SelectionMenuCF>
            <ContestsGrid divView = {divView} problemStatus = {statusMap}/>
        </div>
    )
}

export default CodeforcesView