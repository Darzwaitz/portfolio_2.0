// numbers on the aside - amount passed in
function AsideNumbers({ sidetrackNumbers }) {
    return (
        <div
            id="numbers-parent"
            className="text-grey-04b font-code relative flex h-auto w-fit flex-col"
        >
            {[...Array(sidetrackNumbers).keys()].map((i) => (
                <div
                    key={i}
                    className="group mx-5 flex cursor-default items-center justify-end"
                    // className="before:bg-red-01 mx-5 cursor-default before:absolute before:-ml-3 before:h-2 before:w-2 before:rounded-full"
                >
                    <span className="bg-red-02 absolute left-1.5 hidden h-2 w-2 rounded-full group-hover:block hover:block"></span>
                    {i + 1}
                </div>
            ))}
        </div>
    )
}

export default AsideNumbers
