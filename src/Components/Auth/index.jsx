import { useContext } from 'react';
import { AuthContext } from '../../Context/Auth';

function Auth({ capability, children }) {
  const { loggedIn, can } = useContext(AuthContext); //capabilities, 
  // might have to update to use context.can to check props

  const isLoggedIn = loggedIn;
  const canDo = capability ? can( capability ) : true;
  const okToRender = isLoggedIn && canDo;

//capabilities.includes(capability)
  return (
    <>
      {okToRender
        ? {...children}
        : null
      }
    </>
  )
}

export default Auth;