import Style from './input.module.css'

export default function Input({ info, name, type, error}) {
    return (
      <div className={Style.group}>
        <input
          {...info}
          id={name}
          className={Style.input}
          placeholder=" "
          type={type}
        />
        <label htmlFor={name} className={Style.label}>
          {name}
        </label>
        <span> { error } </span>
      </div>
    )
}