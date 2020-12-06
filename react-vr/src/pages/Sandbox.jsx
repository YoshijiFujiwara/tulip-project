import { useParams } from 'react-router-dom';
import Sandbox1 from '../components/sandbox/Sandbox1';
import Sandbox2 from '../components/sandbox/Sandbox2';
import Sandbox3 from '../components/sandbox/Sandbox3';
import Sandbox4 from '../components/sandbox/Sandbox4';
import Sandbox5 from '../components/sandbox/Sandbox5';
import Sandbox6 from '../components/sandbox/Sandbox6';
import Sandbox7 from '../components/sandbox/Sandbox7';
import Sandbox8 from '../components/sandbox/Sandbox8';
import Sandbox9 from '../components/sandbox/Sandbox9';
import Sandbox10 from '../components/sandbox/Sandbox10';
import Sandbox11 from '../components/sandbox/Sandbox11';
import Sandbox12 from '../components/sandbox/Sandbox12';
import Sandbox13 from '../components/sandbox/Sandbox13';
import Sandbox14 from '../components/sandbox/Sandbox14';
import Sandbox15 from '../components/sandbox/Sandbox15';
import Sandbox16 from '../components/sandbox/Sandbox16';
import Sandbox17 from '../components/sandbox/Sandbox17';
import Sandbox18 from '../components/sandbox/Sandbox18';
import Sandbox19 from '../components/sandbox/Sandbox19';
import Sandbox20 from '../components/sandbox/Sandbox20';
import Sandbox21 from '../components/sandbox/Sandbox21';
import Sandbox22 from '../components/sandbox/Sandbox22';
import Sandbox23 from '../components/sandbox/Sandbox23';
import Sandbox24 from '../components/sandbox/Sandbox24';
import Sandbox25 from '../components/sandbox/Sandbox25';
import Sandbox26 from '../components/sandbox/Sandbox26';
import Sandbox27 from '../components/sandbox/Sandbox27';
import Sandbox28 from '../components/sandbox/Sandbox28';
import Sandbox29 from '../components/sandbox/Sandbox29';
import Sandbox30 from '../components/sandbox/Sandbox30';
import Sandbox31 from '../components/sandbox/Sandbox31';
import Sandbox32 from '../components/sandbox/Sandbox32';
import Sandbox33 from '../components/sandbox/Sandbox33';
import Sandbox34 from '../components/sandbox/Sandbox34';
import Sandbox35 from '../components/sandbox/Sandbox35';
import Sandbox36 from '../components/sandbox/Sandbox36';
import Sandbox37 from '../components/sandbox/Sandbox37';
import Sandbox38 from '../components/sandbox/Sandbox38';

export default function Sandbox() {
  const { id } = useParams();
  const numId = parseInt(id);

  return (
    <>
      {numId === 1 ? (
        <Sandbox1 />
      ) : numId === 2 ? (
        <Sandbox2 />
      ) : numId === 3 ? (
        <Sandbox3 />
      ) : numId === 4 ? (
        <Sandbox4 />
      ) : numId === 5 ? (
        <Sandbox5 />
      ) : numId === 6 ? (
        <Sandbox6 />
      ) : numId === 7 ? (
        <Sandbox7 />
      ) : numId === 8 ? (
        <Sandbox8 />
      ) : numId === 9 ? (
        <Sandbox9 />
      ) : numId === 10 ? (
        <Sandbox10 />
      ) : numId === 11 ? (
        <Sandbox11 />
      ) : numId === 12 ? (
        <Sandbox12 />
      ) : numId === 13 ? (
        <Sandbox13 />
      ) : numId === 14 ? (
        <Sandbox14 />
      ) : numId === 15 ? (
        <Sandbox15 />
      ) : numId === 16 ? (
        <Sandbox16 />
      ) : numId === 17 ? (
        <Sandbox17 />
      ) : numId === 18 ? (
        <Sandbox18 />
      ) : numId === 19 ? (
        <Sandbox19 />
      ) : numId === 20 ? (
        <Sandbox20 />
      ) : numId === 21 ? (
        <Sandbox21 />
      ) : numId === 22 ? (
        <Sandbox22 />
      ) : numId === 23 ? (
        <Sandbox23 />
      ) : numId === 24 ? (
        <Sandbox24 />
      ) : numId === 25 ? (
        <Sandbox25 />
      ) : numId === 26 ? (
        <Sandbox26 />
      ) : numId === 27 ? (
        <Sandbox27 />
      ) : numId === 28 ? (
        <Sandbox28 />
      ) : numId === 29 ? (
        <Sandbox29 />
      ) : numId === 30 ? (
        <Sandbox30 />
      ) : numId === 31 ? (
        <Sandbox31 />
      ) : numId === 32 ? (
        <Sandbox32 />
      ) : numId === 33 ? (
        <Sandbox33 />
      ) : numId === 34 ? (
        <Sandbox34 />
      ) : numId === 35 ? (
        <Sandbox35 />
      ) : numId === 36 ? (
        <Sandbox36 />
      ) : numId === 37 ? (
        <Sandbox37 />
      ) : numId === 38 ? (
        <Sandbox38 />
      ) : (
        <div>hoge</div>
      )}
    </>
  );
}
