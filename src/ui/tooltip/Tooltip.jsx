function Tooltip({ msg }) {
    return (
        // <div className="group relative inline-block">
        <pre className="before:solid after:solid invisible absolute left-[100%] top-[-25%] ml-2 mt-2 rounded border bg-black-02  px-2.5 pb-2 pt-1 font-[inherit] text-current opacity-0 transition before:absolute before:right-[100%] before:top-[50%] before:mt-[-7px] before:border-[7px] before:border-b-transparent before:border-l-transparent before:border-r-current before:border-t-transparent before:text-current after:absolute after:right-[99.3%] after:top-[50%] after:mt-[-7px] after:border-[7px] after:border-b-transparent after:border-l-transparent after:border-r-black-02 after:border-t-transparent after:text-current group-hover:visible group-hover:opacity-100">
            {msg}
        </pre>
        // </div>
    )
}

export default Tooltip
