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

  // authorizationヘッダーをつけているとcorsに引っかかるため、削除する
  delete axiosInstance.defaults.headers.common.Authorization
  axiosInstance.setBaseURL(
    `https://api.cloudinary.com/v1_1/${process.env.cloudinaryCloudName!}/`
  )
  const res = await axiosInstance.$post('/image/upload', data)

  // baseURLを設定し直す（重要）
  axiosInstance.setBaseURL(process.env.axiosBaseUrl!)
  return res.url
}
export async function uploadMovieCloudinary(
  axiosInstance: NuxtAxiosInstance,
  video: File
): Promise<string> {
  const data = new FormData()
  data.append('file', video)
  // FIXME: nuxt buildの時に、環境変数の読み込みが出来ないため直書きしている
  data.append('upload_preset', process.env.cloudinaryUploadPreset!)
  data.append('cloud_name', process.env.cloudinaryCloudName!)

  // authorizationヘッダーをつけているとcorsに引っかかるため、削除する
  delete axiosInstance.defaults.headers.common.Authorization
  axiosInstance.setBaseURL(
    `https://api.cloudinary.com/v1_1/${process.env.cloudinaryCloudName!}/`
  )
  const res = await axiosInstance.$post('/video/upload', data)
  // baseURLを設定し直す（重要）
  axiosInstance.setBaseURL(process.env.axiosBaseUrl!)
  return res.url
}
