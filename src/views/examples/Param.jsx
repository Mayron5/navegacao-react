

import { useParams } from 'react-router-dom'

const Param = () => {

    const { id } = useParams() // O nome é o mesmo usado no Content.jsx

    return (
        <div className="Param">
            <h1>Param</h1>
            <p>Valor: {id}</p>
        </div>
    )
}

export default Param