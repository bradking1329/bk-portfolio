import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse) {
        let data;
        const callFortniteApi = async () => {
                const re = await fetch('https://fortnite-api.com/v2/stats/br/v2?name=theking1329&image=gamepad', { mode: 'cors', headers: { 'Authorization': ``}}).then(res => console.log(res))
                console.log('test: ', re);
                console.log(re)
                return res.json(re)
        }
        console.log(data);
        console.log(callFortniteApi);
        // res.status(200).json(callFortniteApi);
}