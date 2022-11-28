import type { NextApiRequest, NextApiResponse } from 'next';
import { FortniteStatsResponse } from '../../../types/fortnite.types';

// type Data = {
//   name: string
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<FortniteStatsResponse[]>
) {
  const response: FortniteStatsResponse[] = await Promise.all([
    await fetch(
      'https://fortnite-api.com/v2/stats/br/v2?name=derkindest0d&image=gamepad',
      {
        mode: 'cors',
        headers: { Authorization: `${process.env.FORTNITE_API_KEY}` },
      }
    )
      .then((res) => res.json())
      .then((data) => data.data),
    await fetch(
      'https://fortnite-api.com/v2/stats/br/v2?name=theking1329&image=gamepad',
      {
        mode: 'cors',
        headers: { Authorization: `${process.env.FORTNITE_API_KEY}` },
      }
    )
      .then((res) => res.json())
      .then((data) => data.data),
    await fetch(
      'https://fortnite-api.com/v2/stats/br/v2?name=emm1269&image=gamepad',
      {
        mode: 'cors',
        headers: { Authorization: `${process.env.FORTNITE_API_KEY}` },
      }
    )
      .then((res) => res.json())
      .then((data) => data.data),
    await fetch(
      'https://fortnite-api.com/v2/stats/br/v2?name=barthunter&image=gamepad',
      {
        mode: 'cors',
        headers: { Authorization: `${process.env.FORTNITE_API_KEY}` },
      }
    )
      .then((res) => res.json())
      .then((data) => data.data),
  ]);
  res.status(200).json(response);
}
