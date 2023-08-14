import { Container, Grid } from "@mui/material"
import Product from "./components/Product"
import BluuCard from "./components/BluuCard"
import Navbar from "./components/navbar/Navbar"
import { Route, Routes } from "react-router-dom"
import Register from "./page/Register"
import Home from "./page/Home"
import Login from "./page/Login"
import InboxIcon from '@mui/icons-material/Inbox'
import DraftsIcon from '@mui/icons-material/Drafts'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const navLinksArrays =[
  {
      title: "Home", 
      path:"/",
      icon: <InboxIcon/>
  },
  {
      title: "Login", 
      path:"/login",
      icon: <DraftsIcon/>
  },
  {
      title: "Register", 
      path:"/register",
      icon: <EmojiEmotionsIcon/>
  },
]



function App() {

  return (
    <>
    <Navbar navLinksArrays={navLinksArrays}/>
   <Container sx={{mt:5}}>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
   </Container>
    </>
  )
}

export default App
