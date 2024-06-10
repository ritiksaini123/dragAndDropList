import { useState, useEffect } from 'react';
import style from './scroll.module.css'
import { ClipLoader } from 'react-spinners';
export function ScrollPagination() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const recordsPerPage = 20
    const [pageno, setPageNo] = useState(1)
    const lastIndex = pageno * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    console.log(data)
    const getData = async () => {
        setLoading(true);
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/comments');
            const data = await response.json();
            if (data.length > 0) {
                const records = data.slice(firstIndex, lastIndex)
                setData((pre) => [...pre, ...records])
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, [pageno]);

    const controllScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 1
            >= document.documentElement.scrollHeight
        ) {
            setPageNo((prev) => prev + 1)
        }

    }
    useEffect(() => {
        window.addEventListener('scroll', controllScroll)
        console.log(window)
        // return () => window.removeEventListener('scroll', controllScroll)
    
    },[])
    return (
        <div className={style.container}>
            <div>

                {data.length > 0 ?
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>name</th>
                                <th>email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                data.map((element, index) => (


                                    <tr key={element.id}>
                                        
                                        <td>{element.id}</td>
                                        <td>{element.name}</td>
                                        <td>{element.email}</td>
                                    </tr>
                                ))}

                        </tbody>
                    </table>
                    : loading && <ClipLoader color="#36d7b7" />}




            </div>

        </div>
    );
}
