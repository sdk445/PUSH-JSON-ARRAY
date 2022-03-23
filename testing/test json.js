const obj = [
    {
    "name": "abc",
    "child": [{
            "name": "bcd",
            "child": [{
                    "name": "cde",
                    "child": []
                }]
        }]
    },
    {
    "name": "efg",
    "child": [{
            "name": "fgh",
            "child": [{
                    "name": "ghi",
                    "child": []
                }]
        }]
    }
]

var result = JSON.stringify(obj);
console.log(result);