import { GENRE } from 'src/entities/exhibit.entity';
import { dummyGroup, dummyGroups } from './groups.seed.provider';

interface dummyExhibit {
  title: string;
  genre: GENRE;
  description: string;
  group?: dummyGroup;
  booth?: {
    positionNumber: number;
  };
}

const dummyLocalExhibits: dummyExhibit[] = [
  {
    title: '律音',
    genre: GENRE.MUSIC,
    description:
      '重めのリアルロボットアクションゲームのカットシーンを想定し、ストーリーの壮大さと、後半にかけて熱くなる感じが伝わるよう制作しました。サビ前のいかにもなブレイク、わかりやすいメロディーで壮大感と熱いストーリーをイメージしやすく、なおかつロボットでの戦闘を連想しやすいように、機械っぽい音、金属音を要所に入れました。サビの繰り返すときは、パーカッションなどの刻みをやめることで、心に訴えてくる感じになるようにアレンジしました。エピックオーケストラらしい派手で重いミックス、オーケストラ音源のアーティキュレーションの細かいエディットでよりリアルに聴こえるように、曲全体の構成ではわかりやすい展開を意識して、前半は静か、後半で壮大になる2段構えを意識しました。',
  },
  {
    title: '青い滴',
    genre: GENRE.MUSIC,
    description:
      '「水」と「青色」をキーワードに、ファンタジーゲームでの水や洞窟のシーンで使われるBGMを想定して制作しました。水をピアノのアルペジオで表現し、テンションノートをたくさん入れることで水面の不安定さを出しました。ピアノのフレーズにベル系のシンセサイザーを重ねたことにより、水の透明感や光の反射による輝きが増したと思います。',
  },
  {
    title: '星空ドロップ',
    genre: GENRE.GAME,
    description:
      'このゲームは、☆と☆をつないで星座をつくり、その星座を落としてハム☆スターとともに星のかけらを集めてゆく物理パズルゲームです。落とす星座の形を考える面白さや、物理の動きを利用する面白さを27ステージ楽しめます。絵からステージへ遷移する演出や、背景やハム☆スターの見た目、BGMや星をつなぐ音、各ステージのレベルデザイン等、ゲームの細部にまでこだわって作った完成度の高さがウリです。',
  },
  {
    title: 'AboveSoul',
    genre: GENRE.GAME,
    description:
      'DirectX11のHLSLを使ったシェーダーとパーティクルエフェクト。A*アルゴリズムを使った経路探索。',
  },
  {
    title: 'Complex Reel',
    genre: GENRE.MOVIE,
    description:
      '美しいと思う見せ方や映像表現を追求し、リアリティある映像を目指して制作しました。',
  },
  {
    title: 'OASITH',
    genre: GENRE.MOVIE,
    description: '最新の映像表現とリアリティある生物の動きにこだわりました。',
  },
  {
    title: 'ソーゾー工房',
    genre: GENRE.IT,
    description:
      '企画・設計に最も時間をかけ、見えないところまでしっかり設定やプロットをつくり込みました。 API化してより使いやすくAWSで実装できているのもアピールポイントです。',
  },
];

export const dummyExhibits = dummyLocalExhibits.map((exhibit, index) => ({
  ...exhibit,
  group: dummyGroups[index],
  booth: {
    positionNumber: index + 1,
  },
}));
