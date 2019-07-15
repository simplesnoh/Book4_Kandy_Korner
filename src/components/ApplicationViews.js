import { Route } from 'react-router-dom'
import React, { Component } from "react"
import EmployeeList from "./employees/EmployeeList"
import StoreList from "./stores/StoreList"
import CandyList from "./candy/CandyList"


class ApplicationViews extends Component {


    locationsFromAPI = [
        { id: 1, name: "East Nashville" },
        { id: 2, name: "Donelson" },
        { id: 3, name: "The Nations" },
        { id: 4, name: "Belle Meade" }
    ]
    
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    candyTypesFromAPI = [
        { id: 1, name: "bar" },
        { id: 2, name: "gummy" },
        { id: 3, name: "sucker" },
        { id: 4, name: "bite size" }
    ]

    individualCandiesFromAPI = [
        { id: 1, name: "tootsie rolls", typeId: 4 },
        { id: 2, name: "kitkat", typeId: 1 },
        { id: 3, name: "dum dums", typeId: 3 },
        { id: 4, name: "sour patch kids", typeId: 2 }
    ]


    state = {
        stores: this.locationsFromAPI,
        employees: this.employeesFromAPI,
        types: this.candyTypesFromAPI ,
        candies: this.individualCandiesFromAPI
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <StoreList stores={this.state.stores} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route path="/candies" render={(props) => {
                    return <CandyList candies={this.state.candies} CandyTypes types={this.state.types} />
                }} />
            </React.Fragment>
        )
    }
}


export default ApplicationViews