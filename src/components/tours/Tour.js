import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Tour = () => {
  const [tour, setTour] = useState({
    title: "",
    route: "",
    date: "",
    price: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadTour();
  }, []);
  const loadTour = async () => {
    const res = await axios.get(`http://localhost:3001/tours/${id}`);
    setTour(res.data);
  };
  return (
    <div className="container py-4">
      <h1 className="display-4">Tour Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Title: {tour.title}</li>
        <li className="list-group-item">Place: {tour.route}</li>
        <li className="list-group-item">Date: {tour.date}</li>
        <li className="list-group-item">Price: {tour.price}</li>
      </ul>
      <hr />
      <Link className="btn btn-primary" to="/">
        Back to Home
      </Link>
    </div>
  );
};

export default Tour;