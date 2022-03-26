import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>
            <div>
                <h3>How React Works?</h3>
                <p>React is a JavaScript library that uses declarative programming to construct efficient user interfaces.
                    Using React, we can create single-page applications and mobile apps.
                    React uses virtual DOM, which is a JavaScript version of a DOM tree.
                    As a result, it will use the virtual representation of the DOM when reading or writing to it.
                    The virtual DOM will then attempt to update the browser's DOM in the most efficient manner possible.</p>
            </div>
            <div>
                <h3>Props Vs State</h3>
                <p>Props are used to pass data from one component to onother component.
                    On the other hand state is a local data storage, this is local component only.
                    It's can not be pass any component any where. if user interfare website, they can be change anything
                    in website interface it is called state. If user inteface in the ui state can be
                    change but props could not be change.
                </p>
            </div>
        </div>
    );
};

export default Blog;