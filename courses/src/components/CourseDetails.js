import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../App.css';
 

function CourseDetails (props)  {

    const id = useParams().id;

    console.log(id);

    const [course,setCourse] = useState([]);

    useEffect(() => {
        const getCourseDetails = async () => {
            const res = await fetch(
                `http://localhost:3004/courseDetails?id=${id}`
            );
            const data = await res.json();
            setCourse(data);
        };

        getCourseDetails();
    }, [1]);

    console.log(course);

    return (

          <div>
            {course.map((selectedCourse) => {
                return (
                    <>
                    <div className="courseinfo">
                        <table>
                                <br></br>
                                <tr className='cname'>{selectedCourse.title}</tr>
                                <br></br>
                                <br></br>
                                <tr className='cauth'>{selectedCourse.author}</tr>
                        </table>
                    </div>
                    <div className="coursedetails">
                        <h3>Course Details</h3>
                        <br></br>
                        <br></br>
                        <p>{selectedCourse.details}</p>
                    </div>
                    </>
                );
            })}
          </div>


    );

}

export default CourseDetails;