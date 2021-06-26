import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const ManageBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://cryptic-brushlands-65698.herokuapp.com/Blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const deleteBlog = id => {
        fetch(`https://cryptic-brushlands-65698.herokuapp.com/deleteBlog/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => {
                const remainBlogs = blogs.filter(blog => blog._id !== result)
                setBlogs(remainBlogs)
                alert('Blog have been deleted successfully')
            })
    }

    return (
        <section className="container">
            <div className="row row-cols-1 row-cols-md-6 g-4">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 shadow p-4 bg-light">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Blog Title</th>
                                <th scope="col">Image</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        {
                            blogs.map(blog =>
                                <tbody>
                                    <tr>
                                        <td>{blog.title}</td>
                                        <td><img style={{ width: '80px' }} src={blog.img} alt="" /></td>
                                        <td><button onClick={() => deleteBlog(blog._id)} className="btn btn-danger">Delete</button></td>
                                    </tr>
                                </tbody>)
                        }
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ManageBlogs;