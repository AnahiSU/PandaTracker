import NavBar from './header'
import './index.css'
import Views from './views'
import { useState } from 'react';

function App(){
    const [currentView, setCurrentView] = useState('home');

    return(
        <>
            <NavBar setCurrentView={setCurrentView}/>
            <div className='justify-items-center'>
                <Views currentView={currentView}/>
            </div>

        </>
    )
}

export default App