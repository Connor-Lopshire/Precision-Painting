import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"

export const Register = (props) => {
    const [customer, setCustomer] = useState({
        email: "",
        fullName: "",
        isStaff: false
    })
    let navigate = useNavigate()

    const registerNewUser = () => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customer)
        })
            .then(res => res.json())
            .then(createdUser => {
                if (createdUser.hasOwnProperty("id")) {
                    localStorage.setItem("paint_user", JSON.stringify({
                        id: createdUser.id,
                        staff: createdUser.isStaff
                    }))

                    navigate("/")
                }
            })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        return fetch(`http://localhost:8088/users?email=${customer.email}`)
            .then(res => res.json())
            .then(response => {
                if (response.length > 0) {
                    // Duplicate email. No good.
                    window.alert("Account with that email address already exists")
                }
                else {
                    // Good email, create user.
                    registerNewUser()
                }
            })
    }

    const updateCustomer = (evt) => {
        const copy = {...customer}
        copy[evt.target.id] = evt.target.value
        setCustomer(copy)
    }

    return (    <section className="hero is-fullheight has-background-grey">
    <div className="hero-body">
      <div className="container">
    <div className="columns is-centered">
  
    <div className="column is-centered is-5">
      <div className="">
        <p className="title is-1 has-text-centered pb-6 has-text-white">Precision Painting Compnay</p>
       
      </div>
    </div>
    </div>
        <div className="columns  is-centered">
          <div className="column is-5-tablet is-4-desktop is-3-widescreen">
            <form action="" className="box has-background-white-ter" onSubmit={handleRegister}>
            <div className="field">
                <label for="" className="label">Full Name</label>
                <div className="control has-icons-left">
                <input onChange={updateCustomer}
                           type="text" id="fullName" className="form-control"
                           placeholder="Enter your name" required autoFocus />
                  <span className="icon is-small is-left">
                    <i className="fa fa-envelope"></i>
                  </span>
              </div>
              </div>
              <div className="field">
                <label for="" className="label">Email</label>
                <div className="control has-icons-left">
                <input onChange={updateCustomer}
                        type="email" id="email" className="form-control"
                        placeholder="Email address" required />
                  <span className="icon is-small is-left">
                    <i className="fa fa-envelope"></i>
                  </span>
              </div>
              </div>
              <div className="field">
                <button type="submit" className="button is-dark ">
                  Register
                </button>
                </div>
               
              </form>
                </div>
              </div>
              </div>
              </div>
              
              </section>
      
      
        // <main style={{ textAlign: "center" }}>
        //     <form className="form--login" onSubmit={handleRegister}>
        //         <h1 className="h3 mb-3 font-weight-normal">Please Register for Precison Painting</h1>
        //         <fieldset>
        //             <label htmlFor="fullName"> Full Name </label>
        //             <input onChange={updateCustomer}
        //                    type="text" id="fullName" className="form-control"
        //                    placeholder="Enter your name" required autoFocus />
        //         </fieldset>
        //         <fieldset>
        //             <label htmlFor="email"> Email address </label>
        //             <input onChange={updateCustomer}
        //                 type="email" id="email" className="form-control"
        //                 placeholder="Email address" required />
        //         </fieldset>
               
        //         <fieldset>
        //             <button type="submit"> Register </button>
        //         </fieldset>
        //     </form>
        // </main>
    )
}

