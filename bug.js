```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setTimeout. The callback function doesn't close over the correct value of setCount
    const intervalId = setInterval(() => {
      setCount(count + 1); // count is stale closure
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```