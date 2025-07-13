import React from 'react'
import SignUp from "../assets/SignUp.png"
import Tamplate from '../components/Tamplate'


export default function Signup({setIsLoggedIn}) {
  return (
    <Tamplate
        title="join the millions to code with StudyNotion for free"
        desc1="Build skills for today,tomorrow, and beyond."
        desc2="Education to future-proof your carreer."
        image={SignUp}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
        />
  )
}
