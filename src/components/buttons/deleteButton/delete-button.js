import { RequestDeleteItem } from './request-delete-item'
import styles from './delete-button.module.css'

export const DeleteButton = ({ value }) => {
  return (
    <button
      className={styles.button}
      type="button"
      value={value}
      onClick={RequestDeleteItem}
    >
      &times;
    </button>
  )
}
