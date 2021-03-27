import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory, useParams } from "react-router-dom";

const EditTour = () => {
  let history = useHistory();
  const { id } = useParams();
  const [tour, setTour] = useState({
    title: "",
    route: "",
    date: "",
    price: ""
  });
  const { title, route, date, price } = tour;
  const onInputChange = e => {
    setTour({ ...tour, [e.target.title]: e.target.value });
  };

  useEffect(() => {
    loadTour();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/Tours/${id}`, tour);
    history.push("/");
  };

  const loadTour = async () => {
    const result = await axios.get(`http://localhost:3001/tours/${id}`);
    setTour(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit a Tour</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeHolder="Enter Title"
              name="title"
              value={title}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Route"
              name="route"
              value={route}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Date"
              name="date"
              value={date}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Price"
              name="price"
              value={price}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-danger btn-block">Update Tour</button>
          <Link className="btn btn-primary btn-block" to="/">
            Back to Home
          </Link>
        </form>
      </div>
    </div>
  );
};

export default EditTour;