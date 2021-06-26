import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const AddBlog = () => {
    const { register, handleSubmit } = useForm();
    const [imageUrl, setImageUrl] = useState(null);

    const onSubmit = data => {
        const eventData = {
            title: data.title,
            content: data.content,
            img: imageUrl
        };
        const url = `https://cryptic-brushlands-65698.herokuapp.com/addBlog`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Blog added successfully')
                }
            })
    };
    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '5fb422405e02b3782f9ac55b36d77374');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <section className="container">
            <div className="row row-cols-1 row-cols-md-6 g-4">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 shadow p-4 bg-light">
                    <div>
                        <h3>Add a Blog</h3>
                        <br />
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h5>Blog Title</h5>
                            <input name="title" ref={register} className="form-control" />
                            <br />
                            <h5>Blog content</h5>
                            <textarea name="content" ref={register} rows="3" className="form-control" ></textarea>
                            <br />
                            <input type="file" onChange={handleImageUpload} />
                            <br />
                            <br />
                            <input className="btn btn-success" type="submit" value="Save" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddBlog;