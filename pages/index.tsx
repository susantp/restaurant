import axios from "axios";
import Layout from "../layout/Layout";
import Head from "next/head";
import WorkProcessComponent from "../components/home/WorkProcessComponent";
import useContentSchema from "../hooks/useContentSchema";

const Home = (): JSX.Element => {
    const {workProcessComponent, whyChooseUs, whatWeDo} = useContentSchema();

    return (
        <Layout>
            <WorkProcessComponent heading={workProcessComponent.heading} processes={workProcessComponent.processes}/>
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
