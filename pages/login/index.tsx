import { ILogin } from "../../typing"


export default function LoginBackendForm({ user }: { user: ILogin }) {
  return <>Login from backend page {user.isLoggedin ? "YES" : "NO"}</>
}


export async function getServerSideProps(context: any) {
  return {
    props: {
      user: {
        isLoggedin: true,
        dataSource: "Yes i have datasource"
      }
    }, // will be passed to the page component as props
  }
}
