import { RefObject, useEffect } from "react";


const useOnClickOutside = (ref: RefObject<HTMLElement>, handler: Function) => {
    useEffect(() => {
        const listener = (event: any) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return
            }
            handler(event)
        }
        
        document.body.addEventListener('mousedown', listener)
        document.body.addEventListener('touchstart', listener)
        return () => {
            document.body.removeEventListener('mousedown', listener)
            document.body.removeEventListener('touchstart', listener)
        }
    }, [ref, handler])
}

export default useOnClickOutside;