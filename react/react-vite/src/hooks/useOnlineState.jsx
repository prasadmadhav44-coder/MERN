import React, { useState } from 'react'

const useOnlineState = () => {
  const [state,setState] = useState(navigator.onLine);

  addEventListener("online",()=>{
    setState(true)
  })

  addEventListener("offline",()=>{
    setState(false)
  })

  return state
}

export default useOnlineState