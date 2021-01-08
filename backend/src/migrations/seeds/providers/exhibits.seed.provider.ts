import { DummyGroup, dummyGroups } from './groups.seed.provider';
import {
  DummyExhibitor,
  provideDummyExhibitors,
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

export const dummyOriginExhibits: Array<DummyExhibit | null> = [
  {
    title: '律音',
    genre: GENRE.MUSIC,
    description:
      '重めのリアルロボットアクションゲームのカットシーンを想定し、ストーリーの壮大さと、後半にかけて熱くなる感じが伝わるよう制作しました。サビ前のいかにもなブレイク、わかりやすいメロディーで壮大感と熱いストーリーをイメージしやすく、なおかつロボットでの戦闘を連想しやすいように、機械っぽい音、金属音を要所に入れました。サビの繰り返すときは、パーカッションなどの刻みをやめることで、心に訴えてくる感じになるようにアレンジしました。エピックオーケストラらしい派手で重いミックス、オーケストラ音源のアーティキュレーションの細かいエディットでよりリアルに聴こえるように、曲全体の構成ではわかりやすい展開を意識して、前半は静か、後半で壮大になる2段構えを意識しました。',
    demo:
      'https://res.cloudinary.com/db32y726v/video/upload/v1610077813/umhbtyfzbm5ztj2k5pfc.mp4',
    thumbnail:
      'http://res.cloudinary.com/db32y726v/image/upload/v1610007853/yb9kntuyha1gbvufxnxp.jpg',
    presentationImages: paging([
      'http://res.cloudinary.com/db32y726v/image/upload/v1610007853/yb9kntuyha1gbvufxnxp.jpg',
    ]),
  },
  {
    title: '青い滴',
    genre: GENRE.MUSIC,
    description:
      '「水」と「青色」をキーワードに、ファンタジーゲームでの水や洞窟のシーンで使われるBGMを想定して制作しました。水をピアノのアルペジオで表現し、テンションノートをたくさん入れることで水面の不安定さを出しました。ピアノのフレーズにベル系のシンセサイザーを重ねたことにより、水の透明感や光の反射による輝きが増したと思います。',
    demo:
      'https://res.cloudinary.com/db32y726v/video/upload/v1610077813/umhbtyfzbm5ztj2k5pfc.mp4',
    thumbnail:
      'http://res.cloudinary.com/db32y726v/image/upload/v1610007853/yb9kntuyha1gbvufxnxp.jpg',
    presentationImages: paging([
      'http://res.cloudinary.com/db32y726v/image/upload/v1610007853/yb9kntuyha1gbvufxnxp.jpg',
    ]),
  },
  {
    title: '星空ドロップ',
    genre: GENRE.GAME,
    description:
      'このゲームは、☆と☆をつないで星座をつくり、その星座を落としてハム☆スターとともに星のかけらを集めてゆく物理パズルゲームです。落とす星座の形を考える面白さや、物理の動きを利用する面白さを27ステージ楽しめます。絵からステージへ遷移する演出や、背景やハム☆スターの見た目、BGMや星をつなぐ音、各ステージのレベルデザイン等、ゲームの細部にまでこだわって作った完成度の高さがウリです。',
    demo:
      'https://res.cloudinary.com/db32y726v/video/upload/v1610077813/umhbtyfzbm5ztj2k5pfc.mp4',
    thumbnail:
      'http://res.cloudinary.com/db32y726v/image/upload/v1610007966/s81dgyx9alzkloif0n4w.png',
    presentationImages: paging([
      'http://res.cloudinary.com/db32y726v/image/upload/v1610007966/s81dgyx9alzkloif0n4w.png',
    ]),
  },
  {
    title: 'AboveSoul',
    genre: GENRE.GAME,
    description:
      'DirectX11のHLSLを使ったシェーダーとパーティクルエフェクト。A*アルゴリズムを使った経路探索。',
    demo:
      'https://res.cloudinary.com/db32y726v/video/upload/v1610077813/umhbtyfzbm5ztj2k5pfc.mp4',
    thumbnail:
      'http://res.cloudinary.com/db32y726v/image/upload/v1610008034/jnmw3zu4lwbyj1pik62t.jpg',
    presentationImages: paging([
      'http://res.cloudinary.com/db32y726v/image/upload/v1610008034/jnmw3zu4lwbyj1pik62t.jpg',
    ]),
  },
  {
    title: 'Complex Reel',
    genre: GENRE.MOVIE,
    description:
      '美しいと思う見せ方や映像表現を追求し、リアリティある映像を目指して制作しました。',
    demo:
      'https://res.cloudinary.com/db32y726v/video/upload/v1610077813/umhbtyfzbm5ztj2k5pfc.mp4',
    thumbnail:
      'http://res.cloudinary.com/db32y726v/image/upload/v1610008099/ge1vlzwd2ngpntaczpis.jpg',
    presentationImages: paging([
      'http://res.cloudinary.com/db32y726v/image/upload/v1610008099/ge1vlzwd2ngpntaczpis.jpg',
    ]),
  },
  {
    title: 'OASITH',
    genre: GENRE.MOVIE,
    description: '最新の映像表現とリアリティある生物の動きにこだわりました。',
    demo:
      'https://res.cloudinary.com/db32y726v/video/upload/v1610077813/umhbtyfzbm5ztj2k5pfc.mp4',
    thumbnail:
      'http://res.cloudinary.com/db32y726v/image/upload/v1610008150/fffmfwyzicd7awmbchhd.png',
    presentationImages: paging([
      'http://res.cloudinary.com/db32y726v/image/upload/v1610008150/fffmfwyzicd7awmbchhd.png',
    ]),
  },
  {
    title: 'ソーゾー工房',
    genre: GENRE.IT,
    description:
      '企画・設計に最も時間をかけ、見えないところまでしっかり設定やプロットをつくり込みました。 API化してより使いやすくAWSで実装できているのもアピールポイントです。',
    demo:
      'https://res.cloudinary.com/db32y726v/video/upload/v1610077813/umhbtyfzbm5ztj2k5pfc.mp4',
    thumbnail:
      'http://res.cloudinary.com/db32y726v/image/upload/v1610008207/mm8aofycop71crzf5m0i.jpg',
    presentationImages: paging([
      'http://res.cloudinary.com/db32y726v/image/upload/v1610008207/mm8aofycop71crzf5m0i.jpg',
    ]),
  },
  {
    title: 'ゾーゾー工房',
    genre: GENRE.IT,
    description:
      '企画・設計に最も時間をかけ、見えないところまでしっかり設定やプロットをつくり込みました。 API化してより使いやすくAWSで実装できているのもアピールポイントです。',
    demo:
      'https://res.cloudinary.com/db32y726v/video/upload/v1610077813/umhbtyfzbm5ztj2k5pfc.mp4',
    thumbnail:
      'http://res.cloudinary.com/db32y726v/image/upload/v1610008207/mm8aofycop71crzf5m0i.jpg',
    presentationImages: paging([
      'http://res.cloudinary.com/db32y726v/image/upload/v1610008207/mm8aofycop71crzf5m0i.jpg',
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
      positionNumber: index + 1,
    },
    exhibitors: provideDummyExhibitors(index),
  }),
);
