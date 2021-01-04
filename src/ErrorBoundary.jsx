import React, { Component } from 'react';
import sadmac from '/assets/images/sadmac.png';


class ErrorBoundary extends Component {
    state = {
        error: false
    };

    static getDerivedStateFromError(error) {
        return { error };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.error) {
            return (
                <div className="grid notfound">
                    <h1 className="pagetitle">An error has occured in a child component!</h1>
                    <p>You can <a href="/">click here to try going back to the Home page</a></p>
                    <img className="sadmac" src={sadmac} alt="image of the Sad Macintosh icon from classic Mac OS" />
                </div>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;