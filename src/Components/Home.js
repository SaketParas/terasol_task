import React, { Component } from 'react'
import Navbar from './Navbar'
import BottomNav from './BottomNav'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            password: "",
            age: "",
        }
    }
   
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        let user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            age: this.state.age,
        }
        localStorage.setItem("user", JSON.stringify(user));
        this.reset()
    }
    reset = () => {
        this.setState({
            name: "",
            email: "",
            password: "",
            age: "",
        })
    }
    render() {

        return (
            <div>
                <Navbar />
                <div className="container p-5">
                    <div class="card ">
                        <div class="card-body">
                            <div class="card mb-3">
                                <div class="row no-gutters">
                                    <div class="col-md-4">
                                        <img src="https://www.thestatesman.com/wp-content/uploads/2018/06/Coding-300x200.jpg" class="card-img" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <form onSubmit={this.handleSubmit}>
                                                <div class="row">
                                                    <div class="col">
                                                        Name <input type="name" class="form-control" pattern="[a-z]{2,32}" title="Only chracters within length 32" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange} required/>
                                                    </div>
                                                    <div class="col">
                                                        Email <input type="email" class="form-control" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} required/>
                                                    </div>
                                                </div>
                                                <div class="row mt-2">
                                                    <div class="col">
                                                        Password<input type="password" class="form-control"  pattern="[a-z]{4,8}" title="4 to 8 lowercase letters"
                                                         placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} required/>
                                                    </div>
                                                    <div class="col">
                                                        Age <input type="number" class="form-control" placeholder="Age" min="22"  name="age" value={this.state.age} onChange={this.handleChange} required/>
                                                    </div>
                                                </div>
                                                <button type="submit" class="btn btn-outline-danger mt-2" data-toggle="modal" data-target="#exampleModal">Submit</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.name && this.state.password && this.state.email && this.state.age != "" ?
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h6 class="modal-title" id="exampleModalLabel">Hey, {this.state.name} your response is recorded.</h6>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <p class="text-secondary">Thanks alot {this.state.name} !!</p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div> : null}
                <BottomNav />
            </div>
        )
    }
}

export default Home
