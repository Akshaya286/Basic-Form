import React, { Component } from "react";
import Select, { components } from "react-select";
import dropDownIcon from "assets/icons/dropDownIcon.svg";
class NormalMultiSelect extends Component {
  //change select
  handleChange = (newValue) => {
    let { isMulti } = this.props;
    if (!!isMulti) {
      let body = {
        target: {
          name: this.props.name,
          value: [],
        },
      };
      if (!!newValue && newValue.length) {
        newValue.forEach((array) => {
          let obj = {
            value: array.value,
            label: array.label,
          };
          body.target.value.push(obj);
        });
      }
      this.props.handleChange(body);
    } else {
      let body = {
        target: {
          name: this.props.name,
          value: newValue ? newValue.value : "",
          label: newValue ? newValue.label : "",
        },
      };

      this.props.handleChange(body);
    }
  };

  //handle Input Change
  handleInputChange = (newValue) => {
    let body = {
      target: {
        name: this.props.name,
        value: newValue ? newValue : "",
      },
    };
    this.props.handleinputChange && this.props.handleinputChange(body);
  };

  render() {
    let {
      className = "select-form-control w-100",
      options = [],
      value = "",
      name = "",
      placeholder = "Select",
      disabled = false,
      isMulti = false,
      isClearable = false,
      isSearchable = false,
      showArrow = true,
    } = this.props;

    const DropdownIndicator = (props) => {
      return (
        components.DropdownIndicator && (
          <components.DropdownIndicator {...props}>
            <span className={``}>
              <img src={dropDownIcon} />
            </span>
          </components.DropdownIndicator>
        )
      );
    };
    const customStyles = {
      placeholder: (base) => ({
        ...base,
        fontSize: 14,
        color: "#000",
        fontWeight: 500,
        lineHeight: 16,
      }),
      indicatorSeparator: (base) => ({
        ...base,
        display: "none",
      }),
      dropdownIndicator: (base) => ({
        ...base,
        padding: 0,
        height: "26px",
        width: "26px",
        color: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }),
      singleValue: (base) => ({
        ...base,
        color: "#222222",
        fontWeight: 600,
      }),
      control: (base) => ({
        ...base,
        borderRadius: 4,
        border: "1px solid transparent",
        boxShadow: "0 !important",
        outline: "0 ",
        background: "transparent",
        height: 51,
        // minHeight: 55,
        paddingRight: 10,
        boxShadow: "0px 0px 1px rgba(0, 0, 0, 0.25)",
      }),
    };
    return (
      <Select
        className={className}
        classNamePrefix="Select"
        isDisabled={disabled}
        isClearable={isClearable}
        isSearchable={isSearchable}
        name={name}
        options={options}
        onChange={this.handleChange}
        isMulti={isMulti}
        showArrow={showArrow}
        placeholder={placeholder}
        styles={customStyles}
        value={
          !!options && options.length > 0
            ? options.find((data) => data.value === value)
              ? options.find((data) => data.value === value)
              : null
            : null
        }
        components={{ DropdownIndicator }}
      />
    );
  }
}

export default NormalMultiSelect;
