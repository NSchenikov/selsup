#  Param Editor — Тестовое задание для компании Selsup

Этот проект реализует компонент редактора параметров товара в соответствии с интерфейсом `Model`. Поддерживаются параметры типа `string`. Компонент позволяет отображать и редактировать значения параметров, а также получать итоговую модель через публичный метод `getModel()`.

---

##  Стек технологий

- React (с использованием функциональных компонентов и хуков)
- TypeScript
- CSS (вынесен в отдельный файл)
- Без сторонних UI-библиотек — всё на чистом React

---

##  Структура интерфейсов

```ts
interface Param {
  id: number;
  name: string;
  type: 'string';
}

interface ParamValue {
  paramId: number;
  value: string;
}

interface Color {
  id: number;
  name: string;
  hex: string;
}

interface Model {
  paramValues: ParamValue[];
  colors: Color[];
}

Как запустить проект:
1. Клонировать репозиторий
git clone https://github.com/NSchenikov/selsup.git
cd selsup
2. Установить зависимости
npm install
# или
yarn install
3. Запустить проект в режиме разработки
npm start
# или
yarn start

Откройте в браузере http://localhost:3000

Пример использования в App.tsx:
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



Что реализовано:
 Отображение всех параметров сразу;
 Возможность редактирования значений;
 Метод getModel() для получения актуальных значений;
 Поддержка только string параметров (с возможностью расширения);
 Вынесенные стили в отдельный CSS-файл;
 Гибкая архитектура, легко масштабируемая под другие типы параметров;

 