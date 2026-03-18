import PageHeading from './PageHeading'

function PageTemplate({ pageTitle, id, children }) {
    return (
        // <article className="flex w-fit flex-col">
        <section className="mx-auto flex flex-col">
            <PageHeading title={pageTitle} />

            <div className="font-code mr-auto flex w-full">
                <div id={id} className="w-full cursor-default">
                    {children}
                </div>
            </div>
        </section>
    )
}

export default PageTemplate
