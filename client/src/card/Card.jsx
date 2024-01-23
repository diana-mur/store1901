import { useContext, useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"

function Card() {
    const { id } = useParams()
    const [info, setInfo] = useState([])

    useEffect(() => {
        const product = async () => {
            const response = await axios.post(`http://localhost:5000/api/products/${id}`)
            setInfo(response.data)
        }
        product()
    }, [])

    return (
        <>
            <Link to={'../products'}>Назад</Link>
            <img src={`../src/uploads/` + info.image} alt="" />
            <h1>{info.title}</h1>
            <p>${info.price}</p>
        </>
    )
}
export default Card