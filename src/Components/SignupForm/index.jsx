import { useState, useContext } from 'react';

import useForm from '../../hooks/form';
import { Center, Button, Text, TextInput, Select, Space, Card, Grid, Title } from '@mantine/core';

import axios from 'axios';

function SignupForm() {
    const SERVER_URL = 'http://localhost:3001'

    const [userCreated, setUserCreated] = useState(false);

    function createUser(user) {
          axios.post(SERVER_URL + '/signup', user).then(() => {
            setUserCreated(true);
          })
    }

    const { handleChange, handleUserSubmit } = useForm(createUser, {});

    return (
      <>
        <Grid mt={125}>
            <Grid.Col span={4}></Grid.Col>
            <Grid.Col span={4}>
                <Title m={15} order={4}>Create Account</Title>
                <Card maw={500} shadow="sm" p="lg" radius="md" withBorder>
                <form onSubmit={ handleUserSubmit }>
                    <TextInput
                        placeholder="Username"
                        label="Username"
                        name="username"
                        onChange={ handleChange }
                        withAsterisk
                    />
                    <Space h="md"></Space>          
                    <TextInput
                        placeholder="Password"
                        label="Password"
                        name="password"
                        onChange={ handleChange }
                        withAsterisk
                    />                        
                    <Space h="md"></Space>
                    <Select
                        label="Role"
                        placeholder="Select role"
                        name="role"
                        onChange={ handleChange }
                        data={[
                        { value: 'admin', label: 'Admin' },
                        { value: 'editor', label: 'Editor' },
                        { value: 'reader', label: 'Reader' },
                        { value: 'visitor', label: 'Visitor' },
                        ]}
                    />
                    <Space h="xl"></Space>
                    <Button variant='filled' type="submit">Sign up</Button>
                    </form>
                </Card>
                {
                    userCreated ? <Center><Text mt={25}>Account Created.</Text></Center> : null
                }
            </Grid.Col>
        </Grid>
      </>
    )
}

export default SignupForm;