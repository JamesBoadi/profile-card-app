export interface CardButtonProps {
    cardType: CardType | undefined
}

export interface ErrorPageProps{
    displayPage: boolean;
}

export interface BioProps {
    cardType: CardType | undefined,
    bio: string | undefined;
}

export interface CreateCardProps {   
    profile_data: ProfileDataResponse | undefined,
    cardType: CardType | undefined,
}

export interface FooterProps {
    cardType: CardType | undefined,
    location: string | undefined,
    website: any
}

export interface ProfileDataResponse {
    id: number,
    name: string,
    socialMediaHandle: string,
    profileImgSrc: any,
    bio: string,
    location: string,
    website: any
}

export type CardType = {
    cardType: string | undefined
}

