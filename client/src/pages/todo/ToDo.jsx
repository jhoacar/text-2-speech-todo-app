import { useParams } from 'react-router-dom';

function ToDo() {
  const { id } = useParams();
  return (
    <div>
      ToDo -
      {' '}
      {id}
    </div>
  );
}

export default ToDo;
