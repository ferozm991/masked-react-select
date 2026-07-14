import Select from "react-select/creatable";
import type { ComponentType, FC, Ref } from "react";
import type { Theme, StylesConfig, InputProps, GroupBase } from "react-select";
import { useMask } from "@react-input/mask";
export type OptionType = { value: string; label: string } | null;

// Reusable MaskedReactSelect component
type MaskedReactSelectProps = {
  placeholder?: string;
  inputId: string;
  options: { value: string; label: string }[];
  value: OptionType;
  onCreateOption: (value: string) => void;
  onChange: (option: OptionType) => void;
  onBlur: () => void;
  error?: string;
  touched?: boolean;
  mask?: string;
  replacement?: { [key: string]: RegExp };
};

const selectTheme = (theme: Theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: "#e0e7ff",
    primary: "#6366f1",
    neutral0: "#fff",
    neutral80: "#1e293b",
    neutral20: "#64748b",
  },
});

const selectStyles: StylesConfig<{ value: string; label: string }, false> = {
  menu: (base) => ({
    ...base,
    backgroundColor: "#fff",
    color: "#1e293b",
  }),
  option: (base, state) => {
    let bg = "#fff";
    if (state.isSelected) bg = "#6366f1";
    else if (state.isFocused) bg = "#e0e7ff";
    return {
      ...base,
      backgroundColor: bg,
      color: state.isSelected ? "#fff" : "#1e293b",
      fontWeight: state.isSelected ? 600 : 400,
    };
  },
  singleValue: (base) => ({ ...base, color: "#1e293b" }),
  control: (base) => ({
    ...base,
    backgroundColor: "#f3f4f6",
    color: "#1e293b",
  }),
  input: (base) => ({ ...base, color: "#1e293b" }),
};

const selectClassNames = {
  control: () => "masked-react-select-control",
};

const CreatableSelect = Select as unknown as ComponentType<any>;

export default function MaskedReactSelect({
  placeholder,
  inputId,
  options,
  value,
  onCreateOption,
  onChange,
  onBlur,
  error,
  touched,
  mask,
  replacement,
}: Readonly<MaskedReactSelectProps>) {
  const inputRef = useMask({
    mask: mask!,
    replacement: replacement as any,
  });

  // Show placeholder as "+1__________" when value is empty for phone input
  const inputPlaceholder = mask && !value?.value ? mask : placeholder;

  return (
    <>
      <CreatableSelect
        placeholder={inputPlaceholder}
        inputId={inputId}
        options={options}
        value={value}
        onCreateOption={onCreateOption}
        onChange={onChange}
        onBlur={onBlur}
        classNames={selectClassNames as any}
        theme={selectTheme as any}
        styles={selectStyles as any}
        components={
          mask
            ? {
                Input: (props: any) => (
                  <MaskedInput props={props} inputRef={inputRef as any} />
                ),
              }
            : undefined
        }
      />
      {touched && error && (
        <div className="masked-react-select-error">{error}</div>
      )}
    </>
  );
}

const MaskedInput: FC<{
  inputRef: Ref<HTMLInputElement>;
  props: InputProps<
    { value: string; label: string },
    false,
    GroupBase<{ value: string; label: string }>
  >;
}> = ({ inputRef, props }) => {
  const {
    cx,
    innerRef,
    clearValue,
    getStyles,
    getValue,
    getClassNames,
    selectOption,
    setValue,
    hasValue,
    isMulti,
    isRtl,
    selectProps,
    isDisabled,
    isHidden,
    ...inputProps
  } = props;
  return (
    <input
      {...inputProps}
      ref={inputRef as React.Ref<HTMLInputElement>}
      className={`masked-react-select-input${
        props.value === ""
          ? " masked-react-select-input--placeholder"
          : ""
      }`}
    />
  );
};
