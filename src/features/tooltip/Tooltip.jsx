function Tooltip({ msg, arrowDirection, arrowDirectionWithFix }) {
    // up arrow direction with fix for tooltip overflowing screen on the left
    if (arrowDirectionWithFix === 'upOverFlowXFix')
        return (
            <pre className="tooltip before:solid after:solid after:top-top-0.5 before:border-b-grey-01 after:border-b-black-02 after: -left-3 z-50 px-2.5 pt-2.5 pb-3.5 before:absolute before:top-0.5 before:mt-[-16px] before:border-[7px] before:border-t-transparent before:border-r-transparent before:border-l-transparent before:text-current after:absolute after:left-2.5 after:mt-[-22px] after:border-[7px] after:border-t-transparent after:border-r-transparent after:border-l-transparent after:text-current">
                {msg}
            </pre>
        )
    if (arrowDirection === 'up')
        return (
            <pre className="tooltip before:solid after:solid after:top-top-0.5 before:border-b-grey-01 after:border-b-black-02 right-0 px-2.5 pt-2.5 pb-3.5 before:absolute before:top-0.5 before:right-1.5 before:mt-[-16px] before:border-[7px] before:border-t-transparent before:border-r-transparent before:border-l-transparent before:text-current after:absolute after:right-1.5 after:mt-[-22px] after:border-[7px] after:border-t-transparent after:border-r-transparent after:border-l-transparent after:text-current">
                {msg}
            </pre>
        )

    // up arrow direction with fix for tooltip overflowing screen on the left
    if (arrowDirectionWithFix === 'upOverFlowXFix')
        return (
            <pre className="tooltip before:solid after:solid after:top-top-0.5 before:border-b-grey-01 after:border-b-black-02 after: -left-3 z-50 px-2.5 pt-2.5 pb-3.5 before:absolute before:top-0.5 before:mt-[-16px] before:border-[7px] before:border-t-transparent before:border-r-transparent before:border-l-transparent before:text-current after:absolute after:left-2.5 after:mt-[-22px] after:border-[7px] after:border-t-transparent after:border-r-transparent after:border-l-transparent after:text-current">
                {msg}
            </pre>
        )

    // if (arrowDirection === 'up')
    //     return (
    //         <pre className="tooltip before:solid after:solid after:top-top-0.5 before:border-b-grey-01 after:border-b-black-02 right-0 px-2.5 pt-2.5 pb-3.5 before:absolute before:top-0.5 before:right-1.5 before:mt-[-16px] before:border-[7px] before:border-t-transparent before:border-r-transparent before:border-l-transparent before:text-current after:absolute after:right-1.5 after:mt-[-22px] after:border-[7px] after:border-t-transparent after:border-r-transparent after:border-l-transparent after:text-current">
    //             {msg}
    //         </pre>
    //     )

    if (arrowDirection === 'down')
        return (
            <pre className="tooltip before:solid after:solid before:border-t-grey-01 after:border-t-black-02 top-[-74%] left-0 before:absolute before:top-[145%] before:right-[75%] before:mt-[-16px] before:border-[7px] before:border-r-transparent before:border-b-transparent before:border-l-transparent before:text-current after:absolute after:top-[116%] after:right-[75%] after:mt-[-7px] after:border-[7px] after:border-r-transparent after:border-b-transparent after:border-l-transparent after:text-current">
                <div role="inner">{msg}</div>
            </pre>
        )

    if (arrowDirection === 'left')
        return (
            <pre className="tooltip before:solid after:solid before:border-r-grey-01 after:border-r-black-02 top-[-25%] left-[100%] before:absolute before:top-[50%] before:right-[100%] before:mt-[-7px] before:border-[7px] before:border-t-transparent before:border-b-transparent before:border-l-transparent before:text-current after:absolute after:top-[50%] after:right-[99.3%] after:mt-[-7px] after:border-[7px] after:border-t-transparent after:border-b-transparent after:border-l-transparent after:text-current">
                <div role="inner-div" className="m-1">
                    {msg}
                </div>
            </pre>
        )
    if (arrowDirection === 'right')
        return (
            <span className="tooltip border-l-grey-0 top-[-18%] right-10">
                <div className="before:solid after:solid before:border-l-black-02 after:border-l-grey-01 relative grid grid-flow-col-dense items-center transition before:absolute before:top-[32%] before:right-[-19px] before:z-10 before:flex before:justify-end before:border-[7px] before:border-t-transparent before:border-r-transparent before:border-b-transparent after:absolute after:top-[32%] after:right-[-21px] after:flex after:justify-end after:border-[7px] after:border-t-transparent after:border-r-transparent after:border-b-transparent">
                    <pre role="inner-div" className="-order-1 m-1">
                        {msg}
                    </pre>
                </div>
            </span>
        )
}

export default Tooltip
