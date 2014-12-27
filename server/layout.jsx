var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <html>
                <head>
                    <title>compassing.net</title>
                    <link href="http://fonts.googleapis.com/css?family=Crimson+Text:400,400italic" rel="stylesheet" type="text/css"/>
                    <link rel="stylesheet" href="/public/css/site.css"/>
                </head>
                <body>
                    <div id="all"
                         dangerouslySetInnerHTML={{__html: this.props.children}}/>
                    <script src="//:3000/compassing.js"></script>
                </body>
            </html>
        );
    }
});
