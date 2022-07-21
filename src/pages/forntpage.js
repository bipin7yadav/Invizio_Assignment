import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";
import { UserListContext } from "../context/userContext";
import { toast } from 'react-toastify';

import Pagination from "../components/Pagination";

export default function FrontPage() {

    let { filterState: { bySort }, dispatchFilter, currentPosts } = UserListContext()






    const filteredData = () => {
        let sortedData = currentPosts

        if (bySort) {
            sortedData = sortedData.sort((a, b) =>
                bySort === "lowToHigh" ? a.id - b.id : b.id - a.id
            )
        }
        return sortedData
    }

    function selectHandler(a) {
        dispatchFilter(
            {
                type: "Select",
                payload: a
            }
        )
        toast.success(`${a.firstname} ${a.lastname} selcted`)
    }


    return (
        <div>
            <div className='container'>
                <div className='sideBara'>
                    <div className='heading'>
                        <h2>Filter </h2>
                        {/* <h2>Clear</h2> */}
                    </div>
                    <div className='filters'>
                        <div>
                            <h3>Sort By Price</h3>
                            <hr />
                        </div>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    onClick={() => {
                                        dispatchFilter({
                                            type: "Sort",
                                            payload: "lowToHigh"
                                        })
                                    }
                                    }
                                    checked={bySort === "lowToHigh" ? true : false}
                                />

                                Ascending
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    onClick={() => {
                                        dispatchFilter({
                                            type: "Sort",
                                            payload: "highToLow"
                                        })

                                    }
                                    }
                                    checked={bySort === "highToLow" ? true : false}
                                />

                                Descending
                            </label>
                        </div>
                    </div>
                    <div>

                    </div>

                </div>
                <div className='custom-data'>
                    <div className='heading center'>
                        <h2>Customer Data</h2>
                        <div className="next " >
                            <Link to="/mainPage">
                                <AiFillCaretRight />
                            </Link>
                        </div>
                    </div>
                    <div className="map">
                        {
                            filteredData().map((a) => {
                                return (
                                    <div key={a.id} onClick={() => { selectHandler(a) }} className="card">
                                        <div className="imgContainer">
                                            <img className="img" src={a.image} alt="img"></img>
                                        </div>

                                        <div className="data">
                                            <h2>Id: {a.id} </h2>
                                            <h2> Name : {a.firstname} {a.lastname}</h2>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='pagination'>
                        <Pagination />
                    </div>
                </div>

            </div>
        </div>
    )
}