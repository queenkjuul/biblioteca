import React from 'react';

const Bookshelf = () => {
    {/* the line below was included for testing the ErrorBoundary which was new in this branch */}
    {/* throw "testing React error boundary!" */}
    return (
        <section className="bookshelf__container" id="bookshelf__container">
            <h1 className="pagetitle">Release the Kraken of Knowledge!</h1>
        </section>
    )
}

export default Bookshelf;