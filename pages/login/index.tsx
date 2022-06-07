import { useState } from "react"

export default function LoginBackendForm({ user }) {
  return <>Login from backend page {user.isLoggedin ? "YES" : "NO"}</>
}


export async function getServerSideProps(context) {
  return {
    props: {
      user: {
        isLoggedin: true,
        dataSource: "Yes i have datasource"
      }
    }, // will be passed to the page component as props
  }
}
