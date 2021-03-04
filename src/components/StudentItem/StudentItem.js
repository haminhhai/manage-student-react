import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StudentItem extends Component {

    onDelete = (id) => {
        if (confirm('Are you sure want to delete ?')) { //eslint-disable-line
            this.props.onDelete(id);
        }
    }

    render() {
        var { student } = this.props;
        return (
            <tr>
                <td>{student.sid }</td>
                <td>{student.name}</td>
                <td>{student.dob.date + '/' + student.dob.month + '/' + student.dob.year}</td>
                <td>{student.email}</td>
                <td>{student.gender}</td>
                <td>
                    <span>
                        abc-03123141
                    </span>
                </td>
                <td>
                    <Link
                        to={`/student/${student.id}/edit`}
                        className="btn btn-success mr-10"
                    >
                        Edit
                    </Link>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => this.onDelete(student.id)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        );
    }
}

export default StudentItem;
