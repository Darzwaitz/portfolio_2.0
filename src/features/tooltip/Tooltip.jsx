function Tooltip({ msg, arrowDirection }) {
    if (arrowDirection === 'up')
        return (
            <pre className="tooltip before:solid after:solid after:top-top-0.5 right-0 px-2.5 pb-3.5 pt-2.5 before:absolute before:right-1.5 before:top-0.5 before:mt-[-16px] before:border-[7px] before:border-b-grey-01 before:border-l-transparent before:border-r-transparent before:border-t-transparent before:text-current after:absolute after:right-1.5 after:mt-[-22px] after:border-[7px] after:border-b-black-02 after:border-l-transparent after:border-r-transparent after:border-t-transparent after:text-current">
                {msg}
            </pre>
        )

    if (arrowDirection === 'down')
        return (
            <pre className="tooltip before:solid after:solid left-0 top-[-74%] before:absolute before:right-[75%] before:top-[145%] before:mt-[-16px] before:border-[7px] before:border-b-transparent before:border-l-transparent before:border-r-transparent before:border-t-grey-01 before:text-current after:absolute after:right-[75%] after:top-[116%] after:mt-[-7px] after:border-[7px] after:border-b-transparent after:border-l-transparent after:border-r-transparent after:border-t-black-02 after:text-current">
                <div role="inner">{msg}</div>
            </pre>
            // bkup TO-REMOVE
            // <pre className="before:solid after:solid invisible absolute left-0 top-[-74%] mt-2 rounded border  border-grey-01 bg-black-02 px-2.5 pb-2 pt-1 font-[inherit] text-grey-02 opacity-0 transition before:absolute before:right-[75%] before:top-[145%] before:mt-[-16px] before:border-[7px] before:border-b-transparent before:border-l-transparent before:border-r-transparent before:border-t-grey-01 before:text-current after:absolute after:right-[75%] after:top-[116%] after:mt-[-7px] after:border-[7px] after:border-b-transparent after:border-l-transparent after:border-r-transparent after:border-t-black-02 after:text-current group-hover:visible group-hover:opacity-100">
            //     <div role="inner">test {msg}</div>
            // </pre>
        )

    if (arrowDirection === 'left')
        return (
            <pre className="tooltip before:solid after:solid left-[100%] top-[-25%]  before:absolute before:right-[100%] before:top-[50%] before:mt-[-7px] before:border-[7px] before:border-b-transparent before:border-l-transparent before:border-r-grey-01 before:border-t-transparent before:text-current after:absolute after:right-[99.3%] after:top-[50%] after:mt-[-7px] after:border-[7px] after:border-b-transparent after:border-l-transparent after:border-r-black-02 after:border-t-transparent after:text-current ">
                <div role="inner-div" className="m-1">
                    {msg}
                </div>
            </pre>
        )
    if (arrowDirection === 'right')
        return (
            <span className="tooltip border-l-grey-0 right-10 top-[-18%]">
                <div className="before:solid after:solid relative grid grid-flow-col-dense items-center transition before:absolute before:right-[-20px] before:top-[32%] before:z-10 before:flex before:justify-end before:border-[7px] before:border-b-transparent before:border-l-black-02 before:border-r-transparent before:border-t-transparent after:absolute after:right-[-22px] after:top-[32%] after:flex after:justify-end after:border-[7px] after:border-b-transparent after:border-l-grey-01 after:border-r-transparent after:border-t-transparent ">
                    <pre role="inner-div" className=" -order-1 m-1">
                        {msg}
                    </pre>
                </div>
            </span>
        )
}

export default Tooltip
