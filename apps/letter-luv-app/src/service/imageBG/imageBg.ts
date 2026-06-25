import { axiosInstance } from "@/config/axiosInstance"
import { ImageType } from "@lib/types/model/image"

interface FetchImageType {
    data: {
        message: string,
        data: ImageType[]
    }
}

export const getImages = async (url: string) => {
    try {
        const response = await axiosInstance.get<FetchImageType>(`${url}/images`)
        return response
    } catch (err) {
        console.log(err)
        return err
    }
}

