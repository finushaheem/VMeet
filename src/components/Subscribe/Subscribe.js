import "./Subscribe.css";

const Subscribe = () => {
  return (
    <section className="subSection">
      <div className="subscribe">
        <div className="subs-img-box">
          <img src="assets/Images/vr.png" alt="/" className="subs-image" />
        </div>
        <div className="subs-content-box">
          <div className="subs-heading-box">
            <h1 className="subs-heading">
              Sign up to explore our alternative reality
            </h1>
          </div>
          <div className="subs-form">
            <div className="sub-form-headingBox">
              <h3 className="sub-form-heading">Sign in to View</h3>
            </div>
            <form action="" className="form">
              <input
                type="text"
                className="subs-input"
                placeholder="First Name"
              />
              <input
                type="text"
                className="subs-input"
                placeholder="Last Name"
              />
              <input type="email" className="subs-input" placeholder="Email" />
              <input
                type="password"
                className="subs-input"
                placeholder="Password"
              />
              <button>submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
