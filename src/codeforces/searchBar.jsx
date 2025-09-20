import search from '../assets/imgs/search.png'
import { useState } from 'react';
function SearchBar({title, setUsername}){
    const [inputVal, setInputVal] = useState("");
    return(
        <div className = 'flex items-center'>
            <span className="mx-2 text-xl">{title}:</span>
            <input type="text" value={inputVal} onChange={e=>setInputVal(e.target.value)} className="border-3 rounded-xl p-1"/>
            <button onClick={() => setUsername(inputVal)}><img src={search} alt="my image" className='w-8 cursor-pointer' /></button>
        </div>
    )
}
export default SearchBar