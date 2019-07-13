import React, { Component } from "react"
import EmployeeList from "./employees/EmployeeList"
import StoreList from "./stores/StoreList"
import CandyList from "./candy/CandyList"
import "../index"


class KandyKorner extends Component {


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
        candyTypes: this.candyTypesFromAPI ,
        candies: this.individualCandiesFromAPI
    }

    render() {
        return (
            <article className="KandyKorner">
                <StoreList stores={this.state.stores} />
                <EmployeeList employees={this.state.employees} />
                <CandyList candies={this.state.candies} />}
            </article>
        )
    }
}


    


    export default KandyKorner