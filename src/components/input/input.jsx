import { useWindow } from '../../util/hook/window/useWindow'
import Style from "./input.module.css";

const Input = ({ register, name, type, error, width }) => {
  const { viewportWidth } = useWindow();

  return (
    <div className={Style.group}>
      <input
        { ...register(name) }
        type={type}
        id={name}
        className={Style.input}
        placeholder=" "
        style={{ minWidth: `${viewportWidth <= 800 ? 100 + '%' :  width + "px"}` }}
      />
      <label htmlFor={name} className={Style.label}>
        {name}
      </label>
      {error[name]?.message && <span className={Style.group_error}>{error[name]?.message}</span>}
    </div>
  );
};

export default Input;
