import SvgSectionWrapper from '@/assets/imgs/svg/components/SvgSectionWrapper'

import MinimizeButton from './MinimizeButton'
import MaximizeRestoreButton from './MaximizeRestoreButton'
import CloseButton from './CloseButton'
// import useDeleteItem from '../../hooks/useDeleteItem'

function WindowDisplayButtons({
    headerWindowStyles,
    portfolioItemStyles,
    maximize,
    handleMaximize,
    handleMaximizeHeader,
    // deleteItem,
    // deleteItemId,
    onClick,
    id,
}) {
    // const deleteItem = useDeleteItem(deleteItemId)
    // console.log(deleteItemId)

    let customStyles = ''
    if (headerWindowStyles) customStyles = 'hidden h-full pl-1 lg:flex'
    if (portfolioItemStyles) customStyles = 'col-span-2 ml-auto flex gap-0.5'

    return (
        <SvgSectionWrapper id={id} customStyles={customStyles}>
            <MinimizeButton
                headerStyles={headerWindowStyles}
                portfolioStyles={portfolioItemStyles}
            />
            <MaximizeRestoreButton
                headerStyles={headerWindowStyles}
                portfolioStyles={portfolioItemStyles}
                maximize={maximize}
                handleMaximizeHeader={handleMaximizeHeader}
                onClick={handleMaximize}
            />
            {/* 2 different sets of styles conditional for CloseButton based 
            on 2 different styles conditional from this comp */}
            <CloseButton
                headerStyles={headerWindowStyles}
                portfolioStyles={portfolioItemStyles}
                showTooltip={true}
                onClick={onClick}
            />
        </SvgSectionWrapper>
    )
}

export default WindowDisplayButtons
