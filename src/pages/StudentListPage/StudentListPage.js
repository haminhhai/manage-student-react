import React, { Component } from 'react';
import StudentList from './../../components/StudentList/StudentList';
import StudentItem from '../../components/StudentItem/StudentItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    actFetchStudentsRequest,
    actDeleteStudentRequest,
    actGetStudentRequest,
    actFindStudentRequest
} from './../../actions/index';

class StudentListPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sid: '',
        };
    }

    componentDidMount() {
        this.props.fetchAllStudents();
    }

    onDelete = (id) => {
        this.props.onDeleteStudent(id);
    }

    onChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        });
    }

    onSave = (e) => {
        e.preventDefault();
        let { sid } = this.state;
        if(sid) this.props.getStudentById(sid);
    }

    render() {
        let { students } = this.props;
        let { sid } = this.state;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to="/student/add" className="btn btn-info mb-10">
                    Add New Student
                </Link> <br/>
                <button onClick={this.props.fetchAllStudents} className="btn btn-info mb-10">
                    Get All Students
                </button> <br/>
                <form onSubmit={this.onSave} >
                    <button className="btn btn-info mb-10">
                        Get Student By ID
                    </button>
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
                </form>
                <StudentList>
                    {this.showStudents(students)}
                </StudentList>
            </div>
        );
    }

    showStudents(students) {
        let result = null;
        if (students.length > 0) {
            result = students.map((student, index) => {
                return (
                    <StudentItem
                        key={index}
                        student={student}
                        index={index}
                        onDelete={this.onDelete}
                    />
                );
            });
        }
        return result;
    }

}

const mapStateToProps = state => {
    return {
        students: state.students
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllStudents : () => {
            dispatch(actFetchStudentsRequest());
        },
        onDeleteStudent : (id) => {
            dispatch(actDeleteStudentRequest(id));
        },
        getStudentById : (id) => {
            dispatch(actFindStudentRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentListPage);
