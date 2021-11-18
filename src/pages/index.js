import React from "react"
import{Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return(
    <Layout>
      <Head title="Home"/>
      <h1>Hello.</h1>
      <h2> I'm Taivan, student from Thomas More</h2>
      <p>Need to Contact? <Link to="/contact">Contact me.</Link></p>
    </Layout>
  )

}

export default IndexPage;
