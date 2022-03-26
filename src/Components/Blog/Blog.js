import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>
            <div>
                <h3>How React Works?</h3>
                <p>React is a JavaScript library that creates user interfaces in a predictable and efficient way using declarative code.We can use it to help build single page applications and mobile apps, or to build complex apps if you utilise it with other libraries.React works in declarative code. To show what we mean by declarative code, we want you to imagine the following code expressed as an app. What you picture could look like the screen below, with a navbar, a header, a filter, and a list. That's because each line of code declares what each element of the app is.</p>
            </div>
            <div>
                <h3>Difference between Props and State</h3>
               <table className='table table-striped'>
               <thead>
                    <tr>
                        <td className='fw-bold'> Props</td>
                        <td className='fw-bold'>State</td>
                    </tr>
                </thead>
                <tr>
                    <td>Props are Immutable</td>
                    <td>State are Mutable</td>
                </tr>
                <tr>
                    <td>We can pass properties from parent components</td>
                    <td>We can define states in the component itself</td>
                </tr>
                <tr>
                    <td>Determine the view upon creation, and then they remain static</td>
                    <td>State is set and updated by the object</td>
                </tr>
                <tr>
                    <td>Both are accessible as attributes of the component class and compose components with a different representation</td>
                    <td>Both are accessible as attributes of the component class and compose components with a different representation</td>
                </tr>
             
               </table>
               <hr />
            </div>
        </div>
    );
};

export default Blog;