var React = require('react');

module.exports = React.createClass({
    render: function() {
        return <html>
            <head>
            <title>Ohai</title>
            </head>
            <body>
            <div id="all">
            {this.props.children}
            </div>
            </body>
            <script src="http://localhost:3000/compassing.js"></script>
            </html>;
    }
})
