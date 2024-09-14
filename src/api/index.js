import { data } from "autoprefixer";

export const GetRandomUser = async () => {
    const response = await fetch('https://randomuser.me/api',
        { method: 'GET' });
    return await response.json();
};


