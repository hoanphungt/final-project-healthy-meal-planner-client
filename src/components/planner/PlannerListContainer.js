import React from 'react'
import { connect } from 'react-redux';
import { PlannerList } from './PlannerList';

class PlannerListContainer extends React.Component {
    render() {
        return <PlannerList planner={this.props.planner}/>
    }
}

const mapStateToProps = (state) => ({
    planner: state.planner
})

export default connect(mapStateToProps)(PlannerListContainer) 