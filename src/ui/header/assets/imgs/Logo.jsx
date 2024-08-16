function Logo({ setCurPageName }) {
    return (
        <img
            // src="/imgs/logo-loading.gif"
            src="/imgs/Portfolio-website-logo-Retina-344x320September-2017.png"
            alt="main-logo"
            className="mr-3 h-5"
            onClick={() => setCurPageName(`🏚️  Home`)}
        />
    )
}

export default Logo
