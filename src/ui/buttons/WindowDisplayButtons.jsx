import SvgSectionWrapper from '../../assets/imgs/svg/components/SvgSectionWrapper'

import MinimizeButton from './MinimizeButton'
import MaximizeRestoreButton from './MaximizeRestoreButton'
import CloseButton from './CloseButton'

function WindowDisplayButtons({
    headerWindowStyles,
    portfolioItemStyles,
    maximize,
    onClick,
    id,
}) {
    let customStyles = ''
    if (headerWindowStyles) customStyles = 'hidden h-full gap-2 pl-1 lg:flex'
    if (portfolioItemStyles) customStyles = 'ml-auto flex gap-0.5'

    return (
        <SvgSectionWrapper id={id} customStyles={customStyles}>
            <MinimizeButton />
            <MaximizeRestoreButton maximize={maximize} onClick={onClick} />
            {/* 2 different sets of styles conditional for CloseButton based 
            on 2 different styles conditional from this comp */}
            <CloseButton
                headerStyles={headerWindowStyles}
                portfolioStyles={portfolioItemStyles}
            />
        </SvgSectionWrapper>
    )
}

export default WindowDisplayButtons
