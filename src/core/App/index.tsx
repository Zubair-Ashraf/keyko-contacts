import { List } from 'core-ui';

const App = () => {
  return (
    <List hoverable>
      <List.Item>
        <List.ItemAvatar url='' />
        <List.ItemText primary='Zubair Ashraf' secondary='Software Engineer' />
      </List.Item>
    </List>
  );
};

export default App;
