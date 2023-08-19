import { ref, remove } from 'firebase/database'
import { db } from '../../../firebase'

export const RequestDeleteItem = (e) => {
  e.preventDefault()

  const deleteDbRef = ref(db, `todos/${e.target.value}`)
  remove(deleteDbRef).catch((err) => console.log(err))
}
