import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"

import "./KandyKorner.css"
import "bootstrap/dist/css/bootstrap.min.css"


class KandyKorner extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}

export default KandyKorner



// Chpt 4 Practice

// You are going to be building your own React application based off of what you do with these lesson plans for NSS Kennels.

// Create another React project in ~/workspace/javascript/exercises/kandykorner and cd into it.
// Initialize your app with npx create-react-app .
// Create a src/components directory.
// Create your application file and component in components/KandyKorner.js.
// Update index.js to render the <KandyKorner /> component, just like you did in Kennels.
// There are 4 collections of data you will be using for the Kandy Korner application.

// Store locations
// Employees
// Candy types
// Individual candies
// Define 4 arrays, filled with objects representing the above items, in your KandyKorner component. Add those arrays to the state of your application.

// Make sure that each individual candy object has a foreign key to a candy type.

// state = {
//     stores: storeArray,
//     employees: employeeArray,
//     candyTypes: candyTypeArray,
//     candies: candyArray
// }
// Then create the following components to display the data.

// <StoreList />
// <EmployeeList />
// <CandyList />
// And use them in the render() method of KandyKorner. Make sure you pass the appropriate state to each of the components.

// Lastly, access the data on this.props object in each component to display the data.