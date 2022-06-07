import { Button } from "@mui/material"
import { useEffect } from "react"

export const HomePage = () => {

    const callApi = async () => {
        try {
            // console.log(process.env.NEXT_PUBLIC_FORTNITE_API_KEY)
            const res = await fetch('https://fortnite-api.com/v2/stats/br/v2?name=theking1329&image=gamepad', { mode: 'cors', headers: { 'Authorization': `5028011c-f95b-47cb-9c19-0e5bc4eed072`}}).then(res => res.json()).then(data => console.log(data))
            // const res = await fetch('/api/fortnite').then(data => console.log(data));
            // const data = await res.json();
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        callApi();
    }, [])
    return (
        <Button variant='contained' color='primary'>Hi bub</Button>
    )
}