import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';

function useLogin() {
  const router = useRouter();
  const { login, user } = useAuth();
  const [data, setData] = useState({
    email: '',
    password: '',
  })


  useEffect(() => {
    if (user) router.push('/dashboard')
  }, [user, router])


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const loginHandler = async (e: any) => {
    e.preventDefault();
    try {
      await login(data.email, data.password)
      router.push('/dashboard')
    } catch (error) {
      console.error(error)
    }
  }


  return {
    handleInputChange,
    loginHandler,
    data
  }
}

export default useLogin