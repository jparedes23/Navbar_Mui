import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material"
import NavListDrawer from "./NavListDrawer"
import { useState } from "react"
import MenuIcon from '@mui/icons-material/Menu'
import { NavLink } from "react-router-dom"




const Navbar = ({navLinksArrays}) => {

    const [open, setOpen] = useState(false)

  return (
    <>

    <AppBar position="static">
        <Toolbar>
            <IconButton
            onClick={()=> setOpen(true)}
            color="inherit"
            size="large">
                <MenuIcon/>
            </IconButton>
            <Typography 
            variant="h6"
            sx={{ flexGrow:1}}
            >News
            </Typography>
            <Box sx={{display:{ xs:'none', sm:'block'}}}>
                {
                    navLinksArrays.map(item =>(
                        <Button 
                        color="inherit" 
                        key={item.title}
                        component={NavLink}
                        to={item.path}
                        >
                            {item.title}</Button>
                        ))
                    }
            </Box>
        </Toolbar>
    </AppBar>

    {/* <Button variant="contained" onClick={()=> setOpen(true)}>Open Drawer</Button> */}

    <Drawer
    open={open}
    anchor="left"
    onClose={()=> setOpen(false)}>
        {/* Lo esta enviando como Props al componente NavListDrawer
        y tenemos que recivirlo en el componente NavListDrawer */}
        <NavListDrawer 
        navLinksArrays={navLinksArrays} 
        NavLink={NavLink} 
        setOpen={setOpen}/> 
    </Drawer>


    </>
  )
}

export default Navbar