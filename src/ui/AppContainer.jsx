import { useCurPageUrl } from '../hooks/useCurPageUrl'

function AppContainer({ children }) {
    useCurPageUrl()

    return (
        // <div className="max-w-8xl mx-auto grid h-screen">
        //     {children}
        // </div>
        // <div className="max-w-8xl mx-auto grid h-screen grid-rows-[8vh_86vh_6vh]">
        <div className="flex flex-col">{children}</div>
    )
}

export default AppContainer
