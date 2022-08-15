// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import axios from "axios";

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

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    axios.get('http://tashidelekcuisine.test/api/restaurants/v1/home')
        .then((response) => {
            res.status(200).json(response.data)
        })
        .catch((err) => {
            // console.log(err.data)
            res.status(404).json({data: {description: "", sliders: [], title: err}})
        })

}
