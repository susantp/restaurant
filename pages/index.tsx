import axios from "axios";
import Layout from "../layout/Layout";
import Head from "next/head";
import WorkProcessComponent from "../components/home/WorkProcessComponent";
import useContentSchema from "../hooks/useContentSchema";
import SliderComponent from "../components/home/SliderComponent";
import {FC} from "react";

const Home: FC<any> = ({content}): JSX.Element => {
    const {workProcessComponent} = useContentSchema()
    return (
        <Layout>
            <SliderComponent sliders={content.sliders}></SliderComponent>
        </Layout>
    )
}

export async function getServerSideProps() {

    const res = await axios.get(`${process.env.APP_URL}/api/restaurants`)
    const {data} = await res
    const content = data.data
    return {
        props: {
            content
        }, // will be passed to the page component as props
    }
}

export default Home
