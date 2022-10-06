import { useParams } from 'react-router-dom';
import Layout from '../../../layout';

function ToDo() {
  const { id } = useParams();
  return (
    <Layout>
      Show - ToDo -
      {' '}
      {id}
    </Layout>
  );
}

export default ToDo;
