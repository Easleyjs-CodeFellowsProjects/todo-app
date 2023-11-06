import { useContext } from 'react';
import { AuthContext } from '../../Context/Auth';
import { Grid, TextInput, Button } from '@mantine/core';

function Login() {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  const auth = useContext(AuthContext);

  const handleSubmit = (e) => {
    //console.log('Form is submitted!!');
    e.preventDefault();
    let username = e.target.username.value;
    let password = e.target.password.value;
    //console.log('VALUES FROM THE FORM!', username, password);
    auth.login(username, password);
  }
  //console.log(auth);
  return (
    <>
      {!auth.isLoggedIn
        ? (
            <form onSubmit={handleSubmit}>
                <Grid>
                    <Grid.Col span="auto">
                        <TextInput name="username" 
                        placeholder="username"
                        />
                    </Grid.Col>
                    <Grid.Col span="auto">
                        <TextInput name="password" 
                        type="password" 
                        placeholder="password" 
                        />
                    </Grid.Col>
                    <Grid.Col span="auto">
                        <Button variant="default" type="submit" >Login</Button>
                    </Grid.Col>
                </Grid>
            </form>
        ) 
        : (<Button variant="outline" color="red" onClick={auth.logout}>logout</Button>)
      }
      </>
  )
}

export default Login;