import { Button } from "../Button"
import style from '../../Components/news.module.css'
export function Pagination(props) {
    return (
        <div className={style.pagination}>
            <div>

                <Button onClick={props.prePage} value='Back' style={props.currentPage===1?{opacity:0.5}:{}} />
                {
                    props.numbers.map((element, index) => (
                        <Button onClick={() => 
                            props.activeBtn(element)
                            
                        }
                            value={element}  
                            style={props.currentPage===element?
                                { backgroundColor: 'rgb(0,130,255)', color: '#fff' }:{} } 
                                  />
                    ))
                }
                <Button onClick={props.nextPage} value='next' style={props.currentPage===props.noOfPages?{opacity:0.5}:{}}/>
            </div>

        </div>

    )
}