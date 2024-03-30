import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import CertificatePost from './CertificatePost';

const Certificate = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json').then(res => res.json()).then(data => setBlogs(data));
    })
    
    return (
        <section className='blog'>
            <header>
                <h2 className="h2 article-title">Certificates</h2>
            </header>
            <div className='blog-posts'>
                <ul className="blog-posts-list">
                    {
                        blogs.map((post, index) => (
                            <CertificatePost ket={index}
                                post={post} />
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default Certificate
