import React, {useState} from 'react';

export default {
    title: 'React Memo'
}
const NewMessageCounter = (props: { counter: number }) => {
    console.log('NewMessageCounter')
    return <div>{props.counter}</div>
}

const PrivateUsers = (props: { users: string[] }) => {
    console.log('PrivateUsers')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(PrivateUsers)

export const ReactMemo = () => {
    console.log('React Memo')
    const [counter, setCounter] = useState<number>(10)
    const [users, setUsers] = useState<string[]>(['Julia', 'Max', 'Kate'])

    const addUser = () => {
        const NewUsers = [...users, 'Alex' + new Date().getTime()]
        setUsers(NewUsers)
    }

    return <div>
        React Memo
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessageCounter counter={counter}/>
        <Users users={users}/>
    </div>
}