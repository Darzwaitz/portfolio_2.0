function Tooltip({ msg, arrowDirection }) {
    if (arrowDirection === 'up')
        return (
            <pre className="before:solid after:solid invisible left-[100%] top-[-25%] mt-2 rounded border border-grey-01  bg-black-02 px-2.5 pb-2 pt-1 font-[inherit] text-grey-02 opacity-0 transition before:absolute before:right-[75%] before:top-[50%] before:mt-[-16px] before:border-[7px] before:border-b-grey-01 before:border-l-transparent before:border-r-transparent before:border-t-transparent before:text-current after:absolute after:right-[74.8%] after:top-[39%] after:mt-[-7px] after:border-[7px] after:border-b-black-02 after:border-l-transparent after:border-r-transparent after:border-t-transparent after:text-current group-hover:visible group-hover:opacity-100"></pre>
        )

    if (arrowDirection === 'down')
        return (
            <pre className="before:solid after:solid invisible absolute left-0 top-[-74%] mt-2 rounded border  border-grey-01 bg-black-02 px-2.5 pb-2 pt-1 font-[inherit] text-grey-02 opacity-0 transition before:absolute before:right-[75%] before:top-[145%] before:mt-[-16px] before:border-[7px] before:border-b-transparent before:border-l-transparent before:border-r-transparent before:border-t-grey-01 before:text-current after:absolute after:right-[75%] after:top-[116%] after:mt-[-7px] after:border-[7px] after:border-b-transparent after:border-l-transparent after:border-r-transparent after:border-t-black-02 after:text-current group-hover:visible group-hover:opacity-100">
                <div role="inner">test {msg}</div>
            </pre>
        )

    if (arrowDirection === 'left')
        return (
            <pre className="before:solid after:solid ${ab} invisible absolute  left-[100%] top-[-25%] ml-2 mt-2 rounded border border-grey-01  bg-black-02 px-2.5 pb-2 pt-1 font-[inherit] text-grey-02 opacity-0 transition before:absolute before:right-[100%] before:top-[50%] before:mt-[-7px] before:border-[7px] before:border-b-transparent before:border-l-transparent before:border-r-grey-01 before:border-t-transparent before:text-current after:absolute after:right-[99.3%] after:top-[50%] after:mt-[-7px] after:border-[7px] after:border-b-transparent after:border-l-transparent after:border-r-black-02 after:border-t-transparent after:text-current group-hover:visible group-hover:opacity-100">
                <div role="inner-div" className="m-1">
                    {msg}
                </div>
            </pre>
        )
    if (arrowDirection === 'right')
        return (
            // grid-template-columns: repeat(3, 1fr);
            <span
                className="before:solid 
                            after:solid 
                            after:border-l-grey-0 
                            
                            invisible 
                            absolute right-10 top-[-18%]  grid grid-flow-col-dense items-center rounded border border-grey-01 bg-black-02 px-2.5 pb-2 
                            
                            pt-1 
                            font-sans
                            text-grey-02 

                            opacity-0 
                             transition 
                            before:flex
                            before:justify-end 
                            before:border-[7px]
                            before:border-b-transparent 
                            before:border-l-grey-01 before:border-r-transparent  
                            
                            before:border-t-transparent
                            
                            after:flex
                            after:justify-end  after:border-[7px] after:border-b-transparent 
                            after:border-r-transparent after:border-t-transparent group-hover:visible group-hover:opacity-100"
            >
                <pre role="inner-div" className=" -order-1 m-1">
                    {msg}
                </pre>
            </span>
        )
    // <span className="before:solid after:solid before:justify-centerbefore:items-center invisible absolute right-10 top-[-18%] ml-2 mt-2 flex items-center rounded border  border-grey-01 bg-black-02 px-2.5 pb-2 pt-1 font-[inherit] text-grey-02 opacity-0 transition  before:absolute before:top-[50%] before:mt-[-7px] before:flex before:justify-end before:border-[7px] before:border-b-transparent before:border-l-grey-01 before:border-r-transparent before:border-t-transparent before:text-current after:absolute after:top-[50%] after:mt-[-7px] after:border-[7px] after:border-b-transparent after:border-l-grey-02 after:border-r-transparent after:border-t-transparent after:text-current group-hover:visible group-hover:opacity-100">
}

export default Tooltip
