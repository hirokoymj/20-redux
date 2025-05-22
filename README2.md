# REST APIs using fetch API

```js
useEffect(()=>{}, [])
// Method #1 - Use .then
fetch(url).then(response=>{}).then(data=>{}).catch(error=>{})
======
fetch(url) -> response
!response.ok -> new Error()
response.json() -> data
=====
// Method #2 - Use async/await
const getData = async() =>{try().catch().finally()}
const response = await fetch(url)
const data = await response.json()
```

## GET

```js
export const UsersView = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error("");
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
      });
  }, []);
```

### POST

```js
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({id:xx, name:xxx}),
})
  .then(response).then.(data).catch(e);
```

### DELETE

```js
fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
  method: "DELETE",
})
  .then(response)
  .then(data)
  .catch(e);
```

### PUT

```js
fetch("https://your-api-endpoint.com/items/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then(response)
  .then(updatedData)
  .catch(e);
```

//2. React Form
//3.

### Render nested array of objects

```js
onst data = [
  {
    id: 1,
    name: "Category 1",
    items: [
      { id: 101, name: "Item 1.1" },
      { id: 102, name: "Item 1.2" },
    ],
  },
  {
    id: 2,
    name: "Category 2",
    items: [
      { id: 201, name: "Item 2.1" },
      { id: 202, name: "Item 2.2" },
      { id: 203, name: "Item 2.3" },
    ],
  },
];
export const DemoView = () => {
  return (
    <div>
    </div>
  );
};
```

**Q1:A**

- Warning: "JSX must have one parent element"

```js
return (
  <>
    <div>node1</div>
    <div>node2</div>
  </>
);
```

```js
export const DemoView = () => {
  return (
    <div> ## <====A outer div of the first map().
      {data.map((category) => (
        <div key={category.id}>## <====A innter div of the 2nd map().
          <h3>{category.name}</h3>
          <ul> ## <====A outer div of the map().
            {category.items.map((item) => (
              <li key={item.id}>{item.id}</li> ## <====A innter div of the map().
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
```
