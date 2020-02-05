import React, {Component} from "react";
import { connect } from "react-redux"
import { add_reminder, remove_reminder, clear_reminders} from "../actions";
import moment from "moment";
import DatePicker from "react-datepicker";
import logo from "./../Reminders-icon.png"

import "react-datepicker/dist/react-datepicker.css";

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
                            <li key={ reminder.id } className="list-group-item" >
                                <div>{reminder.text}</div>
                                <div>{moment(new Date(reminder.date)).fromNow()}</div>
                                <div className="closeIcon btn btn-danger" onClick={() => this.props.remove_reminder(reminder.id) }>X</div>
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
                <img src={logo} alt=""/>
                <div className="reminder-title">
                    <h2>What should you do?</h2>
                </div>
                <input type="text" value={this.state.text} className="form-control" onChange={ (e) => this.setState({text: e.target.value}) } placeholder="Enter what your think" />
                <DatePicker
                    className="form-control"
                    placeholderText="Enter date"
                    value={this.state.date}
                    selected={this.state.date}
                    onChange={ (date) => this.setState({date: date})}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    timeCaption="time"
                    dateFormat="MMMM d, yyyy h:mm aa"
                />
                <button className="btn btn-success btn-block" onClick={
                    () => {
                        this.props.add_reminder(this.state.text, this.state.date)
                        this.setState({
                            text: "",
                            date: ""
                        })
                    }

                } >Add Reminder</button>
                <button className="clearReminder btn btn-danger btn-block" onClick={ () => this.props.clear_reminders() }>Clear Reminders</button>
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
}, {add_reminder, remove_reminder, clear_reminders})(App)