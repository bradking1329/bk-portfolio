import { Button } from "@mui/material"
import { useEffect } from "react"
import { AboutMe } from "../about-me/about-me"

export const HomePage = () => {
    return (
        <AboutMe seeMoreVisible={true} />
    )
}