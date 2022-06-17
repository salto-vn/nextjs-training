import { useState } from "react"
import BaseModal from "../modal"
import Swal from 'sweetalert2'
import { useRouter } from "next/router"
import { setTokenLocalStorage } from "../../utils/utils"
import Image from "next/image"
import GoogleSVG from '../../public/google.svg'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "../../config/config"
const provider = new GoogleAuthProvider()

export default function LoginForm() {
  const router = useRouter()

  const [isLoading, setLoading] = useState<boolean>(false)
  const [isShow, setIsShow] = useState<boolean>(false)
  const toggleModal = () => setIsShow(!isShow)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const { email, password } = e.target
    const dataSend = {
      email: email.value,
      password: password.value,
    }
    try {
      setLoading(true)
      const res = await fetch('https://api.duypham.vn/api/v1/login',
        {
          method: 'POST',
          headers: {
            'accept': 'application/json',
            'content-type': 'application/json'
          },
          body: JSON.stringify(dataSend),
        })
      if (res.status !== 200) {
        Swal.fire({
          text: 'Login failed',
          icon: 'error',
          timer: 3000,
          timerProgressBar: true,
        })
        return
      }
      const responseData = await res.json()
      toggleModal()
      setTokenLocalStorage(responseData.token)
      return Swal.fire({
        text: 'Login success!',
        icon: 'success',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
      }).finally(() => {
        router.push('/dataDummy')
      })
    }
    catch (e) {

    } finally {
      setLoading(false)
    }
  }

  const handleGoogleLogin = () => {

    signInWithPopup(auth, provider)
      .then(() => {
        toggleModal()
        Swal.fire({
          text: 'Login success!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
        }).finally(() => {
          router.push('/dataDummy')
        })
      }).catch(function (error) {
        console.error(error)
      })
  }

  const modalHeader = <>
    <h5 className="modal-title">Login Form</h5>
    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={toggleModal}></button>
  </>

  const loginInput = <>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" placeholder="email" />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" placeholder="password" />
      </div>
      <div>
        <b>Or login with google account ?</b> <Image onClick={handleGoogleLogin} src={GoogleSVG} width={24} height={24} alt="success" />
      </div>
      <div>
        <button type="button" className="btn btn-secondary float-start" onClick={toggleModal}> Close </button>
        <button disabled={isLoading} type="submit" className="btn btn-primary float-end"> Login </button>
      </div>
    </form>
  </>

  return <>
    <span className="getTokenLocalStorage-text">
      <a type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={toggleModal}>Login</a>
    </span>
    <BaseModal
      visible={isShow}
      header={modalHeader}
      hideModal={toggleModal}>
      {loginInput}
    </BaseModal>
  </>
}
