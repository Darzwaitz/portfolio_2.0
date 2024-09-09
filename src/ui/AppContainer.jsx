import { useCurPageUrl } from '../hooks/useCurPageUrl'

function AppContainer({ children }) {
    useCurPageUrl()

    return (
        <div className="grid h-screen grid-rows-[8vh_86vh_6vh]">{children}</div>
    )
}

export default AppContainer
