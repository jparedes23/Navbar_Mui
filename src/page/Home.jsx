import { Alert, AlertTitle, Box, Button, Snackbar } from '@mui/material'
import React, { useState } from 'react'

const Home = () => {
    const [open, setOpen] = useState(false)

  return (
    <>
    <h1>Home</h1>
    <Box sx={{display: "grid", gap: "1rem"}}>
        <Alert>
             <AlertTitle>Error</AlertTitle>
             this is a error alert- check it out!
        </Alert>

        <Button variant='contained' onClick={()=> setOpen(true)}>Open</Button>

        <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={()=> setOpen(false)}
        >
            <Alert>
             <AlertTitle>Error</AlertTitle>
             this is a error alert- check it out!
        </Alert>
        </Snackbar>

    </Box>
    </>
  )
}

export default Home