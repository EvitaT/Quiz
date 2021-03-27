import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
    const [tours, setTour] = useState([]);
    useEffect(() => {
        loadTours();
    }, []);
    const loadTours = async () => {
        const result = await axios.get("http://localhost:3001/tours");
        setTour(result.data.reverse());
    };
    const deleteTour = async id => {
        await axios.delete(`http://localhost:3001/tours/${id}`);
        loadTours();
      };
    return (
        <div className ="container">
            <div className="py-4">
                <h1>Available Tours</h1>
                <hr />
                <table class="table border shadow">
                    <thead class="table-dark">
                        <tr>
                            <th scope="col">№</th>
                            <th scope="col">Title</th>
                            <th scope="col">Route</th>
                            <th scope="col">Date</th>
                            <th scope="col">Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                            tours.map((tour, index) => (
                                <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{tour.title}</td>
                                        <td>{tour.route}</td>
                                        <td>{tour.date}</td>
                                        <td>{tour.price}</td>
                                        <td>
                                            <Link class="btn btn-primary mr-2" to={`/tours/${tour.id}`}>View</Link>
                                            <Link class="btn btn-outline-dark mr-2" to={`/tours/edit/${tour.id}`}>Edit</Link>
                                            <Link class="btn btn-danger" onClick={() => deleteTour(tour.id)}>Delete</Link>
                                        </td>
                                </tr>
                            ))
                       }
                    </tbody>
                </table>
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Home;