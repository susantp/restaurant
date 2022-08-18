import useContentSchema from "../hooks/useContentSchema";
import {FC} from "react";
import axios from "axios";
import SliderComponent from "../components/home/SliderComponent";
import IntroComponent from "../components/home/IntroComponent";
import Layout from "../layout/Layout";
import OrderPromoComponent from "../components/home/OrderPromoComponent";

const Home: FC<any> = ({content, error}): JSX.Element => {
    if (null !== error) {
        return <>{error}</>
    }

    const {header, sliders, pages, orderPromo} = JSON.parse(content)

    return (
        <Layout navBarContent={header}>
            <SliderComponent sliders={sliders}></SliderComponent>
            <IntroComponent title={header.title} description={header.description} pages={pages}/>
            <OrderPromoComponent title={orderPromo.title} subTitle={orderPromo.subTitle} link={orderPromo.link}/>
        </Layout>
    )
}

export async function getServerSideProps() {
    let content = null
    let error = null
    try {
        const domain = process.env.APP_URL + '/api/restaurants'
        const res = await axios.get(domain)
        const {data} = await res.data
        content = JSON.stringify(data, null, 4)
    } catch (e: any) {
        error = JSON.stringify(e.response.data, null, 4)
    }
    return {
        props: {
            content, error
        }, // will be passed to the page component as props
    }
}

export default Home
