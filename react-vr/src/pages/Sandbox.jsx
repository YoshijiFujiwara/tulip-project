import { useParams } from 'react-router-dom';
import Sandbox1 from '../components/sandbox/Sandbox1';
import Sandbox2 from '../components/sandbox/Sandbox2';
import Sandbox3 from '../components/sandbox/Sandbox3';
import Sandbox4 from '../components/sandbox/Sandbox4';
import Sandbox5 from '../components/sandbox/Sandbox5';
import Sandbox6 from '../components/sandbox/Sandbox6';
import Sandbox7 from '../components/sandbox/Sandbox7';

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
      ) : (
        <div>hoge</div>
      )}
    </>
  );
}
