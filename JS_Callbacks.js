## JavaScript Callbacks

1. Doubling array elements using callbacks
    
```
const arr = [1,2,3,4];

function doubleValue(arr, func){
    const doubleArr = arr.map((val) => {
        return func(val);
    });
    return doubleArr;
}

function func(arr){
    return arr*2
}

const result = doubleValue(arr, func);
console.log(result);

```

2. 
