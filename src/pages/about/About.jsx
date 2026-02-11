// import React from 'react'

import PageHeading from '../PageHeading'

function About() {
    return (
        // <section className="bg-green-01 flex">
        <>
            <PageHeading title={'About Page'} />
            <div className="flex">
                <p className="cursor-default">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum eaque amet velit voluptate nihil natus vero! Laborum
                    commodi quidem nesciunt minima sunt delectus ipsam
                    temporibus dolor soluta velit eius, perferendis aut
                    quisquam. Sit nemo quod ipsam perspiciatis, ut enim sint
                    eveniet magnam et recusandae nesciunt, nihil quo temporibus
                    quis eum?
                </p>
                <img
                    src="/imgs/portfolio-image-1.png"
                    alt="profile-picture"
                    className="h-45 w-45 rounded border"
                />
            </div>
        </>
    )
}

export default About
