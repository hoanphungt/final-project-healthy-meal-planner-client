import React from 'react'
import { connect } from 'react-redux';
import { PlannerList } from './PlannerList';

class PlannerListContainer extends React.Component {
    render() {
        return (<div>
            <PlannerList planner={this.props.planner}/>
            <button onClick={() => this.props.history.push('/logout')}>Logout</button>
        </div>)
    }
}

const mapStateToProps = (state) => ({
    planner: state.planner
})

export default connect(mapStateToProps)(PlannerListContainer) 