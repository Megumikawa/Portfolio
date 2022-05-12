import React from 'react';
import { useEffect, useState } from 'react';
import './ScrollUp.css';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';


function ScrollUp() {

  const [BackToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 150) {
        setBackToTopButton(true)
      } else {
        setBackToTopButton(false)
      }
      
    })
  },[])

  const scrollUp = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behaviort: 'smooth'
    })
  }

  return(
    <div>
      {BackToTopButton && (
        <button className="scrollUp-btn"
          onClick={scrollUp}
        ><KeyboardDoubleArrowUpIcon/></button>
      )}
      
    </div>
  )
}

export default ScrollUp;