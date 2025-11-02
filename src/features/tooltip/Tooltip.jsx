function Tooltip({ msg, arrowDirection, arrowDirectionWithFix }) {
    if (arrowDirection === 'up')
        return (
            <pre className="tooltip before:solid after:solid before:border-b-grey-04b after:border-b-black-02b before:text-black-02b after:text-black-02b top-6 right-0 px-2.5 pt-2 pb-[11px] before:absolute before:top-0.5 before:right-1.5 before:mt-[-16px] before:border-[7px] before:border-t-transparent before:border-r-transparent before:border-l-transparent after:absolute after:top-0.5 after:right-1.5 after:mt-[-15px] after:border-[7px] after:border-t-transparent after:border-r-transparent after:border-l-transparent">
                {msg}
            </pre>
        )

    // up arrow direction with fix for tooltip overflowing screen on the left
    if (arrowDirectionWithFix === 'upOverFlowXFix')
        return (
            <pre className="tooltip before:solid after:solid before:border-b-grey-04b after:border-b-black-02b after: before:text-black-02b after:text-black-02b top-6 -left-3 px-2.5 pt-2 pb-[11px] before:absolute before:top-0.5 before:mt-[-16px] before:border-[7px] before:border-t-transparent before:border-r-transparent before:border-l-transparent after:absolute after:top-0.5 after:left-2.5 after:mt-[-15px] after:border-[7px] after:border-t-transparent after:border-r-transparent after:border-l-transparent">
                {msg}
            </pre>
        )

    if (arrowDirection === 'down')
        return (
            <pre className="tooltip before:solid after:solid before:border-t-grey-04b after:border-t-black-02b before:text-black-02b after:text-black-02b top-[-3.2rem] left-0 ml-0 px-2.5 pt-2 pb-[11px] group-hover:delay-500 before:absolute before:top-[2.8rem] before:right-[75%] before:mt-[-16px] before:border-[7px] before:border-r-transparent before:border-b-transparent before:border-l-transparent after:absolute after:top-[2.2rem] after:right-[75%] after:mt-[-7px] after:border-[7px] after:border-r-transparent after:border-b-transparent after:border-l-transparent">
                <div>{msg}</div>
            </pre>
        )

    if (arrowDirection === 'left')
        return (
            <pre className="tooltip before:solid after:solid before:border-r-grey-04b after:border-r-black-02b before:text-black-02b after:text-black-02b top-[-25%] left-[100%] before:absolute before:top-[50%] before:right-[100%] before:mt-[-7px] before:border-[7px] before:border-t-transparent before:border-b-transparent before:border-l-transparent after:absolute after:top-[50%] after:right-[99.3%] after:mt-[-7px] after:border-[7px] after:border-t-transparent after:border-b-transparent after:border-l-transparent">
                <div className="m-1">{msg}</div>
            </pre>
        )
    if (arrowDirection === 'right')
        return (
            <span className="tooltip border-l-grey-0 top-[-18%] right-10">
                <div className="before:solid after:solid before:border-l-black-02b after:border-l-grey-04b relative grid grid-flow-col-dense items-center transition before:absolute before:top-[32%] before:right-[-19px] before:z-10 before:flex before:justify-end before:border-[7px] before:border-t-transparent before:border-r-transparent before:border-b-transparent after:absolute after:top-[32%] after:right-[-21px] after:flex after:justify-end after:border-[7px] after:border-t-transparent after:border-r-transparent after:border-b-transparent">
                    <pre className="-order-1 m-1">{msg}</pre>
                </div>
            </span>
        )
}

export default Tooltip
