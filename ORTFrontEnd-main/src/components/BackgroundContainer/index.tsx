import React, { FC, PropsWithChildren } from "react"
import { Box } from "@mui/material"


export const BackgroundContainer: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Box component={'div'} style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: 'url("https://images.squarespace-cdn.com/content/v1/6385164bf91d71181bf1adfb/867c2e7e-b43c-4690-82d0-5f8f3da7888f/Online-Reading-Tutor_Dyslexia-Training-App_Header.jpg")',
            // height: '100%',
            minHeight:"100vh",
      height:"auto",
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}  >{children}</Box>
    )

}