import { NuxtAxiosInstance } from '@nuxtjs/axios'

export async function uploadImageCloudinary(
  axiosInstance: NuxtAxiosInstance,
  image: File
): Promise<string> {
  const data = new FormData()
  data.append('file', image)
  // FIXME: nuxt buildの時に、環境変数の読み込みが出来ないため直書きしている
  data.append('upload_preset', process.env.cloudinaryUploadPreset!)
  data.append('cloud_name', process.env.cloudinaryCloudName!)

  const res = await fetch(
    'https://api.cloudinary.com/v1_1/db32y726v/image/upload',
    {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data, // body data type must match "Content-Type" header
    }
  )

  // authorizationヘッダーをつけているとcorsに引っかかるため、削除する
  // delete axiosInstance.defaults.headers.common.Authorization
  // axiosInstance.setBaseURL(
  // `https://api.cloudinary.com/v1_1/${process.env.cloudinaryCloudName!}/`
  // )
  // const res = await axiosInstance.$post('/image/upload', data)
  console.log('res', res)
  return res.url
}
