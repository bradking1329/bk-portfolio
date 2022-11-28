import type { NextApiRequest, NextApiResponse } from 'next';
import { VercelDeploymentsResponse } from '../../../../types/vercel.types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<VercelDeploymentsResponse>
) {
  res.json(
    await fetch('https://api.vercel.com/v6/deployments', {
      mode: 'cors',
      headers: { Authorization: `Bearer ${process.env.VERCEL_API_KEY}` },
      method: 'get',
    }).then((res) => res.json())
  );
}
