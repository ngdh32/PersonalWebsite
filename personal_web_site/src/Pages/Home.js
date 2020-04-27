import React, { useEffect } from 'react';
import '../Styles/Home.css'

function Home(){
    useEffect(() => {
        const elements = document.querySelectorAll(".default");
        elements.forEach(x => {
            x.classList.remove("default");
        })
    }, [])

    return (
        <div class="divTitle default">
            <p class="default">Hello! My name is Tim and I am a C# and ReactJS developer!</p>
        </div>
    )
}

export default Home;