import React from 'react';
import { useHistory } from 'react-router';

const BlogDetail = ({ blog }) => {
    const { _id } = blog;
    const history = useHistory()

    const handleService = (id) => {
        history.push(`/blog/${id}`)
    }

    return (
        <div onClick={() => handleService(_id)} className="col text-center">
            <div className="card">
                <img src={blog.img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{blog.title}</h5>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;