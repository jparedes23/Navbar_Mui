import styled from "@emotion/styled";
import { Box, Button, Paper, Typography } from "@mui/material";

export default function Product() {
    const Img = styled ("img")({
        width:300,
        height:"100%",
        objectFit:"cover",
        objectPosition:"center"
    })

    return(
        <Paper
        sx={{
            display:'flex',
            alignItems:'center',
            gap:2,
            overflow:'hidden',
            mt:5
        }}
        >
            <Img src="https://www.kia.com/content/dam/kwcms/gt/en/images/discover-kia/voice-search/parts-80-1.jpg" alt="mi hermosa imagen" />

        <Box sx={{flexGrow:1, display:"grid", gap:2}}>
            <Typography variant="h4">Product Name</Typography>
            <Typography variant="body1">Product Description</Typography>
            <Button variant="contained">Add Card</Button>
        </Box>
        <Box sx={{mr:2}} component="p">
            $19.99
        </Box>

        </Paper>
    )
}