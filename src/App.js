import './App.css';
import Folder from './components/Folder';
import structure from './data/folderData';

function renderTree(structure, level) {
  console.log(`${"     ".repeat(level)} ${structure.name}`);
  if (structure.isFolder) {
    return structure.child.map((child) => renderTree(child, level + 1))
  }
}
renderTree(structure, 0);


function App() {
  return (
    <div className="App">
      <Folder structure={structure} />
    </div>
  );
}

export default App;
