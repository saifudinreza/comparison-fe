import { useState, useEffect, use } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
    const { id } = useParams();
    const [details, setDetails] = useState(null);

    const fetchDetails = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await response.json();
        setDetails(data);
    };

    useEffect(() => {
        fetchDetails();
    }, [])

    console.log(details);

    return (
        <div style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h1>Detail Page</h1>
            <p>Details for item with ID: {id}</p>
        </div>
    );
}

export default Detail;