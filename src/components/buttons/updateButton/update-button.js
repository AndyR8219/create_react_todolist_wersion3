import { RequestUpdateItem } from './request-update-item'
import styles from './update-button.module.css'

export const UpdateButton = ({ value, valueInput, setValueInput }) => {
  return (
    <button
      className={styles.button}
      type="button"
      value={value}
      onClick={(e) => RequestUpdateItem(e, valueInput, setValueInput)}
    >
      Изменить
    </button>
  )
}
