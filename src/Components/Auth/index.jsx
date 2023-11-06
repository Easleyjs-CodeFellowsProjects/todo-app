import { useContext } from 'react';
import { AuthContext } from '../../Context/Auth';

function Auth({ capability, children }) {

  const { capabilities, isLoggedIn } = useContext(AuthContext);
  return (
    <>
      {isLoggedIn && capabilities.includes(capability)
        ? {...children}
        : null
      }
    </>
  )
}

export default Auth;