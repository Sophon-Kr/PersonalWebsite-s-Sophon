import React from 'react'
import { connect } from 'react-redux'

export const Activity = (props) => {
  return (
    <div>Activity</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Activity)