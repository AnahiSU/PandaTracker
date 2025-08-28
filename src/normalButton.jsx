function NormalBtn({text, dir,setCurrentView}){
    return (
        <button onClick={() => setCurrentView(dir)} className="cursor-pointer ring-2 rounded-xl w-32 h-10">
            <span className ="text-xl font-medium">{text}</span>
        </button>
    )
}

export default NormalBtn