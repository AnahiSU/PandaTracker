import { useEffect, useState } from "react";
import DivGrid from "./divGrid";

function ContestsGrid({divView, problemStatus}) {
    const [divisions, setDivisions] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const [contestRes, problemRes] = await Promise.all([
                    fetch("https://codeforces.com/api/contest.list"),
                    fetch("https://codeforces.com/api/problemset.problems")
                ]);

                const contestData = await contestRes.json();
                const problemData = await problemRes.json();
                
                console.log("data;" )
                if (contestData.status === "OK" && problemData.status === "OK") {
                    const contests = contestData.result.filter(c => c.phase === "FINISHED");
                    const problems = problemData.result.problems;

                    const divisions = {
                        "Div. 1": [],
                        "Div. 2": [],
                        "Div. 3": [],
                        "Div. 4": [],
                        "Global": [],
                        "Educational": [],
                    };

                    contests.forEach(contest => {
                        const name = contest.name;
                        let div = null;

                        if (name.includes("Global")) div = "Global";
                        else if (name.includes("Educational")) div = "Educational";
                        else if (name.includes("Div. 1")) div = "Div. 1";
                        else if (name.includes("Div. 2")) div = "Div. 2";
                        else if (name.includes("Div. 3")) div = "Div. 3";
                        else if (name.includes("Div. 4")) div = "Div. 4";

                        if (div) {
                            const problemsForContest = problems
                                .filter(p => p.contestId === contest.id)
                                .map(p => ({
                                    ...p,
                                    link: `https://codeforces.com/problemset/problem/${p.contestId}/${p.index}`,
                                }));
                            
                            divisions[div].push({
                                ...contest,
                                problems: problemsForContest.reverse(),
                            });
                        }
                    });
                    setDivisions(divisions);
                    setLoading(false);
                }
            } catch (err) {
                console.error("Error fetching data:", err);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return <div>loading...</div>
    console.log(divisions["Div. 2"]);
    return (
        <div className="p-4 font-[orienta]">
            {divView === 'educational' && <DivGrid contests={divisions["Educational"]} statusMap={problemStatus} />}
            {divView === 'global' && <DivGrid contests={divisions["Global"]} statusMap={problemStatus} />}
            {divView === 'div1' && <DivGrid contests={divisions["Div. 1"]} statusMap={problemStatus} />}
            {divView === 'div2' && <DivGrid contests={divisions["Div. 2"]} statusMap={problemStatus} />}
            {divView === 'div3' && <DivGrid contests={divisions["Div. 3"]} statusMap={problemStatus} />}
            {divView === 'div4' && <DivGrid contests={divisions["Div. 4"]} statusMap={problemStatus} />}

        </div>
    );
}

export default ContestsGrid;
