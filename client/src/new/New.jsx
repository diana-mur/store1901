import { useState } from "react"
import { Link } from 'react-router-dom'

function New() {
    const [postInfo, setPostInfo] = useState({
        title: '',
        price: '',
    })
    const [image, setImage] = useState(null)
    const [imageName, setImageName] = useState('')

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
        setImageName(e.target.files[0].name);
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setPostInfo({ ...postInfo, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('file', image);
            formData.append('imageName', imageName);
            formData.append('title', postInfo.title);
            formData.append('price', postInfo.price);

            const response = await fetch('http://localhost:5000/api/newProduct', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log('Дфнные успешно отправлены на сервер');

                setPostInfo({
                    title: "",
                    price: ""
                });
                setImage(null);
                setImageName('')
            } else {
                console.error('Ошибка при отправке данных на сервер');
            }
        }
        catch {
            console.error('Ошибка при отправке данных: ', error);
        }
    }

    return (
        <>
            <Link to={'../products'}>Назад</Link>
            <h1>Добавить товар</h1>
            <form onSubmit={handleSubmit}>
                <label>Название:</label>
                <input
                    type="text"
                    name="title"
                    value={postInfo.title}
                    onChange={handleChange}
                    required
                />
                <label>Цена:</label>
                <input
                    type="text"
                    name="price"
                    value={postInfo.price}
                    onChange={handleChange}
                    required
                />
                <label>Изображение:</label>
                <input
                    type="file"
                    name="image"
                    onChange={handleImageChange}
                    required
                />
                <button type="submit">Отправить</button>
            </form>
        </>
    )
}

export default New