import React from 'react';
import { NavLink } from 'react-router-dom';



export default function Default() {
    return (
        <div className="container">
             <div className="d-flex justify-content-center align-items-center mt-4 py-4">
                <h1 style={{color:'#C8C8C8'}}>404 Page Not Found</h1>
            </div>
            <NavLink className="nav-item nav-link " to="/home">
                <button type="button" className="btn btn-lg btn-block font-weight-bold buttons-color-default-page mt-4 py-3">
                    Let Me Take You Home
                    </button>
            </NavLink>
        </div>
    )
}
