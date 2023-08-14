import { Button } from "@mui/material"
import { useSnackbar } from "notistack"

const Login = () => {
    const {enqueueSnackbar} =useSnackbar()

    const handleClick =()=>{
        enqueueSnackbar("Suscribete a mi canal",{
            variant:"success",
            anchorOrigin:{
                vertical:'top',
                horizontal:'right'
            }
        })
    }

  return (
    <>
    <h1>Login</h1>
    <Button
    variant="contained"
    onClick={handleClick}
    >Open</Button>
    </>
  )
}

export default Login