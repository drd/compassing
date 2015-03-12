var React = require('react');
import {Link, RouteHandler} from 'react-router';

let model = require('./model');

var App = React.createClass({
    render: function() {
        return (
            <div id="content">
                <section id="title">
                    <h1> compassing </h1>
                </section>
                <nav>
                    <ul>
                        <li><Link to="App">Updates</Link></li>
                        <li><Link to="NewPost">Post</Link></li>
                    </ul>
                </nav>
                <section id="content">
                    <RouteHandler {...this.props}/>
                </section>
            </div>
        );
    }
});


var Posts = React.createClass({
    statics: {
        dataDependency: async function(params, model) {
            return { posts: await model.Post.all() };
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
    statics: {
        dataDependency: async function(params, model) {
            return await model.Post.get(params.id);
        }
    },

    render: function() {
        return (
            <article>
                <header>
                    <h1><Link to="ViewPost" params={{id: this.props.id}}>{this.props.title}</Link></h1>
                    <p><time>{this.props.datePosted}</time></p>
                    <p><Link to="EditPost" params={{id: this.props.id}}>Edit</Link></p>
                </header>
                <div dangerouslySetInnerHTML={{__html: this.props.body}}/>
            </article>
        );
    }
});        


var Edit = React.createClass({
    statics: {
        dataDependency: async function(params, model) {
            return params.id ? await model.Post.get(params.id) : null;
        }
    },

    getInitialState() {
        return Object.assign({}, this.props);
    },
    
    changeHandlerFor(field) {
        return e => this.setState({[field]: e.target.value});
    },

    submitPost() {
        model.Post.save(this.props.id, this.state);
    },

    render() {
        return (
            <div>
                <h2>Edit &ldquo;{this.state.title}&rdquo;</h2>
                <div className="fields">
                    <div className="field">
                        <input value={this.state.title} onChange={this.changeHandlerFor('title')} />
                    </div>
                    <div className="field">
                        <textarea value={this.state.body} onChange={this.changeHandlerFor('body')} />
                    </div>
                    <button onClick={this.submitPost}>Save</button>
                </div>
                <p>{this.props.id && <Link to="ViewPost" params={{id: this.props.id}}>&laquo; Back</Link>}</p>
            </div>
        );
    }
});


export {App, Posts, Post, Edit};
