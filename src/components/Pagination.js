import React, { useState } from 'react'
import { UserListContext } from '../context/userContext'

const Pagination = () => {
    const [click,setClick] = useState(1);
    const { data, postPerPage, paginate } = UserListContext()
    const pageNum = []
    for (let i = 1; i <= Math.ceil(data.length / postPerPage); i++) {
        pageNum.push(i)
    }

    return (
        <div>
            <ul className='list'>
                {
                    pageNum.map((num) => (
                        <li key={num}>
                            <button className={click === num ? "active":"inActive"}>

                                <div onClick={() => {
                                    paginate(num)
                                    setClick(num)
                                }
                                }>
                                    {num}
                                </div>
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}


export default Pagination;
