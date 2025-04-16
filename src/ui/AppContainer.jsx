import { useCurPageUrl } from '../hooks/useCurPageUrl'

function AppContainer({ children }) {
    useCurPageUrl()

    return (
        <div className="max-w-8xl mx-auto grid h-screen grid-rows-[8vh_86vh_6vh]">
            {children}
        </div>
    )
}

export default AppContainer
