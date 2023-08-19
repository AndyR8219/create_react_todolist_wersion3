import { RequestAddItem } from './request-add-item'
import { useState } from 'react'
import styles from './add-button.module.css'

export const AddButton = ({ valueInput, setValueInput }) => {
  const [isCreating, setIsCreating] = useState(false)

  return (
    <button
      className={styles.button}
      type="submit"
      onClick={(e) =>
        RequestAddItem(e, setIsCreating, valueInput, setValueInput)
      }
      disabled={isCreating}
    >
      Добавить запись
    </button>
  )
}
