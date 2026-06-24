import { axiosInstance } from "@/config/axiosInstance"
import { ImageType } from "@lib/types/model/image"

export const getImages = async (url: string) => {
    try {
        const response: {
            message: string,
            data: ImageType[]
        } = await axiosInstance.get(`${url}/images`)
        return response
    } catch (err) {
        console.log(err)
        return err
    }
}

