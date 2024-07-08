import { FC } from 'react';
import { BioProps, FooterProps, CardButtonProps } from '../../../interface/interface';
import { Button } from 'primereact/button';

const type: string = "horizontal";

export const CardButton: FC<CardButtonProps> = ({ cardType }) => {
    const getTypeClass = (cardType?.cardType === type) ? 'horizontal-container' : 'vertical-container';

    return <div className={getTypeClass}>
        <div className="button-1">
            <Button label="View CV" className='button-style' />
        </div>
        <div className="button-2">
            <Button label="Message" className='button-style' />
        </div>
    </div>
}

export const Bio: FC<BioProps> = ({ bio, cardType }) => {
    const getTypeClass = (cardType?.cardType === type) ? 'profile-biography-horizontal' : 'profile-biography-vertical';
    return (<p className={getTypeClass}>{bio}</p>)
}

export const Footer: FC<FooterProps> = ({ location, website, cardType }) => {
    const getTypeClass = (cardType?.cardType === type) ? 'horizontal' : 'vertical';

    return (<>
        <div className={`footer-parent-container-${getTypeClass}`}>
            <p> {location} </p>
            <a href={website}> {website} </a>
        </div>
    </>
    )
}