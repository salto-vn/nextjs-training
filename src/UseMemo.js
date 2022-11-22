import { useMemo, useRef, useState } from "react"


function UseMemo() {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProducts] = useState([])
    const nameRef = useRef()

    const handleSubmit = () => {
        setProducts([...products, {
            name,
            price: +price
        }])
        setName('')
        setPrice('')
        nameRef.current.focus()
    }

    console.log(products)

    const total = useMemo(() => {
        console.log('Tinh toan lai...')
        return products.reduce((result, product) => result + product.price, 0)
    }, [products])

    return (
        <>
            <br />
            <input
                ref={nameRef}
                value={name}
                placeholder="Enter name..."
                onChange={e => setName(e.target.value)}
            />
            <br />
            <input
                value={price}
                onChange={e => setPrice(e.target.value)}
                placeholder="Enter name..."
            />
            <br />
            <button onClick={handleSubmit}>Add</button>
            Total: {total}
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product.name} - {product.price}</li>
                ))}
            </ul>
        </>
    )
}

export default UseMemo
