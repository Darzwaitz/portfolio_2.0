// import { useCurPageUrl } from '../hooks/useCurPageUrl'

function AppContainer({ children }) {
    // useCurPageUrl()

    return (
        <div className="max-w-8xl mx-auto grid grid-rows-[minmax(min-content,_5vh)_92vh_minmax(min-content,_3vh)] sm:grid-rows-[minmax(min-content,_8vh)_86vh_minmax(min-content,_6vh)]">
            {children}
        </div>
    )
}

export default AppContainer
