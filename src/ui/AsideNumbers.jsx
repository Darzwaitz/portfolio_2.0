// numbers on the aside - amount passed in
function AsideNumbers({ sidetrackNumbers }) {
    return (
        <div className="text-grey-04b font-code flex h-auto w-fit flex-col items-center">
            {[...Array(sidetrackNumbers).keys()].map((i) => (
                <div
                    key={i}
                    className="relative mx-5 cursor-default"
                    // className="before:bg-red-01 mx-5 cursor-default before:absolute before:-ml-3 before:h-2 before:w-2 before:rounded-full"
                >
                    <span className="bg-green-01 before:bg-red-01 before:absolute before:left-0 before:h-2 before:w-2 before:rounded-full"></span>
                    {i + 1}
                </div>
            ))}
        </div>
    )
}

export default AsideNumbers
