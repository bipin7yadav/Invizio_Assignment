import { UserListContext } from "../context/userContext"


export default function MainPage(){
    const {filterState:{selection}}=UserListContext()
    console.log(selection,"selection")
    return(
        <div>
            <div className="product-container">
                {
                    selection.map((a)=>{
                        return(
                            <div className="card2">
                                <div className="imgContainer">
                                    <img className="img" src={a.image} alt="img"></img>
                                </div>
                                <div className="info" >
                                    <h3>Id :{a.id}</h3>
                                    <h3>Name :{a.firstname} {a.lastname}</h3>
                                    <h3>Email :{a.email}</h3>
                                    <h3>Website :{a.website}</h3>

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}