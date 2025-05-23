import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <p>&copy; 2025 SOMA. All Rights Reserved. </p>
        <div className="footer__links">
            {["About", "Privacy Policy", "Licensing", "Contact"].map((item) =>(
                <Link key={item}
                //replace any space with a dash
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className='footer__link'>
                    {item}
                </Link>

           ) )}
        </div>
    </div>
    
  )
}

export default Footer