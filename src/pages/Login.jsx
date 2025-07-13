import React from 'react'
import Tamplate from "../components/Tamplate"
import SignUp from "../assets/SignUp.png"

export default function Login({setIsLoggedIn}) {
  return (
    <Tamplate
    title="Welcome Back"
    desc1="Build skills for today,tomorrow, and beyond."
    desc2="Education to future-proof your carreer."
    image={SignUp}
    formtype="login"
    setIsLoggedIn={setIsLoggedIn}
    />
  )
}
