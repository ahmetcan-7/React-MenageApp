import Employee from "./Employee";
import AddForm from './AddForm';
import { useState, useContext, useEffect } from "react";
import { Button, Modal, Alert } from "react-bootstrap"
import { EmployeeContext } from "../context/EmployeeContext"
import Pagination from "./Pagination";


const EmployeeList = () => {


    const { sortedEmployees } = useContext(EmployeeContext);
    const [show, setShow] = useState(false);
    const [AlertShow, setAlertShow] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [employeesPerPage, setEmployeesPerPage] = useState(2);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleAlert = () => {
        setAlertShow(true);
        setTimeout(() => {
            setAlertShow(false);
        }, 2000)
    }

    useEffect(() => {
        handleClose();

        return () => {
            handleAlert();
        };
    }, [sortedEmployees]);

    const indexOfLastEmployee = currentPage * employeesPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    const currentEmployee = sortedEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);
    const totalPageNum = Math.ceil(sortedEmployees.length / employeesPerPage);

    return (

        <>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Manage <b>Employees</b></h2>
                    </div>
                    <div className="col-sm-6">
                        <Button className="btn btn-success text-white" onClick={handleShow} data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></Button>
                    </div>
                </div>
            </div>

            <Alert show={AlertShow} variant="success" onClose={() => setAlertShow(false)} dismissible>
                Employee is success
            </Alert>

            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        currentEmployee.map((employee) => (
                            <tr key={employee.id}>
                                <Employee employee={employee} />

                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <Pagination
                pages={totalPageNum}
                setCurrentPage={setCurrentPage}
                currentEmployee={currentEmployee}
                employee={sortedEmployees} />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="modal-header" closeButton>
                    <Modal.Title>
                        Add Employee
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close Modal
                </Button>
                </Modal.Footer>
            </Modal>
        </>



    )
}

export default EmployeeList;