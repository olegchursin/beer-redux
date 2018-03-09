import React from 'react'
import { connect } from 'react-redux'
import { addBeer } from '../actions'

class BeersList extends React.Component {

  state = {
    beerName: '',
    beerType: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addBeer(this.state)
  }

  render () {
    // console.log(this.props)
    return (
      <div>
        <h2>Add Beers</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="beerName" value={this.state.beerName} onChange={this.handleChange}/>
          <input type="text" name="beerType" value={this.state.beerType} onChange={this.handleChange}/>
          <input type="submit" value="Add Beer"/>
        </form>
        <div>
          <h3>Beers List</h3>
          {this.props.beers.map( b => <div key={b.beerName}><h4>{b.beerName}</h4><p>{b.beerType}</p></div>)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    beers: state.beers
  }
}

export default connect(mapStateToProps, {addBeer})(BeersList);
