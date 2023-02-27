import links from '../utils/links';
import { NavLink } from 'react-router-dom';

function NavLinks({toggleSidebar}) {
    return (
        <div>
            <div className="nav-links">
                {links.map((link) => {
                    const { text, id, path, icon } = link;
                    return <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to={path} key={id} onClick={toggleSidebar}>
                        <span className='icon'>{icon}</span>
                        <span>{text}</span>
                    </NavLink>;
                })}
            </div>
        </div>
    );
}
export default NavLinks;