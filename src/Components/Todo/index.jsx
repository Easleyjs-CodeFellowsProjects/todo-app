import { SettingsContext } from '../../Context/Settings/index';
import { Card, Text, Badge, Button, Group, CloseButton } from '@mantine/core';

const Todo = ( props ) => {
  const { id, text, assignee, difficulty, complete } = props.item;
  const { completeHandler } = props;
  return (
    <Card shadow="sm" padding="lg" radius="md" maw={400} withBorder>
      <Group mt="md" mb="xs">
        <Text fw={500}>{ text }</Text>
        <Badge color={ complete ? "pink" : "green"} variant="light">
          { complete ? 'COMPLETE' : 'PENDING'}
        </Badge>
      
      </Group>
      <Text size="sm" c="dimmed" mt="sm">
        Assigned to: { assignee }
      </Text>
      <Text size="sm" c="dimmed" mt="sm">
      Difficulty: { difficulty }
      </Text>
      <Button variant="light" color="blue" mt="md" radius="md" onClick={() => completeHandler(id)}>
        Complete
      </Button>
    </Card>
  );
};

export default Todo;
