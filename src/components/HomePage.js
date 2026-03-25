import React from 'react';

export function HomePage() {

    return (
        <header id="header" className="header">
            <div className="container">
                <div className="row">
                    <div className="offset-xl-5 col-xl-4">
                        <div className="text-container">
                            <h1 className="h1-large">Welcome to my site!</h1>
                            <p className="p-large">I'm a Full Stack Engineer focused on building software startups</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="image-container">
                <img className="img-fluid" src="/header-me.png" alt="alternative" />
            </div>
        </header>
    );
}