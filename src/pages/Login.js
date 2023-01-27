import axios from "axios";
import { useEffect, useState } from "react";

function Login() {
  const [data, setData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({...data, [name]: value});
  }

  const submit = async (e) => {
    const res = await axios.post('/v2/admin/signin', data);
    const { token, expired } = res.data;
    console.log(res.data);
    document.cookie = `hexToken=${token}; expires=${new Date(expired)};`;
    // 儲存 Token
  }
  
  useEffect(() => {
    // 取出 Token
    const token = document.cookie
      .split('; ')
      .find((row) => row.startsWith('hexToken='))
      ?.split('=')[1];
    axios.defaults.headers.common['Authorization'] = token;
    (async() => {
      const productRes = await axios.get(`/v2/api/${process.env.REACT_APP_API_PATH}/admin/products/all`);
      console.log(productRes);
    })();
  }, [])


  return (<div className="container py-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h2>登入帳號</h2>

        <div className="alert alert-danger" role="alert">
          錯誤訊息
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="form-label w-100">
            Email
            <input id="email" className="form-control" name="username" type="email" placeholder="Email Address" onChange={handleChange} />
          </label>
        </div>
        <div className="mb-2">
          <label htmlFor="password" className="form-label w-100">
            密碼
            <input type="password" className="form-control"  name="password" id="password" placeholder="name@example.com" onChange={handleChange} />
          </label>
        </div>
        <button type="button" className="btn btn-primary" onClick={submit}>登入</button>
      </div>
    </div>
  </div>)
}

export default Login;