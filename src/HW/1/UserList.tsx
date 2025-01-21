type AddressType = {
  street: string // ПОДПРАВЛЯЕМ any
  city: string // ПОДПРАВЛЯЕМ any
};

type UserType = {
  id: number
  name: string
  age: number
  address: AddressType

};

type UserListPropsType = {
  users: Array<UserType> // ПО МОЕМУ ЧЕГО-ТО НЕ ХВАТАЕТ...
};

export const UserList = (props: UserListPropsType) => {
  return (
    <div id={'hw01-users'}>
      <h2>User List:</h2>

      {/*<ul>*/}
      {/*  {props.users.map((user) => ( // ВСЕ ТОВАРЫ В СТРАНУ ПРИЕЗЖАЮТ В КОНТЕЙНЕРАХ, А В РЕАКТЕ...*/}
      {/*    <li key={ЭЛЕМЕНТ МАССИВА.id} id={`hw01-user-${ЭЛЕМЕНТ МАССИВА.id}`}>*/}
      {/*      <strong>{ЭЛЕМЕНТ МАССИВА.name}</strong> (Age: {ЭЛЕМЕНТ МАССИВА.age})<strong> Address:</strong>*/}
      {/*      {ЭЛЕМЕНТ МАССИВА.address.street}, {ЭЛЕМЕНТ МАССИВА.address.city}*/}
      {/*    </li>*/}
      {/*  ))}*/}
      {/*</ul>*/}

      <ul>
        {props.users.map(user => {
          return <li key={user.id} id={`hw01-user-${user.id}`}>
            <strong>{user.name}</strong> (Age: {user.age})<strong> Address:{user.address.street}, {user.address.city}</strong>
          </li>
        })}
      </ul>
    </div>
  );
};
