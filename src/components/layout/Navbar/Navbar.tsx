'use client'

import { useEffect, useRef, useState } from 'react'
import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'

const Navbar = () => {
  const dropdownReference = useRef<HTMLDivElement | null>(null)
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false)

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownReference.current &&
      !dropdownReference.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick)

    return () => {
      window.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  return (
    <header data-name="dropdownReference" ref={dropdownReference}>
      <MobileNavbar
        isDropdownOpen={isDropdownOpen}
        setDropdownOpen={setDropdownOpen}
      />
      <DesktopNavbar />
    </header>
  )
}

export default Navbar
