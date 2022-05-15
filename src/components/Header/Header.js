import "./Header.css"

import vmeet from "./Logo-vmeet.png"

const Header = () => {
    return (
        <section>
            <div className="header">
                <img src={vmeet} className="logo" alt="/" />
            </div>
        </section>
    )
}

export default Header;