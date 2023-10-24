'use client'
import styles from './page.module.css'
import { useState } from 'react'
export default function Home() {
  const apple=()=>{
    alert("Fruit")
  }
  const [state,setState]=useState("")
  return (
    <main className={styles.main}>
        {/* <h1>Home Page</h1>
        <User name="Husain"/> */}
        <button onClick={apple}>Hello</button>
    </main>
  )
}

// const User=(props)=>{
//   return (
//     <div>
//       <h2>
//         User name {props.name} 
//       </h2>
//     </div>
//   )
// }