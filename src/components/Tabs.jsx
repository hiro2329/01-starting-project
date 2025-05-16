import TapButton from './TapButton'
import Examples from './Examples'


export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }) {

    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    )


}

