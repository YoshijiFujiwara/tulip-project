// eslint-disable-next-line import/no-mutable-exports
export let axios: any

export default ({ store, $axios }: any) => {
  $axios.onRequest((config: any) => {
    const bearerToken = store.$auth.getToken('local')

    console.log('config baseURL', config.baseURL)
    console.log('process.env.axiosBaseUrl', process.env.axiosBaseUrl)

    // 外部APIを叩くときには、Authorizationヘッダーを付与しないようにする
    if (
      store.$auth.getToken('local') &&
      config.baseURL === process.env.axiosBaseUrl
    ) {
      config.headers.common.Authorization = bearerToken
    }
    config.headers.common.Accept = 'application/json'
  })

  $axios.onResponse((response: any) => {
    return Promise.resolve(response)
  })

  $axios.onError((error: any) => {
    return Promise.reject(error.response)
  })

  axios = $axios
}
