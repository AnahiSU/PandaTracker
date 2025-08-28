function SearchBar({title}){
    return(
        <div>
            <span className="mx-2 text-xl">{title}:</span>
            <input type="text" className="border-3 rounded-xl p-1"/>
        </div>
    )
}
export default SearchBar