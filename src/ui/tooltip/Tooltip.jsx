function Tooltip({ msg }) {
    return (
        // <div className="group relative inline-block">
        <span className="invisible absolute top-full mt-2 rounded bg-grey-02 text-current opacity-0 transition group-hover:visible group-hover:opacity-100 ">
            {msg}
        </span>
        // </div>
    )
}

export default Tooltip
