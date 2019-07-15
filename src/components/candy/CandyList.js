import React, { Component } from 'react'

class CandyList extends Component {
    render() {
        return (
            <section className="candies">
            {
                this.props.candies.map(candies =>
                    <div key={candies.id}>
                        {candies.name} <br/>
                        of type: {" "} 
            {
                this.props.types.find(candyTypes => candies.typeId === candyTypes.id ).name
            }
                    </div>
                )
            }
            </section>
        )
    }
}

export default CandyList