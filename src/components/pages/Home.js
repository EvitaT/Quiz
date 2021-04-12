import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Search from "../layout/Search";
import Pagination from "../layout/Pagination";

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
                <Search />
                <br />
                <table className="table border shadow">
                    <thead className="table-dark">
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
                            tours.map((tour, index) => {
                                return <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{tour.title}</td>
                                        <td>{tour.route}</td>
                                        <td>{tour.date}</td>
                                        <td>{tour.price}</td>
                                        <td>
                                            <Link className="btn btn-primary mr-2" to={`/tours/${tour.id}`}>View</Link>
                                            <Link className="btn btn-outline-dark mr-2" to={`/tours/edit/${tour.id}`}>Edit</Link>
                                            <a className="btn btn-danger" onClick={() => deleteTour(tour.id)}>Delete</a>
                                        </td>
                                </tr>
                            })
                       }
                    </tbody>
                </table>
                <Pagination />
            </div>
        </div>
    );
};

export default Home;