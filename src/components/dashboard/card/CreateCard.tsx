import React, { FC, useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { CreateCardProps, CardType } from '../../../interface/interface';
import { Bio, Footer, CardButton } from './CardComponent';

export const CreateCard: FC<CreateCardProps> = ({ profile_data, cardType }) => {
    const header = profileImage(profile_data?.profileImgSrc, cardType);
    const title = profileName(profile_data?.name, cardType);
    const subTitle = profileSocialMediaHandle(profile_data?.socialMediaHandle, cardType);
    
    return (<Card
        className={`card-${cardType?.cardType}`}
        header={header}
        title={title}
        subTitle={subTitle}
    >
        <Bio bio={profile_data?.bio} cardType={cardType} />
        <Footer
            location={profile_data?.location}
            website={profile_data?.website}
            cardType={cardType}
        />
        <CardButton cardType={cardType} />
    </Card>)
}

const profileImage = (img: any, cardType?: CardType) =>
    <div className="img-cover">
        <img src={img} className={`rounded-${cardType?.cardType} 
        profile-image-${cardType?.cardType}`} alt="profile" />
    </div>;

const profileName = (name?: string , cardType?: CardType) =>
    <span>
        <h3 className={`title-${cardType?.cardType} 
            child-element-margin`}> {name} </h3>
    </span>;

const profileSocialMediaHandle = (name?: string , cardType?: CardType) =>
    <span>
        <p className={`header-${cardType?.cardType} 
            child-element-margin`}> {name} </p>
    </span>;
