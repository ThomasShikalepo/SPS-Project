import { Bell, BookOpen } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NonDashboardNavbar = () => {
  return (
    
    <nav className="nondashboard-navbar">
      <div className="nondashboard-navbar__container">
        <div className="nondashboard-navbar__search">
      {/*link to homepage */}
        <Link href="/" className= "nondashboard-navbar__brand">
        SOMA
        </Link>
        <div className="flex items-center gap-4">
          <div className="relative group">

            {/*takes to search page*/}
            <Link href="/search" 
            className="nondashboard-navbar__search-input">
              {/*search courses set to be hidden for small screens*/}
              <span className="hidden sm:inline">Search Courses</span>
              {/*Search hidden for small screens*/}
              <span className="sm:hidden">Search</span>
              
              </Link>
              {/*Book open is an icon from lucide react*/}
              <BookOpen className="nondashboard-navbar__search-icon" size={18}/>
            
          </div>
        </div>
        </div>
      </div>

      {/*right side of screen*/}
<div className="nondashboard-navbar__actions">
  <button className="nondashboard-navbar__notification-button">

  <span className="nondashboard-navbar__notification-indicator"></span>
  {/*bell icon for notifications*/}
  <Bell className="nondashboard-navbar__notification-icon"/>
  </button>

  {/*Sign in Buttons */}
</div>
    </nav>
  )
}

export default NonDashboardNavbar