import { ProfileDataResponse } from '../interface/interface';

export async function fetchData(id: string | undefined): Promise<ProfileDataResponse> {
    let response = await fetch(`http://localhost:3000/user/${id}`);
    let data = await response.json();
    return data;
}
