import { useState, useImperativeHandle, forwardRef } from 'react';
import './ParamEditor.css';

export interface Param {
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

export interface Model {
  paramValues: ParamValue[];
  colors: Color[];
}

interface Props {
  params: Param[];
  model: Model;
}

const StringParamInput = ({ param, value, onChange }: {
  param: Param;
  value: string;
  onChange: (value: string) => void;
}) => (
  <div className="param-input">
    <div className="param-label">{param.name}</div>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="param-field"
    />
  </div>
);

export const ParamEditor = forwardRef((props: Props, ref) => {
  const [paramValues, setParamValues] = useState<Record<number, string>>(() => {
    const initial: Record<number, string> = {};
    props.model.paramValues.forEach(({ paramId, value }) => {
      initial[paramId] = value;
    });
    return initial;
  });

  useImperativeHandle(ref, () => ({
    getModel: (): Model => {
      const updatedValues: ParamValue[] = props.params.map(({ id }) => ({
        paramId: id,
        value: paramValues[id] || '',
      }));
      return {
        paramValues: updatedValues,
        colors: props.model.colors,
      };
    },
  }));

  const handleParamChange = (paramId: number, value: string) => {
    setParamValues((prev) => ({
      ...prev,
      [paramId]: value,
    }));
  };

  return (
    <div>
      {props.params.map((param) => (
        param.type === 'string' ? (
          <StringParamInput
            key={param.id}
            param={param}
            value={paramValues[param.id] || ''}
            onChange={(val) => handleParamChange(param.id, val)}
          />
        ) : null
      ))}
    </div>
  );
});