<<<<<<< HEAD
import React, { useState } from 'react'
=======
import React from 'react'
>>>>>>> aae4c39573c4d38e21946b5cad21588e1069ce9f
import { useDispatch } from "react-redux";
import { setLogout } from "../state/state.js";
import { useNavigate } from 'react-router-dom';


<<<<<<< HEAD
const Header = ({dashboard, setSearch}) => {
=======
const Header = ({dashboard}) => {
>>>>>>> aae4c39573c4d38e21946b5cad21588e1069ce9f
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const logout = () =>{
        dispatch(setLogout());
        navigate("../login")
    }
<<<<<<< HEAD

    // const [search, setSearch] = useState("");
    
=======
>>>>>>> aae4c39573c4d38e21946b5cad21588e1069ce9f
  return (
    <nav class="navbar bg-light p-4">
            <div class="container-fluid">
              <h4>{dashboard}</h4>

              <div class="d-flex gap-3">
              <div class="input-group">
<<<<<<< HEAD
              <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"  onChange={(e) => setSearch(e.target.value)}/>
=======
              <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
>>>>>>> aae4c39573c4d38e21946b5cad21588e1069ce9f
              <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
              </div>
                <button class="btn btn-outline-success" type="submit"  onClick={logout}>Logout</button>
              </div>
            </div>
          </nav>
  )
}

export default Header