import { useRef, useState } from 'react';
import { ParamEditor, Param, Model, ParamEditorRef } from './components/ParamEditor/ParamEditor';

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
  const editorRef = useRef<ParamEditorRef>(null);
  const [output, setOutput] = useState<Model | null>(null);

  const handleSubmit = () => {
    const updatedModel = editorRef.current?.getModel();
    if (updatedModel) {
      setOutput(updatedModel);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <ParamEditor ref={editorRef} params={params} model={model} />
      <button onClick={handleSubmit}>Получить модель</button>

      {output && (
        <pre style={{ marginTop: '20px', background: '#f4f4f4', padding: '10px', borderRadius: '5px' }}>
          {JSON.stringify(output, null, 2)}
        </pre>
      )}
    </div>
  );
}

export default App;