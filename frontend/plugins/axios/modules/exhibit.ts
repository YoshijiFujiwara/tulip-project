import { axios } from '../index'

export default {
  getExhibits() {
    return axios.$get(`exhibits`)
  },

  createExhibit() {
    return axios.$post('exhibits', {
      title: 'テストラゴン',
      description:
        '次世代型の文化祭をVRで体験できるサービスです。オンラインでもリアルな交流を体験出来ます！',
      thumbnail: 'https://i.gzn.jp/img/2018/01/15/google-gorilla-ban/00.jpg',
      genre: 'it',
      presentationImage:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwired.jp%2F2018%2F01%2F18%2Fgorillas-and-google-photos%2F&psig=AOvVaw0q-C6ITVrxJwXa3kbTHooK&ust=1605000065833000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDd6aiR9ewCFQAAAAAdAAAAABAD',
    })
  },
}
