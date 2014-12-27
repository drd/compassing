var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div id="content">
                <section id="title">
                    <h1> title </h1>
                </section>
                <nav>
                    <ul>
                        <li><a href="/">Updates</a></li>
                        <li><a href="/photos">Photo</a></li>
                    </ul>
                </nav>
                <section id="content">

                </section>
            </div>
        );
    }
});
