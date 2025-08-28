import BodyInicio from "./bodyInicio";
import CodeforcesView from "./codeforces/codeforcesView";

function Views({ currentView }) {
    return (
        <div>
            {currentView === 'home' && <BodyInicio />}
            {currentView === 'codeforces' && <CodeforcesView />}
            {currentView === 'atcoder' && <BodyInicio />}
            {currentView === 'github' && <div>GitHub view aún no implementado</div>}
        </div>
    );
}

export default Views;
