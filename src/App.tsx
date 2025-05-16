import { useRef } from 'react';
import { ParamEditor, Param, Model } from './components/ParamEditor/ParamEditor';

const params: Param[] = [
  { id: 1, name: 'Назначение', type: 'string' },
  { id: 2, name: 'Длина', type: 'string' },
];

const model: Model = {
  paramValues: [
    { paramId: 1, value: 'повседневное' },
    { paramId: 2, value: 'макси' },
  ],
  colors: [],
};

function App() {
  const editorRef = useRef<{ getModel: () => Model }>(null);

  const handleSubmit = () => {
    const updatedModel = editorRef.current?.getModel();
    console.log(updatedModel);
  };

  return (
    <div>
      <ParamEditor ref={editorRef} params={params} model={model} />
      <button onClick={handleSubmit}>Получить модель</button>
    </div>
  );
}

export default App;