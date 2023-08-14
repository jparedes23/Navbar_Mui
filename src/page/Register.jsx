import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Register = () => {

    const [email, setEmail] = useState("")
    const [error, setError]= useState({
        error: false,
        message:"",
    })

    const validateEmail =(email) =>{
        const regex =/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return regex.test(email)
    }


    const handleSubmit =(e) =>{
        e.preventDefault();
       if (validateEmail (email)) {
        setError({
            error :false,
            message:'',
        });
        console.log("Email Correcto");
       } else{
        setError({
            error :true,
            message:"Email Incorrecto"
        })
       }
    }

  return (
    <>
    <h1>Register</h1>
    <Box component="form" onSubmit={handleSubmit}>

        <TextField
        id='email'
        label="Email" 
        type='email'
        variant='outlined'
        fullWidth
        required
        helperText={error.message}
        error={error.error}
        onChange={(e)=> setEmail(e.target.value)}
        />
        <Button
        type='sumit'
        variant='outlined'
        sx={{mt:2}}
        >
            Resgistrame
        </Button>
    </Box>
    </>
  )
}

export default Register