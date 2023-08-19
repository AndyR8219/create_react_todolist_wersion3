import { ref, push } from 'firebase/database'
import { db } from '../../../firebase'

export const RequestAddItem = (e, setIsCreating, valueInput, setValueInput) => {
  e.preventDefault()
  const todosDbRef = ref(db, `todos`)

  if (valueInput.trim()) {
    setIsCreating(true)
    push(todosDbRef, { title: valueInput, complited: false })
      .then(() => {
        console.log('Выполнено')
      })
      .finally(() => {
        setValueInput('')
        setIsCreating(false)
      })
  } else {
    alert('Поле не должно быть пустым')
  }
}
