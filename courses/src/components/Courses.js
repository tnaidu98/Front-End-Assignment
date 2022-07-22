import '../App.css';
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import Axios from "axios";
import star from '../images/star.png';
import CourseDetails from './CourseDetails';
import App from '../App';
import rightarrow from '../images/right-arrow.png';
import { Link } from 'react-router-dom';

function Courses({ handleClick }) {

    function clickCourse() {
        <CourseDetails />
    }

    const [courses, setCourses] = useState([]);

    const [pageCount, setpageCount] = useState(0);

    let limit = 5;

    useEffect(() => {
        const getCourses = async () => {
            const res = await fetch(
                `http://localhost:3004/courseDetails?_page=1&_limit=${limit}`
            );
            const data = await res.json();
            const total = res.headers.get("x-total-count");
            setpageCount(Math.ceil(total / limit));
            setCourses(data);
        };

        getCourses();
    }, [limit]);

    const fetchCourses = async (currentPage) => {
        const res = await fetch(
            `http://localhost:3004/courseDetails?_page=${currentPage}&_limit=${limit}`
        );
        const data = await res.json();
        return data;
    };

    const handlePageClick = async (data) => {
        console.log(data.selected);

        let currentPage = data.selected + 1;

        const coursesFromServer = await fetchCourses(currentPage);

        setCourses(coursesFromServer);


    };

    return (

        <div>
            <div><h3 style={{"text-align": "left"}}>All Courses</h3></div>
            <div>
                {courses.map((course) => {
                    return (
                        <div className="box">
                            <table>
                                <tr>
                                    <th className='courseimage'></th>
                                    <th className='coursename'>{course.title}</th>
                                    <th className='coursename'>{course.author}</th>
                                    <th className='star'></th>
                                    <th className='discountedprice'>{course.discounted_price && course.actual_price ? course.discounted_price : course.actual_price}</th>
                                    <th className='actualprice'>{course.discounted_price != null ? course.actual_price : null}</th>
                                    <th><button className='theme' onClick={() => handleClick(course)}>ADD TO CART</button></th>
                                    <th className='arrow'><Link to={'/coursedetails/'+course.id}><img src={rightarrow} /></Link></th>
                                </tr>
                            </table>
                        </div>
                    );
                })}
            </div>

            <ReactPaginate

                previousLabel={'<<'}
                nextLabel={'>>'}
                pageCount={3}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                activeClassName={"active"}

            />
        </div>

    );

}

export default Courses;