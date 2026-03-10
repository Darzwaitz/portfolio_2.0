import PageHeading from './PageHeading'

function PageTemplate({ pageTitle, id, children }) {
    return (
        // <article className="flex w-fit flex-col">
        <section className="mx-auto flex cursor-pointer flex-col">
            <PageHeading title={pageTitle} />

            <article
                id={id}
                className="font-code mr-auto w-full cursor-default"
            >
                {/* <div id={id} className="w-full cursor-default"> */}
                {children}
                {/* </div> */}
            </article>
        </section>
    )
}

export default PageTemplate
