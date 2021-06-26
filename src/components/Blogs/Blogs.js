import React, { useEffect, useState } from 'react';
import BlogDetail from '../BlogDetail/BlogDetail';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('https://cryptic-brushlands-65698.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <section className="container mt-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    blogs.map(blog => <BlogDetail blog={blog}></BlogDetail>)
                }
            </div>
        </section>
    );
};

export default Blogs;