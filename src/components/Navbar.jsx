import { Link } from 'react-router-dom';
import Button from '../lib/ui/button'
import { useNavigate } from 'react-router-dom';
function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className=' fixed w-full bg-white z-10 py-5  border-2   flex justify-center  gap-80 items-center'>
      
        <ul className=' flex gap-16 items-center  font-semibold   '>
          <li><Link to='/'>  <img src="/logo.png" alt="swift sage logo" className='logo-img' /></Link></li>
            <li className='link text-xl' >
            <Link to='/'>Home</Link>
            </li>
            <li className='link text-xl' >
            <Link to={'/servies'}>Servies</Link>
            </li>
            <li className='link text-xl'>
            <Link to={'/about'}>About</Link>
            </li>
            <li className='link text-xl'>
            <Link to={'/contact'}>Contact</Link>
            </li>
        </ul>
        <div className=' flex gap-5'>
         <Button text='Chat Now' onclick={()=>{ navigate('/contact')}} className=' w-1/2'/>
         <Button text='Get started' onclick={()=>{ navigate('/servies')}} className='w-1/2 text-nowrap'/>

        </div>
    </nav>
  )
}

export default Navbar;