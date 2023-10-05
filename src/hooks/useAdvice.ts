import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const useAdvice = () => {
  const { data: adviceData, isLoading, refetch } = useQuery(['advice'], async () => {
    return Axios.get("https://api.adviceslip.com/advice")
    .then(res => {
      console.log(res.data);
      return res.data
    });
  })

  const fetchNewAdvice = () => {
    refetch();
  }

  return { adviceData, isLoading, fetchNewAdvice }
}