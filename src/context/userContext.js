import { createContext , useContext , useEffect , useReducer ,useState} from "react";
import axios from "axios"


const UserList = createContext();

const UserProvider =({children})=>{
    const [data,setData]=useState([])
    const [currentPage , setCurrentPage] = useState(1)
    const [postPerPage] = useState(100);


    /// current Post 

    const indexOfLastPost = currentPage *postPerPage;
    const indexOfFirstPage = indexOfLastPost - postPerPage;
    const currentPosts = data.slice(indexOfFirstPage,indexOfLastPost)



    const paginate = (pageNumber) => setCurrentPage(pageNumber)


    useEffect(() => {
        const m = async () => {
            try {
                let k = await axios.get(
                    "https://fakerapi.it/api/v1/users?_quantity=1000&_gender=male"
                );
                let d = k.data.data
                setData(d);
            } catch (error) {
                console.log(error);
             }
        };
        m()
    }, [])


    const UserReducer =(state, action )=>{

        switch (action.type) {
            case "Sort":{
                return{
                    ...state,
                    bySort : action.payload
                }
            };
            case "Select":{
                return {
                    ...state,
                    selection:[...state.selection,{...action.payload}]
                }
            }
        
            default:
                return state
        }
    }

    const [filterState,dispatchFilter] = useReducer(UserReducer,{
        bySort:null,
        selection:[]
    })


    return(
        <UserList.Provider value={{data, filterState,dispatchFilter,postPerPage,paginate ,currentPosts}} >
            {children}
        </UserList.Provider>
    )
}

const  UserListContext =()=> useContext(UserList)

export {UserListContext,UserProvider}