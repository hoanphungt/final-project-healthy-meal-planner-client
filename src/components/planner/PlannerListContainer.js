import React from 'react'
import { connect } from 'react-redux';
import { PlannerList } from './PlannerList';
import { loadPlanner } from '../../actions/planner'
import { loadUser } from '../../actions/user'

import './Planner.css'

class PlannerListContainer extends React.Component {
    componentDidMount() {
        this.props.loadPlanner()
        this.props.loadUser()
    }

    render() {
        return (<div className='planner-list'>
            <PlannerList planner={this.props.planner}/>
        </div>)
    }
}

const mapStateToProps = (state) => ({
    planner: state.planner,
    user: state.user
})

export default connect(mapStateToProps, {loadPlanner, loadUser})(PlannerListContainer) 