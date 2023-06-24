import React from 'react'

const Footer = () => {
  const today=new Date();//first get date and then
  return (
    <footer className='Footer' >
        <p>Copyright &copy; {today.getFullYear()}</p>
        {/* get the year  */}
    </footer>
  )
}

export default Footer;