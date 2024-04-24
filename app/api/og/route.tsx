import { ImageResponse } from "next/og"

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url)

        const hasTitle = searchParams.has("name")
        const name = hasTitle
            ? searchParams.get("name")?.slice(0, 100)
            : "My default title"

        const sir = "sir"
        // const name = searchParams.get("name")
        const address = searchParams.get("address")
        const province = searchParams.get("province")
        const status = searchParams.get("status")

        const date = new Date()
        const displayDate = date.toLocaleDateString("th-TH", {
            year: "numeric",
            month: "long",
            day: "numeric",
            weekday: "long",
        })

        return new ImageResponse(
            (
                <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
                    <div tw="bg-gray-50 flex w-full h-full">
                        <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
                            <h2 tw="flex flex-col text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-left">
                                <span>{province}</span>
                                <span tw="text-indigo-600">
                                    {name}
                                </span>
                                <span tw="text-indigo-600">
                                    {status}
                                </span>
                            </h2>
                            <div tw="mt-8 flex md:mt-0">
                                <div tw="flex rounded-md shadow">
                                    <a tw="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white">
                                        {address}
                                    </a>
                                </div>
                                <div tw="ml-3 flex rounded-md shadow">
                                    <a tw="flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600">
                                        {sir}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                // <div tw="flex flex-col w-full h-full bg-white">
                //     <div tw="flex justify-between">
                //         <div>1.EM523474793TH</div>
                //         <div>นำจ่ายสำเร็จ</div>
                //         <div>{displayDate}</div>
                //     </div>
                //     <div tw="flex w-full">
                //         &nbsp;
                //         <span tw="bg-red-600 w-[70%]"></span>
                //     </div>
                //     <div tw="flex w-full">Progress</div>
                // </div>
            ),
            {
                width: 1000,
                height: 1200,
            }
        )
    } catch (e: any) {
        console.log(`${e.message}`)
        return new Response(`Failed to generate the image`, {
            status: 500,
        })
    }
}
