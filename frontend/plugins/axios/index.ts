export let axios

export default ({ store, $axios }) => {
  $axios.onRequest((config: any) => {
    const bearerToken = store.$auth.getToken('local')
    if (store.$auth.getToken('local')) {
      config.headers.common.Authorization = bearerToken
    }
    config.headers.common.Accept = 'application/json'
  })

  $axios.onResponse((response) => {
    return Promise.resolve(response)
  })

  $axios.onError((error) => {
    return Promise.reject(error.response)
  })

  axios = $axios
}
