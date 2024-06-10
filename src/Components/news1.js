// import { useEffect, useState, useR } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import style from './news.module.css'
// import Loader from "react-js-loader";
import { DotLoader } from "react-spinners";
// import { getdata } from "../redux/newsAction";
// import { GET_DATA_FAILURE, GET_DATA_SUCCESS, gettingDataRequest } from "../redux/newsAction";
// import InfiniteScroll from "react-infinite-scroll-component";
// export const News1 = () => {
//     const inputs = useSelector((state) => {
//         return state
//     })
//     const [datasource, setDataSource] = useState(Array.from({ length: 15 }))
//     // console.log(datasource)
//     const records = inputs.data.slice(0, datasource.length);
//     const [hasMore, SetHasMore] = useState(true)
//     const fecthMoreData = () => {
//         setTimeout(() => { setDataSource(datasource.concat(Array.from({ length: 15 }))) }, 3600)
//     }

import { useEffect, useState } from "react"

//     const dispatch = useDispatch()
//     useEffect(() => {
//         dispatch(getdata())
//     }, [])

//     return (

//         <InfiniteScroll
//             dataLength={datasource.length}
//             next={fecthMoreData}
//             hasMore={true}
//             loader={<h2>loading...</h2>}
//         >

//             <div className={style.container}>
//                 {inputs.loading ? <DotLoader color="#36d7b7" speedMultiplier='2' /> :
//                     inputs.data.length > 0 ? <table>
//                         <thead><tr><th>userId</th><th>Id</th>
//                             <th>title</th></tr></thead>
//                         <tbody>
//                             {records.map((element, id) => (
//                                 <tr key={id}>
//                                     <td>{element.userId}</td>
//                                     <td>{element.id}</td>
//                                     <td>{element.title}</td>
//                                 </tr>
//                                 // <h3 key={id}>
//                                 //     helo
//                                 // </h3>

//                             ))
//                             }
//                         </tbody></table> : <h3>something wrong</h3>}

//             </div>
//         </InfiniteScroll>
//     )

// }

export const News1=()=>{
    const [data,setData]=useState([])
    const [page,setPage]=useState(1)
    const [loading,setLoading]=useState(true)
    useEffect(async ( )=>{
const response=await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false')
const result= await response.json();
setLoading(false)
setData(prev=>[...prev,...result])
    },[page])
    const handleScroll=()=>{
  if(window.innerHeight+document.documentElement.scrollTop+1>=document.documentElement.scrollHeight){
    setLoading(true)
    setPage((prev)=>prev+15)
  }
    }
    useEffect(()=>
    {
        window.addEventListener('scroll',handleScroll)
        return ()=>window.removeEventListener('scroll',handleScroll)
    })
return(
    <div>
        <h2>currency</h2>
        <DotLoader color="#36d7b7" speedMultiplier='2' />
        <table>
                       <thead><tr><th>userId</th><th>Id</th>
                           <th>title</th></tr></thead>
                        <tbody>
                            {data.map((element, id) => (
                                <tr key={id}>
                                    <td>{element.id}</td>
                                    <td>{element.symbol}</td>
                                    <td>{element.name}</td>
                                </tr>
                            ))
                            }
                        </tbody></table>
    </div>
)
}