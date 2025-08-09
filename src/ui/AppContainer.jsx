import { useCurPageUrl } from '../hooks/useCurPageUrl'

function AppContainer({ children }) {
    useCurPageUrl()

    return (
        // <div className="max-w-8xl mx-auto grid h-screen">
        //     {children}
        // </div>
        // <div className="max-w-8xl mx-auto grid grid-rows-[minmax(min-content,_8vh)_86vh_6vh]">
        <div className="max-w-8xl mx-auto grid grid-rows-[minmax(min-content,_8vh)_86vh_minmax(min-content,_6vh)]">
            {children}
        </div>
    )
}

export default AppContainer
