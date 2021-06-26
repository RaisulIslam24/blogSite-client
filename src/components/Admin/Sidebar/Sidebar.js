import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTasks } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email, password: loggedInUser.password})
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between pt-4 px-4">
            <ul className="list-unstyled">
                {isAdmin && <div>
                    <li>
                        <Link to="/addBlog" className="text-white">
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Blog</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manageBlogs" className="text-white">
                            <FontAwesomeIcon icon={faTasks} /> <span>Manage Blogs</span>
                        </Link>
                    </li>
                </div>
                }
            </ul>
        </div>
    );
};

export default Sidebar;