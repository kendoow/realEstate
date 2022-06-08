import { useDispatch } from "react-redux"

import { AppDispatch } from "../redux"

const useTypedDispatch = () => useDispatch<AppDispatch>()

export default useTypedDispatch;