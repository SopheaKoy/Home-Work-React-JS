import React from 'react'

export default function () {
  return (
    <div>
        <ul style={{display:"flex",backgroundColor:"yellow",width:"95%",height:"50px",alignItem:"center"}}>
            <li style={{margin:"12px", listStyleType: "none"}}>
                <a href="/" style={{textDecoration:'none',fontSize:20}}>Home</a>
            </li>
            <li style={{margin:"12px" ,  listStyleType: "none"}}>
                <a href="/" style={{textDecoration:'none',fontSize:20}}>Servies</a>
            </li>
            <li style={{margin:"12px", listStyleType: "none",fontSize:20}}>
                <a href="/" style={{textDecoration:'none',fontSize:20}}>About Us</a>
            </li>
            <li style={{margin:"12px", listStyleType: "none"}}>
                <a href="/" style={{textDecoration:'none',fontSize:20}}>Contact Us</a>
            </li>
        </ul>

    </div>
  )
}
