import PageHeading from './PageHeading'

function PageTemplate({ pageTitle, id, children }) {
    return (
        // <article className="flex w-fit flex-col">
        <article className="mx-auto flex flex-col">
            <PageHeading title={pageTitle} />

            <div className="font-code flex w-[90%]">
                <div id={id} className="cursor-default">
                    {children}
                </div>
            </div>
        </article>
    )
}

export default PageTemplate
