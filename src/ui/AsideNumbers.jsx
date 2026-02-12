// numbers on the aside - amount passed in
function AsideNumbers({ sidetrackNumbers }) {
    return (
        <div className="text-grey-04b font-code flex h-auto w-12 flex-col items-center">
            {[...Array(sidetrackNumbers).keys()].map((num, i) => (
                <div key={num} className="cursor-default">
                    {i + 1}
                </div>
            ))}
        </div>
    )
}

export default AsideNumbers
