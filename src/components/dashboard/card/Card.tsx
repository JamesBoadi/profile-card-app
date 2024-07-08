import React, { FC, useEffect, useState } from 'react';
import { CreateCardProps, ProfileDataResponse } from '../../../interface/interface';
import { CardType } from './CardType';
import { isNullOrUndefined } from '../../../helpers/helpers';
import { fetchData } from '../../../api/api';

import {
    useParams
} from "react-router-dom";

const Card: FC<Partial<CreateCardProps>> = ({ cardType }) => {
    const { id } = useParams();
    const [profile_data, setProfileData] = useState<ProfileDataResponse | undefined>();
    const [loadedProfileData, setLoadedProfileData] = useState<boolean>(false);

    useEffect(() => {
        if (!loadCard()) {
            console.log("invalid card type"); // redirect to another page
            return;
        }
        fetchData(id?.toString())
            .then((data) => {
                setProfileData(data);
                setLoadedProfileData(loadCard);
            }).catch((err) => {
                console.log("log err " + err);
            });
    }, []);

    const loadCard = () => {
        return (cardType?.cardType === "horizontal" || cardType?.cardType === "vertical");
    }

    return (
        <>
            {loadedProfileData &&
                <CardType profile_data={profile_data} cardType={cardType} />}
        </>
    )
}

export { Card }
