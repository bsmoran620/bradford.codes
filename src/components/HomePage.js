import React, {useState} from 'react';

export function HomePage() {

    return (
        <header id="header" class="header">
            <div class="container">
                <div class="row">
                    <div class="offset-xl-5 col-xl-4">
                        <div class="text-container">
                            <h1 class="h1-large">Welcome to my site!</h1>
                            <p class="p-large">I'm a Full Stack Engineer focused on building software startups</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="image-container">
                <img class="img-fluid" src="header-me.png" alt="alternative" />
            </div>
        </header>
    );
}