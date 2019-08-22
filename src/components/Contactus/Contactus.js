import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Contactus extends Component {
    render() {
        return (
            <main>
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div className="row">
                   Contactus
                </div>
            </div>
        </main>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Contactus)
