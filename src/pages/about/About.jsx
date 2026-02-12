// import React from 'react'

import PageHeading from '../PageHeading'

function About() {
    return (
        // <section className="bg-green-01 flex">
        // <div>
        <article className="flex w-fit flex-col">
            <PageHeading title={'About Page'} />
            <div className="font-code mx-auto flex w-[90%]">
                <div className="cursor-default">
                    <h2>
                        <span> &lt;</span>
                        <span className="text-blue-02">profile</span>
                        <span>&gt;</span>
                    </h2>
                    <p className="text-brown-01 pl-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Beatae, expedita at rerum pariatur quae libero qui
                        perspiciatis eaque reprehenderit. Quia quidem dolorum
                        laboriosam quasi, numquam expedita, adipisci eligendi
                        soluta dolore tempora quod, minima dolorem esse magnam
                        mollitia eum dolor doloremque id! Unde culpa distinctio,
                        nulla obcaecati eaque illo voluptatem deleniti.
                    </p>
                    <span> &lt;</span>
                    <span className="text-blue-02">/profile</span>
                    <span>&gt;</span>
                </div>
                <img
                    src="/imgs/portfolio-image-1.png"
                    alt="profile-picture"
                    className="h-45 w-45 rounded border"
                />
            </div>
        </article>
    )
}

export default About
