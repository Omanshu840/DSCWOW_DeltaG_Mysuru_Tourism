import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPage(props) {

    let {blog_id} = useParams();
    
    return (
        <div>
            Blog Page {blog_id}
        </div>
    );
}

export default BlogPage;