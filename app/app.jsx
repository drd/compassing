var React = require('react');


var App = React.createClass({
    render: function() {
        return (
            <div id="content">
                <section id="title">
                    <h1> titleish </h1>
                </section>
                <nav>
                    <ul>
                        <li><a href="/">Updates</a></li>
                        <li><a href="/photos">Photo</a></li>
                    </ul>
                </nav>
                <section id="content">
                    <Posts posts={this.props.posts}/>
                </section>
            </div>
        );
    }
});


var Posts = React.createClass({
    render: function() {
        return (
            <div>
                {this.props.posts.map((post) => <Post {...post}/>)}
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
    

export default App;
