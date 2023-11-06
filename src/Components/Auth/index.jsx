import { useContext } from 'react';
import { AuthContext } from '../../Context/Auth';

function Auth({ capability, children }) {

  const { capabilities, isLoggedIn } = useContext(AuthContext);


  // might have to update to use context.can to check props
/*
  const isLoggedIn = context.loggedIn;
  const canDo = props.capability ? context.can(props.capability) : true;
  const okToRender = isLoggedIn && canDo;
*/

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