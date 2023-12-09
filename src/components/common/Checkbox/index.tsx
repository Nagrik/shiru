// create a custom checkbox component that can be used in multiple places

type Props = {
  checked?: boolean;
  onChange?: () => void;
  defaultValue?: boolean;
};
function Checkbox({ onChange, defaultValue }: Props) {
  return (
    <div>
      <input
        onChange={onChange}
        defaultChecked={defaultValue}
        type="checkbox"
      />
    </div>
  );
}

export default Checkbox;
