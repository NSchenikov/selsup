import { useRef } from 'react';
import { ParamEditor, Param } from './components/ParamEditor/ParamEditor';


const params: Param[] = [
  { id: 1, name: 'Назначение', type: 'string' },
  { id: 2, name: 'Длина', type: 'string' },
];

const model = {
  paramValues: [
    { paramId: 1, value: 'повседневное' },
    { paramId: 2, value: 'макси' },
  ],
  colors: [],
};

function App() {
  const editorRef = useRef<{ getModel: () => typeof model }>(null);

  return (
    <>
      <ParamEditor ref={editorRef} params={params} model={model} />
    </>
  );
}

export default App;
