import React from 'react'

export default function Main() {
  return (
    <div>
        <section>
            <h1>Product </h1>
            <img style={{width:"500px",height:"300px"}} src='https://www.topgear.com/sites/default/files/2022/07/6_0.jpg'/>
            <ul>
                <li style={{listStyleType: "none"}}>
                    <img style={{width:"300px"}} src='https://www.topgear.com/sites/default/files/2022/07/6_0.jpg'/>
                </li>
                <li style={{listStyleType: "none"}}>
                    <img style={{width:"300px"}} src='https://www.topgear.com/sites/default/files/2022/07/6_0.jpg'/>
                </li>
                <li style={{listStyleType: "none"}}>
                    <img style={{width:"300px"}} src='https://www.topgear.com/sites/default/files/2022/07/6_0.jpg'/>
                </li>
                <li style={{listStyleType: "none"}}>
                    <img style={{width:"300px",listStyleType: "none"}} src='https://www.topgear.com/sites/default/files/2022/07/6_0.jpg'/>
                </li>
                <li style={{listStyleType: "none"}}>
                    <img style={{width:"300px"}} src='https://www.topgear.com/sites/default/files/2022/07/6_0.jpg'/>
                </li>
            </ul>

        </section>
        <section>
            <h1>Feelback Prodcut</h1>
            <form>
                Feelback Prodcut :
                <input for=""/>
                <button style={{margin : 10}}>Submit</button>
            </form>
        </section>
    </div>
  )
}
