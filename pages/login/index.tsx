import { withPublic } from 'src/auth/route'
import { Modal, Button, Input } from 'antd';
import { useState } from 'react'
import { useUser } from '@auth0/nextjs-auth0'
import _ from 'lodash' 

// @ts-ignore
export function Login({ auth })
{
  // @ts-ignore
  const { loginWithGoogle, logout, loginWithEmail } = auth
  const [modal, setModal] = useState(false)
  const [userInfo, setUserInfo] = useState({})
  const { user, isLoading, error } = useUser()

  const showModal = () => {
    setModal(true);
  };

  const handleOk = () => {
    
  };

  const handleCancel = () => {
    setModal(false);
  };

  const onChangeEmail = (e: any) => {
    var data = userInfo
    // @ts-ignore
    data.email = e.target.value
    setUserInfo(data)
  }

  const onChangePassword = (e: any) => {
    var data = userInfo
    // @ts-ignore
    data.password = e.target.value
    setUserInfo(data)
  }

  const loginProcess = () => {
    // @ts-ignore
    loginWithEmail(userInfo.email, userInfo.password)
  }
  return (
    <>
      <h1>LOGIN PAGE</h1>
      <Button className="btn btn-danger w-100" onClick={loginWithGoogle}>GOOGLE LOGIN</Button>
      <br /><br />
      <Button className="btn btn-info w-100" onClick={showModal}>LOGIN WITH EMAIL</Button>
      <br /><br />
      { user ? (<a className="btn btn-info w-100" href="/api/auth/logout">LOGOUT</a>) : <a className="btn btn-info w-100" href="/api/auth/login">LOGIN WITH AUTH0</a>}
      <Modal title="Login with email" visible={modal} onOk={loginProcess} onCancel={handleCancel}>
        <Input placeholder="Email" onChange={onChangeEmail} required />
        <Input type="password" placeholder="Password" onChange={onChangePassword} required />
      </Modal>
    </>
  )
}

export default withPublic(Login)
