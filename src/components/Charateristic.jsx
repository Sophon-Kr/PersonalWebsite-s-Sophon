import React from 'react'
import { connect } from 'react-redux'

export const Charateristic = (props) => {
  return (
    <div>Charateristic</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Charateristic)