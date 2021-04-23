import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <div className="logo"><Link></Link></div>
      <nav>
        <ul>
          <li><Link>ABOUT</Link></li>
          <li><Link>PROJECTS</Link></li>
          <li><Link>CONTACT</Link></li>
        </ul>
      </nav>
    </div>
  )
}
