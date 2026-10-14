import { useContext, useState } from 'react';
import { AuthContext } from './AuthContext';

function LoginPanel() {
  const { username, login, logout } = useContext(AuthContext);
  const [name, setName] = useState('');

  return (
    <div>
      {username ? (
        <button onClick={logout}>Выйти</button>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Введите имя"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <button onClick={() => login(name)}>Войти</button>
        </div>
      )}
    </div>
  );
}

export default LoginPanel;


