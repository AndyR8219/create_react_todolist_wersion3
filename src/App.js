import { useState, useEffect } from 'react'
import styles from './App.module.css'
import { TodoItem } from './components/todoItem/todo-item'
import { AddButton } from './components/buttons/addButton/add-button'
import { SortedButton } from './components/buttons/sortedButton/sorted-button'
import { SearchInput } from './components/inputField/searchInput/search-input'
import { Input } from './components/inputField/inputItem/input'
import { ref, onValue } from 'firebase/database'
import { db } from './firebase'

function App() {
  const [todos, setTodos] = useState({})
  const [valueInput, setValueInput] = useState('')
  const [isSearch, setIsSearch] = useState('')
  const [isSorted, setIsSorted] = useState(false)

  useEffect(() => {
    const todosDbRef = ref(db, 'todos')
    return onValue(todosDbRef, (snapshot) => {
      const loadedTodos = snapshot.val() || {}
      setTodos(loadedTodos)
    })
  }, [])

  return (
    <form className={styles.form}>
      <div className={styles.inputBlock}>
        <Input valueInput={valueInput} setValueInput={setValueInput} />

        <AddButton valueInput={valueInput} setValueInput={setValueInput} />
      </div>

      <div className={styles.optionBlock}>
        <SearchInput setIsSearch={setIsSearch} />
        <SortedButton isSorted={isSorted} setIsSorted={setIsSorted} />
      </div>

      <TodoItem
        isSorted={isSorted}
        isSearch={isSearch}
        todos={todos}
        valueInput={valueInput}
        setValueInput={setValueInput}
      />
    </form>
  )
}

export default App
