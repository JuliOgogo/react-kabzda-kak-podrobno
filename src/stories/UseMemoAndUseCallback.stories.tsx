import React, {useCallback, useMemo, useState} from 'react';

export default {
    title: 'Use Memo And Use Callback'
}

export const UseMemoWithDifficultCount = () => {
    console.log('UseMemoWithDifficultCount')
    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)

    let resA = 1
    let resB = 1

    resA = useMemo(() => {
        let tempResA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                let fakeValue = Math.random()
            }
            tempResA = tempResA * i
        }
        return tempResA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resB = resB * i
    }

    return <div>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>Result for A: {resA}</div>
        <div>Result For B: {resB}</div>
    </div>
}

//============

const PrivateUsers = (props: { users: string[] }) => {
    console.log('PrivateUsers')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(PrivateUsers)

export const UseMemoWithReactMemo = () => {
    console.log('UseMemoWithReactMemo')
    const [counter, setCounter] = useState<number>(10)
    const [users, setUsers] = useState<string[]>(['Julia', 'Max', 'Kate'])

    const newUsers = useMemo(() => {
        return users.filter(u => u.toLowerCase().includes('x'))
    }, [users])

    const addUser = () => {
        const NewUsers = [...users, 'Alex' + new Date().getTime()]
        setUsers(NewUsers)
    }

    /*const newUsers = users.filter(u => u.toLowerCase().includes('j'))*/

    return <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        {counter}
        <Users users={newUsers}/>
    </div>
}

//============

export const UseMemoLikeUseCallback = () => {
    console.log('UseMemoLikeUseCallback')
    const [counter, setCounter] = useState<number>(10)
    const [books, setBooks] = useState<string[]>(['React', 'JS', 'CSS', 'HTML'])

    /*const addBook = () => {
        console.log(books)
        const newBooks = [...books, 'Angular' + new Date().getTime()]
        setBooks(newBooks)
    }*/

    const memorizedAddBook = useMemo(() => {
        return () => {
            console.log(books)
            const newBooks = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBooks)
        }
    }, [books])

    const memorizedAddBook2 = useCallback(() => {
        console.log(books)
        const newBooks = [...books, 'Angular' + new Date().getTime()]
        setBooks(newBooks)
    }, [books])

    return <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Books addBook={memorizedAddBook2}/>
    </div>
}

const PrivateBooks = (props: { addBook: () => void }) => {
    console.log('PrivateBooks')
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
    </div>
}

const Books = React.memo(PrivateBooks)
