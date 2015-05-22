# chknum

Check numeric params in Javascript.

Make it easy to read :
- `chknum(x).positive().greaterThan(5).lesserThan(10);`
- `chknum(x).pos().gt(5).lt(10);`

more readable than :
```js
if (x > 0
    && x > 5
    && x < 10) {

}
```

Example :
```js
var chknum require ('chknum');

function (x, y, z) {

  // This will throw a RangeError if x does'nt match.
  chknum(x).positive().greaterThan(5).lesserThan(10);

  // Also work like this :
  chknum(x).pos().gt(5).lt(10);

  chknum(y).negative(); // Or chknum(y).neg();

  chknum(z).isIn([1,5,6,8,321]);

  chknum(z).between(0,322); // Or chknum(z).btw(0,322);
}
```
