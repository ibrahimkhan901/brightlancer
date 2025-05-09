
import axios from 'axios'




async function axiosReqSender(method, url, data) {

  try {


    // console.log(import.meta.env.VITE_REACT_BACKEND_BASE_URL)


    // https://bl-backend-beta.vercel.app/
    // http://localhost:4000

    let response = await axios({
      method,
      url:`${url}`,
      data
    })


    if (!response.data || response.data == '') {
      alert("Somethings went wrong while submitting the form of apply for the course")
    }
    else if (response.data.success == false) {
      alert("The req is failed")
      console.log(response.data?.msg)
    } else if (response.data.error == true) {
      alert(response.data?.msg)
    }
    else {
      return response;
    }


  } catch (err) {
    throw new Error(`Submission failed: ${err.response?.data?.msg || err.message}`);
  }

}










export default axiosReqSender;