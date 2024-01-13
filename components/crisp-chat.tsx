import { useEffect } from "react"
import {Crisp} from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
      Crisp.configure("a92bc5ed-d973-4533-bebd-9fe1223052e7");
    }, [])
    
}