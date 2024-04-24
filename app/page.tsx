"use client"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

export default function Home() {
    const router = useRouter()

    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [province, setProvince] = useState("")
    const [status, setStatus] = useState("inProcess")

    const [isOpen, setIsOpen] = useState(true)
    // const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    //     event.preventDefault()
    //     const formData = new FormData(event.currentTarget)
    //     const name = formData.get("name")
    //     const address = formData.get("address")
    //     const province = formData.get("province")
    //     const status = formData.get("status")

    //     router.push(`/api/og?name=${name}&address=${address}&province=${province}&status=${status}`)
    // }

    const onNameChange = (event: FormEvent<HTMLInputElement>) => {
        setName(event.currentTarget.value)
    }
    const onAddressChange = (event: FormEvent<HTMLInputElement>) => {
        setAddress(event.currentTarget.value)
    }
    const onProvinceChange = (event: FormEvent<HTMLInputElement>) => {
        setProvince(event.currentTarget.value)
    }
    const onStatusChange = (event: any) => {
        console.log(event.currentTarget.value)
        setStatus(event.currentTarget.value)
    }

    const handleSubmit = async () => {
        router.push(
            `/api/og?name=${name}&address=${address}&province=${province}&status=${status}`
        )
    }

    const handleDownload = async () => {
        const res = await fetch(
            `/api/og?name=${name}&address=${address}&province=${province}&status=${status}`
        )
        const blob = await res.blob()
        const url = URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = "image.png"
        a.click()
    }

    return (
        <main className="flex min-h-screen flex-col p-24 items-center justify-center bg-white text-black">
            Fill some Data...
            {/* <form onSubmit={onSubmit} className="flex flex-col w-96 gap-4">
                ชื่อผู้รับ
                <input type="text" name="name" placeholder="Name" />
                ที่อยู่
                <input type="text" name="address" placeholder="Address" />
                จังหวัด
                <input type="text" name="province" placeholder="Province" />
                สถานะ
                <select name="status">
                    <option value="inProcess">รับเข้าระบบ</option>
                    <option value="inTransit">ระหว่างขนส่ง</option>
                    <option value="inDelivery">ออกไปนำจ่าย</option>
                    <option value="success">นำจ่ายสำเร็จ</option>
                </select>
                <button type="submit">Submit</button>
            </form> */}
            <div className="flex flex-col max-w-[300px]">
                ชื่อผู้รับ
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={onNameChange}
                    className="border border-black rounded-md p-2"
                />
                ที่อยู่
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    onChange={onAddressChange}
                    className="border border-black rounded-md p-2"
                />
                จังหวัด
                <input
                    type="text"
                    name="province"
                    placeholder="Province"
                    onChange={onProvinceChange}
                    className="border border-black rounded-md p-2"
                />
                สถานะ
                <select
                    name="status"
                    onChange={onStatusChange}
                    className="border border-black rounded-md p-2"
                >
                    <option value="inProcess">รับเข้าระบบ</option>
                    <option value="inTransit">ระหว่างขนส่ง</option>
                    <option value="inDelivery">ออกไปนำจ่าย</option>
                    <option value="success">นำจ่ายสำเร็จ</option>
                </select>
            </div>
            <button
                className="border border-sky-300 rounded-md p-2 mt-4"
                onClick={() => {
                    handleSubmit()
                }}
            >
                View img
            </button>
            <button
                className="border border-sky-300 rounded-md p-2 mt-4"
                onClick={() => {
                    handleDownload()
                }}
            >
                Download
            </button>
        </main>
    )
}
