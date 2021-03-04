import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { actAddStudentRequest, actGetStudentRequest, actUpdateStudentRequest } from './../../actions/index';
import { connect } from 'react-redux';

class StudentActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            sid: '',
            txtName: '',
            txtDate: '',
            txtMonth: '',
            txtYear: '',
            txtEmail: '',
            txtContact: '',
            gender: 'male',
        };
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onEditStudent(id);
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.itemEditing){
            var {itemEditing} = nextProps;
            this.setState({
                id : itemEditing.id,
                sid : itemEditing.sid,
                txtName : itemEditing.name,
                txtDate : itemEditing.dob.date,
                txtMonth : itemEditing.dob.month,
                txtYear : itemEditing.dob.year,
                txtEmail : itemEditing.email,
                txtContact : itemEditing.contacts,
                txtGender : itemEditing.gender,

            });
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }

    onSave = (e) => {
        e.preventDefault();
        var { id, sid, txtName, txtDate, txtMonth, txtYear, txtEmail, txtContact, gender } = this.state;
        var { history } = this.props;
        var student = {
            id : id,
            sid : sid,
            name : txtName,
            dob : {
                year : txtYear,
                month : txtMonth,
                date : txtDate
            },
            gender : gender,
            email : txtEmail,
            contacts : txtContact
        };
        if (id) {
            this.props.onUpdateStudent(student);
        } else {
            this.props.onAddStudent(student);
        }
        history.goBack();
    }

    render() {
        var { sid, txtName, txtDate, txtMonth, txtYear, txtEmail, txtContact, gender } = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>SID: </label>
                        <input
                            type="text"
                            className="form-control"
                            name="sid"
                            value={sid}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            name="txtName"
                            value={txtName}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>BirthDay: </label>
                        <input
                            type="number"
                            className="form-control"
                            name="txtDate"
                            value={txtDate}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>BirthMonth: </label>
                        <input
                            type="number"
                            className="form-control"
                            name="txtMonth"
                            value={txtMonth}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>BirthYear: </label>
                        <input
                            type="number"
                            className="form-control"
                            name="txtYear"
                            value={txtYear}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input
                            type="mail"
                            className="form-control"
                            name="txtEmail"
                            value={txtEmail}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Contact: </label>
                        <input
                            type="text"
                            className="form-control"
                            name="txtContact"
                            value={txtContact}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group" onChange={this.onChange}>
                        <label className="mr-10">
                            <input type="radio" name="gender" value="male" defaultChecked/>
                            Male
                        </label>
                        <label >
                            <input type="radio" name="gender" value="female"/>
                            Female
                        </label>

                    </div>
                    <Link to="/" className="btn btn-danger mr-10">
                        Back
                    </Link>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        itemEditing : state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddStudent : (student) => {
            dispatch(actAddStudentRequest(student));
        },
        onEditStudent : (id) => {
            dispatch(actGetStudentRequest(id));
        },
        onUpdateStudent : (student) => {
            dispatch(actUpdateStudentRequest(student));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentActionPage);
