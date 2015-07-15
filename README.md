# chknum

Check numeric params in Javascript.

See documentation [here](https://github.com/SachaCR/chknum)

Make it easy to read :
- `chknum(x)isInt().greaterThan(5).lesserThan(10);`
- `chknum(x).gt(5).lt(10);`

more compact and readable than :
```js
if (x > 5 && x < 10) {

} else {
  throw new RangeError();
}
```

Example :
```js
var chknum require ('chknum');

function (x, y, z) {

  // This will check if the number is an integer.
  chknum(x).isInt();

  // This will check if the number is a float.
  chknum(x).isFloat();

  // This will throw a RangeError if x does'nt match.
  chknum(x).greaterThan(5).lesserThan(10);

  // Also work like this :
  chknum(x).gt(5).lt(10);

  chknum(y).negative(); // Or chknum(y).neg();

  chknum(y).positive(); // Or chknum(y).pos();

  chknum(z).isIn([1,5,6,8,321]);

  chknum(z).between(0,322); // Or chknum(z).btw(0,322);

  chknum(z).equal(200); // Or chknum(z).eq(200);
}
```
