import { useEffect } from 'react'
import { useLocation } from 'react-router'

function useUrlChange() {
    let curLocation = useLocation()

    useEffect(() => {
        console.log(curLocation)
    }, [curLocation])

    // return <div></div>
}

export default useUrlChange
