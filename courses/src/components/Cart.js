import React from "react";
import '../App.css';

function Cart({ cart }) {

    let total_price = 0.0;
    let course_price = 0.0;

    return (
        <>
        <div>
            {cart.map((course) => {
                course_price = parseFloat(course.discounted_price && course.actual_price ? course.discounted_price : course.actual_price);
                total_price = total_price + course_price;
                return (
                    <div className="box">
                        <table>
                            <tr>
                                <th className='courseimage'></th>
                                <th className='coursename'>{course.title}</th>
                                <th className='coursename'>{course.author}</th>
                                <th className='discountedprice'>{course_price}</th>
                            </tr>
                        </table>
                    </div>
                );
            })}
        </div>
        <div className="checkout"><h3>Total Price : {total_price}</h3></div>
        </>
    );

}

export default Cart;