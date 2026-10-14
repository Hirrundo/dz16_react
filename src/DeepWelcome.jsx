import { useContext } from 'react';
import { AuthContext } from './AuthContext';

function DeepWelcome() {
  const { username } = useContext(AuthContext);

  return (
    <div>
      {username ? (
        <h2>Добро пожаловать, {username}!</h2>
      ) : (
        <h2>Вы не авторизованы</h2>
      )}
    </div>
  );
}

export default DeepWelcome;