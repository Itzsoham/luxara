"use client"

import Modal from "@workspace/ui/main/modal"

export default function Page() {
  return (
    <div className="">
      <Modal
        title="Test"
        description="Test description"
        isOpen={true}
        onClose={() => {}}
      >
        <div>Test children</div>
      </Modal>
    </div>
  )
}
