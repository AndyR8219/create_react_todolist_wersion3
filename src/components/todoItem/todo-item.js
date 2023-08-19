import styles from './todo-item.module.css'
import { UpdateButton } from '../buttons/updateButton/update-button'
import { DeleteButton } from '../buttons/deleteButton/delete-button'

export const TodoItem = ({
  isSearch,
  todos,
  valueInput,
  setValueInput,
  isSorted,
}) => {
  const item = isSorted
    ? Object.entries(todos).sort((a, b) => {
        return a[1].title.toLowerCase() > b[1].title.toLowerCase()
          ? 1
          : a[1].title.toLowerCase() < b[1].title.toLowerCase()
          ? -1
          : 0
      })
    : Object.entries(todos)

  const searchItem = item.filter(([, { title }]) => {
    return title.toLowerCase().includes(isSearch.toLocaleLowerCase())
  })

  return (
    <div>
      {searchItem.map(([id, { title }]) => (
        <div className={styles.item} key={id}>
          {title}
          <div className={styles.button}>
            <UpdateButton
              value={id}
              valueInput={valueInput}
              setValueInput={setValueInput}
            />
            <DeleteButton value={id} />
          </div>
        </div>
      ))}
    </div>
  )
}
