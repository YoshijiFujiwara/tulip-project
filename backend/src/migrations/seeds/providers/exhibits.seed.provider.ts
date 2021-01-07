import { GENRE } from 'src/entities/exhibit.entity';
import { DummyGroup, dummyGroups } from './groups.seed.provider';
import {
  DummyExhibitor,
  provideDummyExhibitors,
} from './exhibitors.seed.provider';
import {
  DummyPresentaionImage,
  paging,
} from './presentationImages.seed.provider';

interface DummyExhibit {
  title?: string;
  genre?: GENRE;
  description?: string;
  presentationImages?: DummyPresentaionImage[];
  group?: DummyGroup;
  booth?: {
    positionNumber: number;
  };
  exhibitors?: DummyExhibitor[];
}

const dummyOriginExhibits: DummyExhibit[] = [
  {
    title: '律音',
    genre: GENRE.MUSIC,
    description:
      '重めのリアルロボットアクションゲームのカットシーンを想定し、ストーリーの壮大さと、後半にかけて熱くなる感じが伝わるよう制作しました。サビ前のいかにもなブレイク、わかりやすいメロディーで壮大感と熱いストーリーをイメージしやすく、なおかつロボットでの戦闘を連想しやすいように、機械っぽい音、金属音を要所に入れました。サビの繰り返すときは、パーカッションなどの刻みをやめることで、心に訴えてくる感じになるようにアレンジしました。エピックオーケストラらしい派手で重いミックス、オーケストラ音源のアーティキュレーションの細かいエディットでよりリアルに聴こえるように、曲全体の構成ではわかりやすい展開を意識して、前半は静か、後半で壮大になる2段構えを意識しました。',
    presentationImages: paging([
      'https://storage.googleapis.com/lab-mode-cms-production/images/Presentation_music_top/original_Presentation_music_top.jpg',
    ]),
  },
  {
    title: '青い滴',
    genre: GENRE.MUSIC,
    description:
      '「水」と「青色」をキーワードに、ファンタジーゲームでの水や洞窟のシーンで使われるBGMを想定して制作しました。水をピアノのアルペジオで表現し、テンションノートをたくさん入れることで水面の不安定さを出しました。ピアノのフレーズにベル系のシンセサイザーを重ねたことにより、水の透明感や光の反射による輝きが増したと思います。',
    presentationImages: paging([
      'https://storage.googleapis.com/lab-mode-cms-production/images/Presentation_music_top/original_Presentation_music_top.jpg',
    ]),
  },
  {
    title: '星空ドロップ',
    genre: GENRE.GAME,
    description:
      'このゲームは、☆と☆をつないで星座をつくり、その星座を落としてハム☆スターとともに星のかけらを集めてゆく物理パズルゲームです。落とす星座の形を考える面白さや、物理の動きを利用する面白さを27ステージ楽しめます。絵からステージへ遷移する演出や、背景やハム☆スターの見た目、BGMや星をつなぐ音、各ステージのレベルデザイン等、ゲームの細部にまでこだわって作った完成度の高さがウリです。',
    presentationImages: paging([
      'https://storage.googleapis.com/lab-mode-cms-production/images/HAL-Game-Hoshi/original_HAL-Game-Hoshi.png',
    ]),
  },
  {
    title: 'AboveSoul',
    genre: GENRE.GAME,
    description:
      'DirectX11のHLSLを使ったシェーダーとパーティクルエフェクト。A*アルゴリズムを使った経路探索。',
    presentationImages: paging([
      'https://storage.googleapis.com/lab-mode-cms-production/images/TH_Presentation_GameProduction_top01/original_TH_Presentation_GameProduction_top01.jpg',
    ]),
  },
  {
    title: 'Complex Reel',
    genre: GENRE.MOVIE,
    description:
      '美しいと思う見せ方や映像表現を追求し、リアリティある映像を目指して制作しました。',
    presentationImages: paging([
      'https://storage.googleapis.com/lab-mode-cms-production/images/OH_Presentation_CG_top01/original_OH_Presentation_CG_top01.jpg',
    ]),
  },
  {
    title: 'OASITH',
    genre: GENRE.MOVIE,
    description: '最新の映像表現とリアリティある生物の動きにこだわりました。',
    presentationImages: paging([
      'https://storage.googleapis.com/lab-mode-cms-production/images/19_oasis_2303/original_19_oasis_2303.png',
    ]),
  },
  {
    title: 'ソーゾー工房',
    genre: GENRE.IT,
    description:
      '企画・設計に最も時間をかけ、見えないところまでしっかり設定やプロットをつくり込みました。 API化してより使いやすくAWSで実装できているのもアピールポイントです。',
    presentationImages: paging([
      'https://storage.googleapis.com/lab-mode-cms-production/images/OH_Presentation_Web_top01/original_OH_Presentation_Web_top01.jpg',
    ]),
  },
  {},
];

export const dummyExhibits = dummyOriginExhibits.map((exhibit, index) => ({
  ...exhibit,
  group: dummyGroups[index],
  booth: {
    positionNumber: index + 1,
  },
  exhibitors: provideDummyExhibitors(index),
}));