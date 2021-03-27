import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className ="container">
            <div className="py-4">
                <h1>Available tours</h1>
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
                            <tr>
                                <th scope="row">{1}</th>
                                <td>Belarusian State Circus</td>
                                <td>Minsk</td>
                                <td>01.05.2021 - 01.05.2021</td>
                                <td>75 BYN</td>
                                <td>
                                    <Link class="btn btn-primary mr-2">View</Link>
                                    <Link class="btn btn-outline-secondary mr-2">Edit</Link>
                                    <Link class="btn btn-danger">Delete</Link>
                                </td>
                            </tr>
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;