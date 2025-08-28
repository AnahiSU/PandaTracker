import pandaLogo from './assets/imgs/panda.png';
import NormalBtn from './normalButton';
function NavBar({setCurrentView}){
    return(
        <div className = "font-[orienta] my-t-2 mx-8 flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <img src={pandaLogo} alt="logo" className = 'h-20 w-20 object-contain' />
                <span className='text-2xl'>panda tracker</span>
            </div>
            <div className = "space-x-4">
                <NormalBtn text='home' dir = 'home' setCurrentView = {setCurrentView}></NormalBtn>
                <NormalBtn text='codeforces' dir='codeforces' setCurrentView = {setCurrentView}></NormalBtn>
                <NormalBtn text='atcoder' dir='atcoder' setCurrentView = {setCurrentView}></NormalBtn>
                <NormalBtn text='GitHub' dir='github' setCurrentView = {setCurrentView}></NormalBtn>
            </div>
        </div>
    )
}

export default NavBar;
