import React from 'react'
import { connect } from 'react-redux';
import { PlannerList } from './PlannerList';
import './Planner.css'

class PlannerListContainer extends React.Component {
    render() {
        return (<div>
            <PlannerList planner={this.props.planner}/>
        </div>)
    }
}

const mapStateToProps = (state) => ({
    planner: state.planner
})

export default connect(mapStateToProps)(PlannerListContainer) 