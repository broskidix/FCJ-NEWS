import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Navbar = (props) => {
    const [text, settext] = useState("")

    const HandleOnchange = (event) => {
        settext(event.target.value);
    }
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">FCJNews</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" onClick={props.HandleCategory} aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item"><Link className="nav-link" onClick={props.HandleCategory} to="/business">Business</Link></li>
                                <li className="nav-item"><Link className="nav-link" onClick={props.HandleCategory} to="/entertainment">Entertainment</Link></li>
                                <li className="nav-item"><Link className="nav-link" onClick={props.HandleCategory} to="/general">General</Link></li>
                                <li className="nav-item"><Link className="nav-link" onClick={props.HandleCategory} to="/health">Health</Link></li>
                                <li className="nav-item"><Link className="nav-link" onClick={props.HandleCategory} to="/science">Science</Link></li>
                                <li className="nav-item"><Link className="nav-link" onClick={props.HandleCategory} to="/sports">Sports</Link></li>
                                <li className="nav-item"><Link className="nav-link" onClick={props.HandleCategory} to="/technology">Technology</Link></li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" value = {text} onChange={HandleOnchange} type="search" placeholder="Search" aria-label="Search" />
                                <button type = "button" disabled = {text.length === 0} className="btn btn-outline-success" onClick={()=>props.HandleSearchBtn(text)} required >Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
}

export default Navbar;
