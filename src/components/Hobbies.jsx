import React from 'react'
import { connect } from 'react-redux'

export const Hobbies = (props) => {
  return (
    <div>Hobbies</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Hobbies)