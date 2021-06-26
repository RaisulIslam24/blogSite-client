import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BlogDetails.css';

const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState({});

    useEffect(() => {
        fetch('https://cryptic-brushlands-65698.herokuapp.com/blog/' + id)
            .then(res => res.json())
            .then(data => setBlog(data));
    }, [id])

    return (
        <section className="container bg-white p-4">
            <img className=" mt-3 mb-3 col-md-8 col-10" src={blog.img} alt="" />
            <h3>{blog.title}</h3>
            <p className="mt-4 text">{blog.content}</p>
        </section>
    );
};

export default BlogDetails;