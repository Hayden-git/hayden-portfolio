// import React from 'react'

export default function Home() {
  return (
    
    <div>
        <h1>Simple SPA</h1>
            <ul className="header">
                <li><a href="/">Home</a></li>
                <li><a href="/stuff">Stuff</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        <div className="content">
            <h1>home page</h1>
          
            <nav className="nav-bar">
                <a className="logo" href="newIndex.html">Hayden Garry</a>

                <a className="nav-item" href="/projects">Projects</a>
                <a className="nav-item" href="/blog">Blog</a>
            </nav>

            <header className="home-hero">
                {/* <!-- Animated blobs w gradient --> */}
            <div className="animated-background w-embed">
                <div className="animatedwrapper">
                    <div className="blurryBlob blurryBlob--one"></div>
                    <div className="blurryBlob blurryBlob--two"></div>
                    <div className="blurryBlob blurryBlob--three"></div>
                </div>
            </div>


            <div className="container">
                <div>
                        <h1>
                            👋Hi! Im Hayden, a junior developer based in South West Florida...
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente cumque aliquid enim, impedit est autem corrupti ipsam odit quam, tenetur nostrum reiciendis eum ad at id eaque sequi nihil veniam harum, soluta doloribus non temporibus repellat. Corrupti vel minima asperiores perspiciatis quibusdam iusto praesentium obcaecati. Atque quas quae unde nulla.
                        </p>
                        <button >View on LinkedIn</button>
                        <button >View on GitHub</button>
                </div>
                    {/* <img src="./images/hayden_scotland.jpg" alt="A photo of the website author"> */}
            </div>
            </header>

        </div>
    </div>
  )
}
