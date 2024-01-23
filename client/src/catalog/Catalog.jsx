import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Catalog() {
    const [list, setList] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then((res) => res.json())
            .then((json) => setList(json))
    }, [])

    return (
        <>
            <Link to={'/new'}>Добавить новый товар</Link>
            <div className="cat">
                {
                    list.map(el => (
                        <div
                            className="catCard"
                            key={el.id}
                            onClick={() => {
                                navigate(`/products/${el.id}`)
                            }}>
                            <div
                                className="catImg"
                            >
                                <img
                                    src={`src/uploads/` + el.image}
                                    alt="product's image" />
                            </div>
                            <h2>{el.title}</h2>
                            <p>${el.price}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Catalog