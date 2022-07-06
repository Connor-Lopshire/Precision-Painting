import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./Login.css"

export const Login = () => {
    const [email, set] = useState()
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        return fetch(`http://localhost:8088/users?email=${email}`)
            .then(res => res.json())
            .then(foundUsers => {
                if (foundUsers.length === 1) {
                    const user = foundUsers[0]
                    localStorage.setItem("paint_user", JSON.stringify({
                        id: user.id,
                        staff: user.isStaff
                    }))

                    navigate("/workOrders")
                }
                else {
                    window.alert("Invalid login")
                }
            })
    }

    return (
        // <main className="container--login">
        //     <section>
        //         <form className="form--login" onSubmit={handleLogin}>
        //             <h1>Precision Painting</h1>
        //             <h2>Please sign in</h2>
        //             <fieldset>
        //                 <label htmlFor="inputEmail"> Email address </label>
        //                 <input type="email"
        //                     value={email}
        //                     onChange={evt => set(evt.target.value)}
        //                     className="form-control"
        //                     placeholder="Email address"
        //                     required autoFocus />
        //             </fieldset>
        //             <fieldset>
        //                 <button type="submit">
        //                     Sign in
        //                 </button>
        //             </fieldset>
        //         </form>
        //     </section>
        //     <section className="link--register">
        //         <Link to="/register">Not a member yet?</Link>
        //     </section>
        // </main>
        <section className="hero is-fullheight has-background-grey">
  <div className="hero-body">
    <div className="container">
  <div className="columns is-centered">

  <div className="column is-centered is-5">
    <div className="">
      <p className="title is-1 has-text-centered pb-6 has-text-white">Precision Painting Company</p>
     
    </div>
  </div>
  </div>
      <div className="columns  is-centered">
        <div className="column is-5-tablet is-4-desktop is-3-widescreen">
          <form action="" className="box has-background-white-ter" onSubmit={handleLogin}>
            <div className="field">
              <label for="" className="label">Email</label>
              <div className="control has-icons-left">
              <input type="email"
                            value={email}
                            onChange={evt => set(evt.target.value)}
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                <span className="icon is-small is-left">
                  <i className="fa fa-envelope"></i>
                </span>
            </div>
            </div>
            <div className="field">
              <button type="submit" className="button is-dark ">
                Login
              </button>
              </div>
              <div className="field">
              <button className="button is-dark">
              <Link className="has-text-white" to="/register">Register</Link>
              </button>
              </div>
            </form>
              </div>
            </div>
            </div>
            </div>
            
            </section>
    )
}


{/* <section class="hero is-primary is-fullheight">
  <div class="hero-body">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
          <form action="" class="box">
            <div class="field">
              <label for="" class="label">Email</label>
              <div class="control has-icons-left">
                <input type="email" placeholder="e.g. bobsmith@gmail.com" class="input" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            </section> */}