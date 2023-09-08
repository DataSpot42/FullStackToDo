import { Link } from 'react-router-dom'
import '../pages/style.css'

const Navbar = () => {
    return (
        <div>
            <header>
                <div className='navBar'>
                    
                    <Link className='navBarItems'  to='/'>
                        my list
                    
                    </Link>
                    
                    
                    <Link className='navBarItems' to='/add-todo'>
                        add item
                    </Link>
                    
                    

                </div>
            </header>
        </div>
    )
}

export default Navbar