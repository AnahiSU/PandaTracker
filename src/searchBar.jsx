import search from './assets/imgs/search.png'
function SearchBar({title, setUsername}){
    return(
        <div className = 'flex items-center'>
            <span className="mx-2 text-xl">{title}:</span>
            <input type="text" className="border-3 rounded-xl p-1"/>
            <button><img src={search} alt="my image" className='w-8' /></button>
        </div>
    )
}
export default SearchBar