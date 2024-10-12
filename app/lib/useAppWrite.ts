import { useState, useEffect } from "react"
import toast from 'react-hot-toast'

type FnType = () => Promise<any>;

const useAppWrite = (fn: FnType) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
  
    const fetchData = async() =>{
        setIsLoading(true)
  
        try {
          const response = await fn()
          setData(response)
        } catch (error: any) {
          toast.error(error.message)
        } finally {
          setIsLoading(false)
        }
      }
    useEffect(() =>{
      
      fetchData()
    //  eslint-disable-next-line 
    }, [])

    const refetch = () => fetchData()

    return {data, isLoading, refetch}
}
export default useAppWrite