import FrasesAnimadas from "./frases";
import cflove from "./assets/imgs/cflove.png"

function BodyInicio(){
    return (
        <div className= "col-span-full justifu-center content-center">
            <img src={cflove} alt="cflove" className = 'h-100 w-100 justify-items-center'/>
            <FrasesAnimadas></FrasesAnimadas>
        </div>
    )
}

export default BodyInicio