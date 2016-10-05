import React from 'react';

class AboutPage extends React.Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <div id="page" className="logo"></div>
                    <h1>About FullStack App</h1>
                    <p>This application uses Spring Boot, React, React Router, Redux, ES6, Babel, Webpack and a variety of other helpful libraries.</p>
                    <p>Please see the list bellow for the full list of libraries. </p>
                </div>

                <h3>Production Dependencies</h3>
                <table className="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th><strong>Dependency</strong></th>
                        <th><strong>Use</strong></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>babel-polyfill</td>
                        <td>Polyfill for Babel features that cannot be transpiled</td>
                    </tr>
                    <tr>
                        <td>bootstrap</td>
                        <td>CSS Framework</td>
                    </tr>
                    <tr>
                        <td>jquery</td>
                        <td>Only used to support toastr</td>
                    </tr>
                    <tr>
                        <td>react</td>
                        <td>React library</td>
                    </tr>
                    <tr>
                        <td>react-dom</td>
                        <td>React library for DOM rendering</td>
                    </tr>
                    <tr>
                        <td>react-redux</td>
                        <td>Redux library for connecting React components to Redux</td>
                    </tr>
                    <tr>
                        <td>react-router</td>
                        <td>React library for routing</td>
                    </tr>
                    <tr>
                        <td>react-router-redux</td>
                        <td>Keep React Router in sync with Redux application state</td>
                    </tr>
                    <tr>
                        <td>redux</td>
                        <td>Library for unidirectional data flows</td>
                    </tr>
                    <tr>
                        <td>redux-thunk</td>
                        <td>Async redux library</td>
                    </tr>
                    <tr>
                        <td>toastr</td>
                        <td>Display messages to the user</td>
                    </tr>
                    <tr>
                        <td>whatwg-fetch</td>
                        <td>Polyfill for window.fetch features that cannot be transpiled</td>
                    </tr>
                    </tbody>
                </table>

                <h3>Development Dependencies</h3>
                <table className="table table-striped table-bordered" >
                    <thead>
                    <tr>
                        <th><strong>Dependency</strong></th>
                        <th><strong>Use</strong></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>babel-cli</td>
                        <td>Babel Command line interface</td>
                    </tr>
                    <tr>
                        <td>babel-core</td>
                        <td>Babel Core for transpiling the new JavaScript to old</td>
                    </tr>
                    <tr>
                        <td>babel-loader</td>
                        <td>Adds Babel support to Webpack</td>
                    </tr>
                    <tr>
                        <td>babel-plugin-react-display-name</td>
                        <td>Add displayName to React.createClass calls</td>
                    </tr>
                    <tr>
                        <td>babel-preset-es2015</td>
                        <td>Babel preset for ES2015</td>
                    </tr>
                    <tr>
                        <td>babel-preset-react</td>
                        <td>Add JSX support to Babel</td>
                    </tr>
                    <tr>
                        <td>babel-preset-react-hmre</td>
                        <td>Hot reloading preset for Babel</td>
                    </tr>
                    <tr>
                        <td>babel-register</td>
                        <td>Register Babel to transpile our Mocha tests</td>
                    </tr>
                    <tr>
                        <td>cheerio</td>
                        <td>Supports querying DOM with jQuery like syntax - Useful in testing and build process for HTML
                            manipulation
                        </td>
                    </tr>
                    <tr>
                        <td>colors</td>
                        <td>Adds color support to terminal</td>
                    </tr>
                    <tr>
                        <td>compression</td>
                        <td>Add gzip support to Express</td>
                    </tr>
                    <tr>
                        <td>cross-env</td>
                        <td>Cross-environment friendly way to handle environment variables</td>
                    </tr>
                    <tr>
                        <td>css-loader</td>
                        <td>Add CSS support to Webpack</td>
                    </tr>
                    <tr>
                        <td>enzyme</td>
                        <td>Simplified JavaScript Testing utilities for React</td>
                    </tr>
                    <tr>
                        <td>eslint</td>
                        <td>Lints JavaScript</td>
                    </tr>
                    <tr>
                        <td>eslint-plugin-import</td>
                        <td>Advanced linting of ES6 imports</td>
                    </tr>
                    <tr>
                        <td>eslint-plugin-react</td>
                        <td>Adds additional React-related rules to ESLint</td>
                    </tr>
                    <tr>
                        <td>eslint-watch</td>
                        <td>Add watch functionality to ESLint</td>
                    </tr>
                    <tr>
                        <td>eventsource-polyfill</td>
                        <td>Polyfill to support hot reloading in IE</td>
                    </tr>
                    <tr>
                        <td>expect</td>
                        <td>Assertion library for use with Mocha</td>
                    </tr>
                    <tr>
                        <td>express</td>
                        <td>Serves development and production builds</td>
                    </tr>
                    <tr>
                        <td>extract-text-webpack-plugin</td>
                        <td>Extracts CSS into separate file for production build</td>
                    </tr>
                    <tr>
                        <td>file-loader</td>
                        <td>Adds file loading support to Webpack</td>
                    </tr>
                    <tr>
                        <td>jsdom</td>
                        <td>In-memory DOM for testing</td>
                    </tr>
                    <tr>
                        <td>mocha</td>
                        <td>JavaScript testing library</td>
                    </tr>
                    <tr>
                        <td>nock</td>
                        <td>Mock HTTP requests for testing</td>
                    </tr>
                    <tr>
                        <td>npm-run-all</td>
                        <td>Display results of multiple commands on single command line</td>
                    </tr>
                    <tr>
                        <td>open</td>
                        <td>Open app in default browser</td>
                    </tr>
                    <tr>
                        <td>react-addons-test-utils</td>
                        <td>Adds React TestUtils</td>
                    </tr>
                    <tr>
                        <td>redux-immutable-state-invariant</td>
                        <td>Warn when Redux state is mutated</td>
                    </tr>
                    <tr>
                        <td>redux-mock-store</td>
                        <td>Mock Redux store for testing</td>
                    </tr>
                    <tr>
                        <td>rimraf</td>
                        <td>Delete files</td>
                    </tr>
                    <tr>
                        <td>style-loader</td>
                        <td>Add Style support to Webpack</td>
                    </tr>
                    <tr>
                        <td>url-loader</td>
                        <td>Add url loading support to Webpack</td>
                    </tr>
                    <tr>
                        <td>webpack</td>
                        <td>Bundler with plugin system and integrated development server</td>
                    </tr>
                    <tr>
                        <td>webpack-dev-middleware</td>
                        <td>Adds middleware support to webpack</td>
                    </tr>
                    <tr>
                        <td>webpack-hot-middleware</td>
                        <td>Adds hot reloading to webpack</td>
                    </tr>
                    <tr>
                        <td>copy-webpack-plugin</td>
                        <td>Copy files from to another destination</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default AboutPage;
