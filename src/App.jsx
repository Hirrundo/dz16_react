import { AuthProvider } from './AuthContext';
import LoginPanel from './LoginPanel';
import LevelOne from './NestedComponents';

function App() {
  return (
    <AuthProvider>
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h1>Авторизация через useContext</h1>

        <LoginPanel />

        <hr />

        <LevelOne />
      </div>
    </AuthProvider>
  );
}

export default App;





