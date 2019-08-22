import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Home extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }

    render() {
        return (
            <React.Fragment>
                <main>
                    <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                        <div className="col-md-5 p-lg-5 mx-auto my-5">
                        <h1 className="display-4 font-weight-normal">Punny headline</h1>
                        <p className="lead font-weight-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple's marketing pages.</p>
                        <a className="btn btn-outline-secondary" href="#">Coming soon</a>
                        </div>
                        <div className="product-device box-shadow d-none d-md-block" />
                        <div className="product-device product-device-2 box-shadow d-none d-md-block" />
                    </div>
                </main>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
