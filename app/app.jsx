var React = require('react');
import {RouteHandler} from 'react-router';


var App = React.createClass({
    render: function() {
        return (
            <div id="content">
                <section id="title">
                    <h1> compassing </h1>
                </section>
                <nav>
                    <ul>
                        <li><a href="/">Updates</a></li>
                        <li><a href="/photos">Photos</a></li>
                    </ul>
                </nav>
                <section id="content">
                    <RouteHandler posts={this.props.posts}/>
                </section>
            </div>
        );
    }
});


var Posts = React.createClass({
    statics: {
        dataDependency: () => {
            return ['Posts', 'all'];
        }
    },

    render: function() {
        return (
            <div>
                {this.props.posts.map((post) => <Post key={post.id} {...post}/>)}
            </div>
        );
    }
});


var Post = React.createClass({
    render: function() {
        return (
            <article>
                <header>
                    <h1>{this.props.title}</h1>
                    <p><time>{this.props.datePosted}</time></p>
                </header>
                <div dangerouslySetInnerHTML={{__html: this.props.body}}/>
            </article>
        );
    }
});        
    

export {App, Posts};
