import { useEffect, useState } from "react";

const Pagination = ({ pages, setCurrentPage, employee, currentEmployee }) => {


    const numberOfPages = [];



    for (let i = 1; i <= pages; i++) {
        numberOfPages.push(i);
    }

    const [currentButton, setCurrentButton] = useState(1);

    useEffect(() => {
        setCurrentPage(currentButton);
    }, [currentButton, setCurrentPage])



    return (
        <div className="clearfix">
            <div className="hint-text">Showing <b>{currentEmployee.length}</b> out of <b>{employee.length}</b> entries</div>
            <ul className="pagination">
                <li className={`${currentButton === 1 ? 'page-item disabled' : 'page-item'}`}><a href="#!" className="page-link"
                    onClick={() => setCurrentButton((prev) => prev !== 1 ? prev - 1 : prev)}>Previous</a></li>

                {
                    numberOfPages.map((page, index) => {
                        return (
                            <li key={index} className={`${currentButton === page ? 'page-item active' : 'page-item'}`} > <a href="#!" className="page-link"
                                onClick={() => { setCurrentButton(page) }}>{page}</a></li>
                        )
                    })
                }

                <li className={`${currentButton === numberOfPages.length ? 'page-item disabled' : 'page-item'}`}><a href="#!" className="page-link"
                    onClick={() => setCurrentButton((next) => next !== numberOfPages.length ? next + 1 : next)}>Next</a></li>

            </ul >
        </div >

    )
}

export default Pagination;












/*

<div class="clearfix">
    <div class="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
    <ul class="pagination">
        <li class="page-item disabled"><a href="#">Previous</a></li>
        <li class="page-item"><a href="#" class="page-link">1</a></li>
        <li class="page-item"><a href="#" class="page-link">2</a></li>
        <li class="page-item active"><a href="#" class="page-link">3</a></li>
        <li class="page-item"><a href="#" class="page-link">4</a></li>
        <li class="page-item"><a href="#" class="page-link">5</a></li>
        <li class="page-item"><a href="#" class="page-link">Next</a></li>
    </ul>
</div>


*/

