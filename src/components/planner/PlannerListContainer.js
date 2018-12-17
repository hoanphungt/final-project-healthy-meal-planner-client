import React from 'react'
import { connect } from 'react-redux';
import { PlannerList } from './PlannerList';
import { loadPlanner } from '../../actions/planner'

import './Planner.css'

class PlannerListContainer extends React.Component {
    componentDidMount() {
        this.props.loadPlanner()
    }

    render() {
        return (<div>
            <PlannerList planner={this.props.planner}/>
        </div>)
    }
}

const mapStateToProps = (state) => ({
    planner: state.planner,
    user: state.user
})

export default connect(mapStateToProps, {loadPlanner})(PlannerListContainer) 