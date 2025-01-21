"use client"

import StoreModal from "@/components/modals/StoreModal"
import React, { useEffect } from "react"

const ModalProvider = () => {
  const [isMounted, setIsMounted] = React.useState(false)

  useEffect(() => {
    setIsMounted(true)
  })

  if (!isMounted) return null

  return <StoreModal />
}

export default ModalProvider
