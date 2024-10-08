import { useEffect } from "react"
// import genre from '../../services/genre.service'
import  searchById  from "../../services/searchById.service"

export default function Genre() {

    // useEffect(() =>{
    //     genre((data) => {
    //         console.log(data.result)
    //     })
    // })

    useEffect(() =>{
        searchById((data) => {
            console.log(data)
        })
    })
    return (
      <div>Genre</div>
    )
  }