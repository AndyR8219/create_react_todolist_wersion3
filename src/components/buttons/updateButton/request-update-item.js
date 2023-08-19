import { ref, set } from 'firebase/database'
import { db } from '../../../firebase'

export const RequestUpdateItem = (e, valueInput, setValueInput) => {
  e.preventDefault()

  const updateDbRef = ref(db, `todos/${e.target.value}`)
  if (valueInput.trim()) {
    set(updateDbRef, { title: valueInput }).then(() => {
      setValueInput('')
    })
  } else {
    alert('Поле не должно быть пустым')
  }
}
