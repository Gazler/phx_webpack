// We need to import the CSS so that Webpack will load it.
// The ExtractTextPlugin is used to separate it out into
// its own CSS file.
import css from '../css/app.css';

// Webpack automatically concatenates all files in your
// watched paths. Those paths can be configured as
// endpoints in "webpack.config.js".
//
// Import dependencies
//
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"
