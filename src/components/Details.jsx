import React from 'react';

const Details = () => {
    return (
        <main class="details__container">
            <article class="details__card">
                <section class="details__item--title">Brave New World, a Book About a Happy and Fulfilling Future for Humanity</section>
                <section class="details__card--left-set">
                    <img class="details__item--coverimg" src="assets/images/placeholder-cover2.png" alt="Cover of the book Brave New World" />
                    <div class="details__item--rating">
                        &#9733 &#9733 &#9733 &#9733 &#9734
                    </div>
                </section>
                    <section class="details__item--author">Aldous Huxley</section>
                    <section class="details__item--publishDate">Published: 1932</section>
                    <section class="details__item--pageCount">311 pages</section>
                    <section class="details__item--synopsis">
                        <p>A book about stuff that happens, and the stuff that happens are things that happened to have happened in the book.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </section>
                <section class="details__controls">
                    <a class="btn" href="edit.html">Edit Book</a>
                    <a class="btn btn--secondary details__back" href="bookshelf.html">Back to Bookshelf</a>
                </section>
            </article>
        </main>
    )
}

export default Details;