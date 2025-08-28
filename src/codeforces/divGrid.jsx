function DivGrid({contests}){
    console.log("contests: " + contests);
    return(
        <table className="border-collapse table-auto border-black-300 border-serparate border-3 border-spacing-2 mx-4">
            <thead>
                <tr>
                    <th className="border-3 border-black-300 px-4 py-2"> contest </th>
                    <th className="border-3 border-black-300 px-2 py-2"> a </th>
                    <th className="border-3 border-black-300 px-2 py-2"> b </th>
                    <th className="border-3 border-black-300 px-2 py-2"> c </th>
                    <th className="border-3 border-black-300 px-2 py-2"> d </th>
                    <th className="border-3 border-black-300 px-2 py-2"> e </th>
                    <th className="border-3 border-black-300 px-2 py-2"> f </th>
                    <th className="border-3 border-black-300 px-2 py-2"> g </th>
                    <th className="border-3 border-black-300 px-2 py-2"> h </th>
                    <th className="border-3 border-black-300 px-2 py-2"> i </th>
                    <th className="border-3 border-black-300 px-2 py-2"> j </th>
                </tr>
            </thead>
            <tbody>
                { contests.map((contest) => (       
                    <tr>
                        <td className="border-3 border-black-300 px-2 py-1 text-sm">{contest.name}</td>
                        
                        {Array.from({ length: 10 }).map((_, idx) => (
                            <td className="border-2 border-black-300 px-2 py-1 text-sm">
                                { contest.problems && contest.problems[idx] ?
                                <a href={contest.problems[idx].link} target="_blank" className=" underline">
                                    {contest.problems[idx].index}. {contest.problems[idx].name}
                                </a> : '-'}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default DivGrid