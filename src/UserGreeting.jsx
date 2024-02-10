import React from 'react'

export default function UserGreeting(props) {
  
   
       if (props.isloggedIn)
       {
        return(<><img src="https://static.vecteezy.com/system/resources/thumbnails/026/382/280/small/welcome-home-banner-illustration-welcome-home-design-print-ready-welcome-home-sign-printable-welcome-banner-template-stock-image-vector.jpg"></img><br></br></>
        )
       }
       else{
        return(<><img src="https://t4.ftcdn.net/jpg/02/33/17/49/360_F_233174944_z4gGZYCtzFe2PIQl4saotVpmP5Ikrtag.jpg"></img>
        </>)
       }
   
  
}
