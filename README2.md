# React Tasks

## `fetch` example -

```js
export const UsersView = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    const getData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw Error(`HTTP error`);
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
```

//2. React Form
//3.

**Q1: Render nested array of objects**

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
    <div>
      <h2>Demo</h2>
      {data.map((category) => (
        <div key={category.id}>
          <h3>{category.name}</h3>
          <ul>
            {category.items.map((item) => (
              <li key={item.id}>{item.id}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
```
