// import { Outlet, useOutletContext } from 'react-router-dom'
import { Outlet } from 'react-router'
import Terminal from '../features/terminal/Terminal'
import { usePanels } from '../contexts/PanelsContext'

export default function MainContent() {
    const { togglePanels } = usePanels()

    // const testFunc = function () {
    //     console.log('testFunc CALLED')
    // }

    return (
        <main
            className={`bg-black-01 text-grey-01 grid w-full ${togglePanels.toggleTerminal ? 'grid-rows-[1fr]' : 'grid-rows-[1fr]_auto'}`}
        >
            <section
                id="outlet"
                // hide scrollbar
                style={{ scrollbarWidth: 'none' }}
                className="bg-black-02 overflow-auto p-4 sm:p-5 md:p-6 lg:p-8"
            >
                {/* <Outlet context={{ testFunc }} /> */}
                <Outlet />
            </section>
            <Terminal />
        </main>
    )
}

// export function useTestFunc() {
//     return useOutletContext()
// }

//   <div className="font-code bg-grey-04c absolute inset-0 h-fit w-12 overflow-hidden">
//       {/* .map(x => x++) */}
//       {[...Array(sidetrackNumbers).keys()].map((number, i) => (
//           <div
//               className="text-grey-01 my-auto flex flex-col items-center"
//               key={i}
//           >
//               <span>{number}</span>
//           </div>
//       ))}
//   </div>
