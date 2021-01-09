import { DummyGroup, dummyGroups } from './groups.seed.provider';
import {
  DummyExhibitor,
  factoryDummyExhibitors,
} from './exhibitors.seed.provider';
import {
  DummyPresentaionImage,
  paging,
} from './presentationImages.seed.provider';
import { GENRE } from '../../../entities/exhibit.entity';

export interface DummyExhibit {
  id?: number;
  title: string;
  genre: GENRE;
  description: string;
  thumbnail: string;
  demo: string;
  presentationImages: DummyPresentaionImage[];
  group?: DummyGroup;
  booth?: {
    positionNumber: number;
  };
  exhibitors?: DummyExhibitor[];
}

export const dummyOriginExhibits: Array<DummyExhibit> = [
  {
    title: 'ロボティックガール',
    genre: GENRE.MUSIC,
    description:
      'エモーショナルかつ"ゆめかわ"をテーマに。暗いシーンにも明るいシーンにもそういう色使いを入れつつ、クールにもキュートにも見える映像づくりを心がけてます。 ロボットみたいに傷つかない心でいられたらいいのにって思うことをミュージックにしました。',
    demo:
      'http://res.cloudinary.com/db32y726v/video/upload/v1610171955/xfl60xky2uukjod5to83.mp4',
    thumbnail:
      'http://res.cloudinary.com/db32y726v/image/upload/v1610164025/dlxrbjzqvljpg6ae4dhz.jpg',
    presentationImages: paging([
      'http://res.cloudinary.com/db32y726v/image/upload/v1610164030/mwanwxdbtydpjpvllvei.jpg',
    ]),
  },
  {
    title: 'Rain',
    genre: GENRE.MUSIC,
    description:
      '「水」と「青色」をキーワードに、ファンタジーゲームでの水や洞窟のシーンで使われるBGMを想定して制作しました。水をピアノのアルペジオで表現し、テンションノートをたくさん入れることで水面の不安定さを出しました。ピアノのフレーズにベル系のシンセサイザーを重ねたことにより、水の透明感や光の反射による輝きが増したと思います。',
    demo:
      'http://res.cloudinary.com/db32y726v/video/upload/v1610169578/z1ntvvqulbsdc9qmzz6d.mp4',
    thumbnail:
      'http://res.cloudinary.com/db32y726v/image/upload/v1610169572/jp4f9pvsran8tf2jith2.jpg',
    presentationImages: paging([
      'http://res.cloudinary.com/db32y726v/image/upload/v1610169572/jp4f9pvsran8tf2jith2.jpg',
    ]),
  },
  {
    title: 'sekiro',
    genre: GENRE.GAME,
    description:
      '隻腕の狼、戦国に忍ぶ。完全新作アクション・アドベンチャー、架空の戦国末期を舞台に隻腕の忍者の活躍を描く和風アクションゲーム。',
    demo:
      'http://res.cloudinary.com/db32y726v/video/upload/v1610168406/vduqujv3ifize2ffdzxz.mp4',
    thumbnail:
      'http://res.cloudinary.com/db32y726v/image/upload/v1610165527/dvlvaklnod0f9otwn7su.jpg',
    presentationImages: paging([
      'http://res.cloudinary.com/db32y726v/image/upload/v1610165529/pombklmsq9iczycvkwqb.jpg',
    ]),
  },
  {
    title: 'モンスターハンターライズ',
    genre: GENRE.GAME,
    description:
      'ハンティングアクションに新風を巻き起こす『モンスターハンターライズ』 狩猟に新風を巻き起こす、縦横無尽に躍動するアクション。 思いのままに翔けあがれる、新たなハンティングフィールド。 そして、未知の興奮や驚きをもたらす、全く新しいモンスターたち。',
    demo:
      'https://res.cloudinary.com/db32y726v/video/upload/v1610077813/umhbtyfzbm5ztj2k5pfc.mp4',
    thumbnail:
      'https://res.cloudinary.com/db32y726v/image/upload/v1610160941/wsbz0u4cirbfq1skrtor.jpg',
    presentationImages: paging([
      'https://res.cloudinary.com/db32y726v/image/upload/v1610160944/dnjnt6hdhl6k9lrpasxw.jpg',
    ]),
  },
  {
    title: 'Emotion',
    genre: GENRE.MOVIE,
    description:
      '躍動的で見栄えのいいアニメーションを作成しました。',
    demo:
      'https://res.cloudinary.com/db32y726v/video/upload/v1610077813/umhbtyfzbm5ztj2k5pfc.mp4',
    thumbnail:
      'http://res.cloudinary.com/db32y726v/image/upload/v1610170290/hamgzafimtyqvw9knezx.jpg',
    presentationImages: paging([
      'http://res.cloudinary.com/db32y726v/image/upload/v1610170290/hamgzafimtyqvw9knezx.jpg',
    ]),
  },
  {
    title: '朱',
    genre: GENRE.MOVIE,
    description: '一人の少女が妖怪に追いかけられて…',
    demo:
      'http://res.cloudinary.com/db32y726v/video/upload/v1610171586/qdqt8j32iil4ktskn2qt.mp4',
    thumbnail:
      'http://res.cloudinary.com/db32y726v/image/upload/v1610171566/jrmglt4bqry3dgxmufvf.jpg',
    presentationImages: paging([
      'http://res.cloudinary.com/db32y726v/image/upload/v1610171568/hux1sssq5xbobewsm1yf.jpg',
    ]),
  },
];

export type ReqDummyExhibit = Required<DummyExhibit> | null;

export const dummyExhibits: ReqDummyExhibit[] = dummyOriginExhibits.map(
  (exhibit, index) => ({
    id: index + 1,
    ...exhibit,
    group: dummyGroups[index],
    booth: {
      id: index + 1,
      positionNumber: index + 1,
    },
    exhibitors: factoryDummyExhibitors(index),
  }),
);
