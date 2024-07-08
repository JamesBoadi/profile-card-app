import { FC } from 'react';
import { CreateCard } from './CreateCard';
import { CreateCardProps } from '../../../interface/interface';

const CardType: FC<Partial<CreateCardProps>> = ({ profile_data, cardType }) => {
    return (
        <div >
            <div className={`card-panel-${cardType?.cardType}`}>
                <CreateCard profile_data={profile_data} cardType={cardType} />
            </div>
        </div>
    )
}

export { CardType }