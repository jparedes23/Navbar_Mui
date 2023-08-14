import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'


const NavListDrawer = ({navLinksArrays, NavLink, setOpen}) => {
  return (
    <Box sx={{width:250, bgcolor:"lightsalmon"}}>
      
        <nav>
            <List>
                {/* iteramos el navLinks para recorrer con map */}
                {
                    navLinksArrays.map(item =>(

                    <ListItem 
                    disablePadding 
                    key={item.title}>
                        <ListItemButton
                        component={NavLink}
                        to={item.path}
                        onClick={()=>setOpen(false)}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText>{item.title}</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    ))
                }
            </List>
        </nav>

    </Box>
  )
}

export default NavListDrawer