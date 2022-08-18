// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import axios from "axios";
import {homePageContent} from "../../../responses/home";

type Data = {
    data: {
        title: string,
        description: string,
        sliders: Array<Slider>
    }
}

interface Slider {
    subTitle: string,
    title: string,
    description: string
}

type ErrorResponse = {
    error: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json(homePageContent)
    /*********************** request to live server *********************************/
    // const reqUrl = process.env.SERVER_URL + "/restaurants/v1/home"
    // try {
    //     const response = await axios.get(reqUrl)
    //     const data = await response.data
    //     res.status(200).json(response.data)
    // } catch (e: any) {
    //     res.status(404).json({data: {description: "", sliders: [], title: e.response.data}})
    // }
    /*********************** request to live server end *********************************/
}
