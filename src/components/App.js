import React, {Component} from "react";
import { connect } from "react-redux"
import { add_reminder} from "../actions";

class App extends Component{
    state = {
        text: "",
        date: new Date()
    }

    renderReminders = () => {
        const {reminders} = this.props
        return (
            <ul className="list-group">
                {
                    reminders.map( (reminder) => {
                        return (
                            <li className="list-group-item" key={reminder.id}>
                                {reminder.text}
                            </li>
                        )
                    } )
                }
            </ul>
        )

    }

    render() {
        return (
            <div className='App'>
                <img src="" alt=""/>
                <div className="remind-title">
                    <h2>What should you do?</h2>
                </div>
                <input type="text" className="form-control" onChange={ (e) => this.setState({text: e.target.value}) } placeholder="Enter what your think" />
                <input type="datetime-local" className="form-control" onChange={(e) => this.setState({date: e.target.value}) } />
                <button className="btn btn-success btn-block" onClick={ () => this.props.add_reminder(this.state.text, this.state.date) } >Add Reminder</button>
                <button className="btn btn-danger btn-block">Clear Reminders</button>
                { this.renderReminders() }
            </div>
        )
    }
}

/*function mapStateToProps(state){
    return {
        text: state.text,
        date: state.date,
        id: state.id
    }
}*/

/*function mapDispatchToProps(dispatch){
    return {
        add_reminder: () => dispatch(add_reminder())
    }
}*/

export default connect((state) => {
    return {
        reminders: state
    }
}, {add_reminder})(App)