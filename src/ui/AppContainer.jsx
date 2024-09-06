import { useCurPageUrl } from '../hooks/useCurPageUrl'

function AppContainer({ children }) {
    useCurPageUrl()
    // const tempVal =
    // console.log(tempVal)
    // console.log(onShowTemp)

    return (
        <div className="grid h-screen grid-rows-[8vh_86vh_6vh]">{children}</div>
    )
}

export default AppContainer
