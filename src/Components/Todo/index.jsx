import { Card, Text, Badge, Button, Group, CloseButton } from '@mantine/core';

import Auth from '../Auth';

const Todo = ( props ) => {
  const { id, text, assignee, difficulty, complete } = props.item;
  const { completeHandler, closeHandler } = props;

  
  return (
    <Card shadow="sm" padding="lg" radius="md" maw={400} mt={5} withBorder>
      <Group mt="md" mb="xs">
        <Text fw={500}>{ text }</Text>
        <Badge color={ complete === "0" ? "pink" : "green"} variant="dark">
          { complete === true ? 'COMPLETE' : 'PENDING'}
        </Badge>
        <CloseButton onClick={() => closeHandler(id)}></CloseButton>
      </Group>

      <Text size="sm" c="dimmed" mt="sm">
        Assigned to: { assignee }
      </Text>

      <Text size="sm" c="dimmed" mt="sm">
      Difficulty: { difficulty }
      </Text>
      
      <Auth capability="update">
        <Button variant="light" color="blue" mt="md" radius="md" onClick={() => completeHandler(id)}>
          Complete
        </Button>
      </Auth>
    </Card>
  );
};

export default Todo;
