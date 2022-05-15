import "./Subscribe.css"

import vr from "./vr.jpg"

const Subscribe = () => {
    return (
        <section>
            <div className="subscribe">

                <div className="subs-img-box">
                    <img src={vr} alt="/" className="subs-image" />
                </div>

                <div className="subs-content-box">

                    <div className="subs-heading-box">
                        <h1 className="subs-heading">Sign up to explore our alternative reality</h1>
                    </div>

                    <div className="subs-form">
                        <form action="">
                            <input type="text" className="subs-input" placeholder="Name" />
                        </form>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Subscribe;