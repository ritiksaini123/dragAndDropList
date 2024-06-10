import { useEffect, useState, useR } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from './news.module.css'
import { DotLoader } from "react-spinners";
import { getdata } from "../redux/newsAction";
import { Pagination } from "./Pagination";
export const News = () => {
    const inputs = useSelector((state) => {
        return state
    })
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getdata())
    }, [])

    const [currentPage, setCurrentPage] = useState(1);
    const [noOfRecord, setNoOfRecords] = useState(5);
    const siblingCount = 1;

    const lastIndex = currentPage * noOfRecord;
    const firstIndex = lastIndex - noOfRecord;
    const records = inputs.data.slice(firstIndex, lastIndex);

    const noOfPages = Math.ceil(inputs.data.length / noOfRecord);
    const leftSiblingIndex = (currentPage - siblingCount);
    const rightSiblingIndex = (currentPage + siblingCount);
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < noOfPages - 1;

    let numbers = [];
    if (noOfPages <= 5) {
        for (let i = 1; i <= noOfPages; i++) {
            numbers.push(i);
        }
    } else if (!shouldShowLeftDots && shouldShowRightDots) {
        let leftItemCount = 3 + 2 * siblingCount;
       for(let i=1;i<=leftItemCount;i++){
        numbers.push(i)
       }
       numbers=[...numbers,('...'),noOfPages]
    }
    else if(shouldShowLeftDots &&!shouldShowRightDots){
     let rightItemCount=3+2*siblingCount
    for(let i=noOfPages-rightItemCount;i <=noOfPages;i++){
        numbers.push(i)
    }
     numbers=[1,('...'),...numbers]
    }
    else if(shouldShowLeftDots &&shouldShowRightDots){
        for(let i=leftSiblingIndex;i<=rightSiblingIndex;i++){
            numbers.push(i)
        }
        numbers=[1,('...'),...numbers,('...'),noOfPages]
    }
      else {
        for (let i = 1; i <= noOfPages; i++) {
            numbers.push(i);
        }
    }
    const prePage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextPage = () => {
        if (currentPage !== noOfPages) {
            setCurrentPage(currentPage + 1);
        }
    };
    const activeBtn = (element) => {
        if(element!==('...')){
        setCurrentPage(element);
        }
    };


    return (
        <div className={style.container}>
            <div>
            {inputs.loading ?
                <DotLoader color="#36d7b7" speedMultiplier='2' />
                : inputs.data.length > 0 ? <table>
                    <thead><tr><th>UserId</th><th>Id</th>
                        <th>Title</th></tr></thead>
                    <tbody>  {records.map((element, id) => (
                        <tr key={id}>
                            <td>{element.userId}</td>
                            <td>{element.id}</td>
                            <td>{element.title}</td>
                        </tr>
                    ))}</tbody></table> : <h3>something wrong</h3>
            }
            <div className={style.paginationContainer}>
            <Pagination
                        prePage={prePage}
                        nextPage={nextPage}
                        numbers={numbers}
                        activeBtn={activeBtn}
                        noOfRecord={noOfRecord}
                        currentPage={currentPage}
                        noOfPages={noOfPages}
                    />
</div>
        </div>
        </div>
    )
}