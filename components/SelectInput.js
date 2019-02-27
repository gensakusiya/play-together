import React from "react";

import styleVar from "./styles/variables";

const NickItem = ({ nick, onClick }) => (
  <div className="wrap" onClick={onClick}>
    <div>{nick}</div>
    <div className="cross">x</div>

    <style jsx>{`
      .wrap {
        border: 1px solid ${styleVar.colors.light};
        border-radius: ${styleVar.radius.default};

        display: flex;
        align-items: center;
        padding: 4px;
        margin-right: 4px;

        cursor: pointer;
      }

      .wrap:hover {
        background-color: ${styleVar.colors.gray};
      }

      .cross {
        margin-left: 10px;
      }
    `}</style>
  </div>
);

class SelectInput extends React.Component {
  state = {
    value: ""
  };

  render() {
    const { value } = this.state;

    const nickLabels = value.split(" ").filter(item => item.trim().length > 0);
    const nickLabelsHtml = nickLabels.length
      ? nickLabels.map(nick => (
          <NickItem
            key={`${nick}__${Math.random()}`}
            nick={nick}
            onClick={() => this.handleClickOnLabel(nick)}
          />
        ))
      : null;

    return (
      <div className="wrap">
        <div className="enter-wrap">
          <input
            placeholder="enter users nick (example - alfred donovan ...)"
            value={value}
            onChange={this.handleChange}
            className="input"
          />
          <button onClick={this.handleClick} className="button">
            search
          </button>
        </div>
        <div className="label-wrap">{nickLabelsHtml}</div>

        <style jsx>{`
          .wrap {
            display: flex;
            flex-direction: column;
          }

          .enter-wrap {
            display: flex;
            align-items: center;

            margin-bottom: 10px;
          }

          .input {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-variant: tabular-nums;
            list-style: none;
            font-feature-settings: "tnum";
            position: relative;
            display: flex;
            width: 100%;
            height: 32px;
            padding: 4px 11px;
            color: ${styleVar.elColors.font};
            font-size: ${styleVar.font.size.default};
            line-height: 1.5;
            background-color: ${styleVar.elColors.background};
            background-image: none;
            border: 1px solid ${styleVar.elColors.border};
            border-radius: ${styleVar.radius.default};
            transition: all 0.3s;
          }

          .input:focus {
            border-color: ${styleVar.elColors.borderFocus};
            border-right-width: 1px;
            outline: 0;
            box-shadow: ${styleVar.shadow.default};
          }

          .button {
            position: relative;
            display: flex;

            line-height: 1.499;
            font-weight: 400;
            white-space: nowrap;
            text-align: center;
            background-image: none;
            border: 1px solid transparent;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
            user-select: none;
            touch-action: manipulation;
            height: 32px;
            padding: 0 15px;
            margin: 0 4px;
            font-size: ${styleVar.font.size.default};
            border-radius: ${styleVar.radius.default};

            color: ${styleVar.colors.white};
            background-color: ${styleVar.colors.blue};
            border-color: ${styleVar.colors.blue};
            text-shadow: ${styleVar.shadow.text};
            box-shadow: ${styleVar.shadow.box};

            outline: 0;
          }

          .button:active {
            outline: 0;
            box-shadow: none;
            background-color: ${styleVar.colors.darkblue};
            border-color: ${styleVar.colors.darkblue};
          }

          .label-wrap {
            display: flex;
            align-items: center;
          }
        `}</style>
      </div>
    );
  }

  handleClick = () => {
    const { value } = this.state;

    const nicks = value.split(" ").filter(item => item.trim().length > 0);
    if (nicks.length > 1) {
      this.props.onLoad(nicks);
    }
  };

  handleChange = e =>
    this.setState({
      value: e.target.value
    });

  handleClickOnLabel = nick =>
    this.setState({
      value: this.state.value.replace(nick, "")
    });
}

export default SelectInput;
