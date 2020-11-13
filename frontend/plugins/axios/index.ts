// eslint-disable-next-line import/no-mutable-exports
export let axios: any

export default ({ store, $axios }: any) => {
  $axios.onRequest((config: any) => {
    const bearerToken = store.$auth.getToken('local')
    if (store.$auth.getToken('local')) {
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
