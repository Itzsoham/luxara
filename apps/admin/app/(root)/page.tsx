"use client"

import { openModal } from "@/state"
import { useAppDispatch, useAppSelector } from "@/state/redux"
import { useEffect } from "react"

export default function Page() {
  const isOpen = useAppSelector(state => state.global.isOpen)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (isOpen === false) {
      dispatch(openModal())
    }
  }, [isOpen, dispatch, openModal])

  return <div className="text-white-100">root page</div>
}
