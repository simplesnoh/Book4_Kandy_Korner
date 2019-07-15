import React, { Component } from 'react'

class EmployeeList extends Component {
    render() {
        return (
            <section className="employees">
            {
                this.props.employees.map(employees =>
                    <div key={employees.id}>
                        {employees.name}
                    </div>
                )
            }
            </section>
        )
    }
}

export default EmployeeList