import React from "react";
import "./index.css";

interface Param {
  id: number;
  name: string;
  type: "string";
}

interface ParamValue {
  paramId: number;
  value: string;
}

interface Model {
  paramValues: ParamValue[];
}

interface Props {
  params: Param[];
  model: Model;
}

class App extends React.Component<Props, Model> {
  constructor(props: Props) {
    super(props);

    this.state = {
      paramValues: this.initializeParamValues(),
    };
  }

  initializeParamValues() {
    const { params, model } = this.props;

    return params.map((param) => {
      const existingValue = model.paramValues.find(
        (value) => value.paramId === param.id
      );
      return {
        paramId: param.id,
        value: existingValue ? existingValue.value : "",
      };
    });
  }

  handleParamChange(paramId: number, value: string) {
    this.setState((prevState) => ({
      paramValues: prevState.paramValues.map((paramValue) =>
        paramValue.paramId === paramId ? { ...paramValue, value } : paramValue
      ),
    }));
  }

  getModel(): Model {
    return {
      paramValues: this.state.paramValues,
    };
  }

  render() {
    return (
      <div className="container">
        {this.props.params.map((param) => (
          <div className="container__element" key={param.id}>
            <label>{param.name}</label>
            <input
              type="text"
              value={
                this.state.paramValues.find(
                  (value: { paramId: number }) => value.paramId === param.id
                )?.value || ""
              }
              onChange={(e) => this.handleParamChange(param.id, e.target.value)}
            />
          </div>
        ))}
      </div>
    );
  }
}
export default App;
