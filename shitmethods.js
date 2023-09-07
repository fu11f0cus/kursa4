function rofl(x) {
  return x / (x - 1);
}

function trapeciyaone() {
  let a, b, n, h;
  a =+ document.getElementById('trapone').value;
  b =+ document.getElementById('traptwo').value;
  n =+ document.getElementById('trapthree').value;
  if (a == ' ') {
    alert('enter a');
  }
  else if (b == ' ') {
    alert('enter b');
  }
  else if (n == ' ') {
    alert('enter n');
  }
  else if (a >= b) {
    alert('error a > or b')
  }
  else if (n <= 0) {
    alert('n cannot be less than 0');
  }
  else {
    s = "";
    h = (b - a) / n;
    /*let xzxz = (rofl(a) + rofl(b)) / 2;*/
    document.getElementById('step').innerHTML = 'step = (b - a) / 2 = ' + h.toFixed(5);
    for (let i = 1; a <= b; a += h) {
      let xz = rofl(a);
      s = s + '<tr><td>' + 'a = ' + a.toFixed(1) + ' ; ' + 'y = ' + xz.toFixed(5) + '</td></tr>'
    }
    s ='<table border="1" cellpadding="5" cellspacing="0">' + s + '</table>';
    document.getElementById('roflinka2').innerHTML = s;
  }
}
function trapeciyatwo() {
  let a, b, n;
  a =+ document.getElementById('trapone').value;
  b =+ document.getElementById('traptwo').value;
  n =+ document.getElementById('trapthree').value;
  let h = (b - a) / n;
  let arr = [];
  let k = (rofl(a) + rofl(b)) / 2;
  let p = rofl(a) + rofl(b);
  /*document.getElementById('xzxzxz').innerHTML = xzxzxz;*/
  for (let i = 1; a <= b; a += h) {
    let xz = rofl(a);
    arr.push(xz);
    /*document.getElementById('result').innerHTML = arr;*/
  }
  const add = arr => arr.reduce((a, b) => a + b, 0);  
  let sum = (add(arr) - p + k) * h;
  document.getElementById('sum').innerHTML = 'result = ' + sum.toFixed(5);
}


////////////////////////////////////////////////////////////


/*function symps (x) {
  return Math.sqrt(1 + 2 * Math.pow(x, 2) - Math.pow(x, 3));
}

function sympson() {
  let a, b, n, h;
  a =+ document.getElementById('sympsone').value;
  b =+ document.getElementById('sympstwo').value;
  n =+ document.getElementById('sympsthree').value;
  if (a == ' ') {
    alert('enter a');
  }
  else if (b == ' ') {
    alert('enter b');
  }
  else if (n == ' ') {
    alert('enter n');
  }
  else if (a >= b) {
    alert('error a > or b')
  }
  else if (n <= 0) {
    alert('n cannot be less than 0');
  }
  else {
    h = (b - a) / (2 * n);
    s = "";
    let firstlast = symps(a) + symps(b);
    let arrchet = [];
    let arrnechet = [];
    let arrfull = [];
    let k;
    document.getElementById('sympsstep').innerHTML = 'step = (b - a) / (2 * n) = ' + h;
    for (let i = 0; a <= b; a += h) {
      i++;
      let xz = symps(a);
      arrfull.push(xz);
      if ((i - 1) % 2 == true) {
        arrchet.push(xz);
        document.getElementById('arrchet').innerHTML = arrchet;
        const add = arrchet => arrchet.reduce((a, b) => a + b, 0);
        document.getElementById('arrchetsum').innerHTML = add(arrchet);
        let chetniy = 2 * add(arrchet);
        document.getElementById('arrchetresult').innerHTML = chetniy;
      }
      else {
        arrnechet.push(xz);
        document.getElementById('arrnechet').innerHTML = arrnechet;
        const add = arrnechet => arrnechet.reduce((a, b) => a + b, 0);
        document.getElementById('arrnechetsum').innerHTML = add(arrnechet);
        let nechetniy = 4 * add(arrnechet);
        document.getElementById('arrnechetresult').innerHTML = nechetniy;
      }
      s = s + '<tr><td>' + 'a = ' + `(${i}) ` + a.toFixed(1) + ' ; ' + 'y = ' + xz.toFixed(5) + '</td></tr>'
    }
    arrfull.pop();
    arrfull.shift();
    //document.getElementById('arrfull').innerHTML = arrfull;
    const add = arrfull => arrfull.reduce((a, b) => a + b, 0);
    //document.getElementById('test').innerHTML = add(arrfull);
    
    s ='<table border="1" cellpadding="5" cellspacing="0">' + s + '</table>';
    document.getElementById('sympsresult').innerHTML = s;
  }
}*/

function sympsson (x) {
  return x / (x - 1);
}
function sympson(){
  let a, b, n, h;
  a =+ document.getElementById('sympsone').value;
  b =+ document.getElementById('sympstwo').value;
  n =+ document.getElementById('sympsthree').value;
  if (a == ' ') {
    alert('enter a');
  }
  else if (b == ' ') {
    alert('enter b');
  }
  else if (n == ' ') {
    alert('enter n');
  }
  else if (a >= b) {
    alert('error a > or b')
  }
  else if (n <= 0) {
    alert('n cannot be less than 0');
  }
  else {
    let sum1 = 0;
    let sum2 = 0;
    h = (b - a) / n;
    document.getElementById('sympsstep').innerHTML = 'step = (b - a) / n = ' + h;
    for (let k = 1; k <= n; k++) {
      let xk = a + k * h;
      if (k <= n - 1) {
        sum1 += sympsson(xk);
      }
      let xk_1 = a + (k - 1) * h;
      sum2 += sympsson((xk + xk_1) / 2);
    }
    let result = h / 3 * (1 / 2 * sympsson(a) + sum1 + 2 * sum2 + 1 / 2 * sympsson(b))
    document.getElementById('sympsresult').innerHTML = 'result = ' + result;
  }
      }


////////////////////////////////////////////////////////////


function roflthree (x) {
  return x / (x - 1)
}

function leftrect() {
  let a, b, n, h;
  a =+ document.getElementById('leftrectone').value;
  b =+ document.getElementById('leftrecttwo').value;
  n =+ document.getElementById('leftrectthree').value;
  if (a == ' ') {
    alert('enter a');
  }
  else if (b == ' ') {
    alert('enter b');
  }
  else if (n == ' ') {
    alert('enter n');
  }
  else if (a >= b) {
    alert('error a > or b')
  }
  else if (n <= 0) {
    alert('n cannot be less than 0');
  }
  else {
    h = (b - a) / n;
    let rectarr = [];
    s = "";
    document.getElementById('leftrectstep').innerHTML = 'step = (b - a) / n = ' + h;
    for (let i = 0; a < b; a += h) {
      let xz = roflthree(a);
      i++;
      rectarr.push(xz);
      s = s + '<tr><td>' + 'a = ' + `(${i}) ` + a.toFixed(1) + ' ; ' + 'y = ' + xz.toFixed(5) + '</td></tr>'
    }
    const add = rectarr => rectarr.reduce((a, b) => a + b, 0); 
    let result = h * add(rectarr);
    document.getElementById('leftrectarrresult').innerHTML = 'result = ' + result;
    s ='<table border="1" cellpadding="5" cellspacing="0">' + s + '</table>';
    document.getElementById('leftrectresult').innerHTML = s;
  }
}


function rightrect () {
  let a, b, n, h;
  a =+ document.getElementById('rightrectone').value;
  b =+ document.getElementById('rightrecttwo').value;
  n =+ document.getElementById('rightrectthree').value;
  if (a == ' ') {
    alert('enter a');
  }
  else if (b == ' ') {
    alert('enter b');
  }
  else if (n == ' ') {
    alert('enter n');
  }
  else if (a >= b) {
    alert('error a > or b')
  }
  else if (n <= 0) {
    alert('n cannot be less than 0');
  }
  else {
    h = (b - a) / n;
    let rectarr = [];
    s = "";
    document.getElementById('rightrectstep').innerHTML = 'step = (b - a) / n = ' + h;
    for (let i = 0; a <= b; a += h) {
      let xz = roflthree(a);
      i++;
      rectarr.push(xz);
      s = s + '<tr><td>' + 'a = ' + `(${i}) ` + a.toFixed(1) + ' ; ' + 'y = ' + xz.toFixed(5) + '</td></tr>'
    }
    rectarr.shift();
    const add = rectarr => rectarr.reduce((a, b) => a + b, 0); 
    let result = h * add(rectarr);
    document.getElementById('rightrectarrresult').innerHTML = 'result = ' + result;
    s ='<table border="1" cellpadding="5" cellspacing="0">' + s + '</table>';
    document.getElementById('rightrectresult').innerHTML = s;
  }
}


function middlerect () {
  let a, b, n, h;
  a =+ document.getElementById('middlerectone').value;
  b =+ document.getElementById('middlerecttwo').value;
  n =+ document.getElementById('middlerectthree').value;
  if (a == ' ') {
    alert('enter a');
  }
  else if (b == ' ') {
    alert('enter b');
  }
  else if (n == ' ') {
    alert('enter n');
  }
  else if (a >= b) {
    alert('error a > or b')
  }
  else if (n <= 0) {
    alert('n cannot be less than 0');
  }
  else {
    h = (b - a) / n;
    let rectarr = [];
    s = "";
    document.getElementById('middlerectstep').innerHTML = 'step = (b - a) / n = ' + h;
    for (let i = 0; a < b; a += h) {
      let xz = roflthree(a + (h / 2));
      i++;
      rectarr.push(xz);
      s = s + '<tr><td>' + 'a = ' + `(${i}) ` + a.toFixed(1) + ' ; ' + 'y = ' + xz.toFixed(5) + '</td></tr>'
    }
    const add = rectarr => rectarr.reduce((a, b) => a + b, 0); 
    let result = h * add(rectarr);
    document.getElementById('middlerectarrresult').innerHTML = 'result = ' + result;
    s ='<table border="1" cellpadding="5" cellspacing="0">' + s + '</table>';
    document.getElementById('middlerectresult').innerHTML = s;
  }
}


////////////////////////////////////////////////////////////


function gauss() {
  let a, b, n, h;
  a =+ document.getElementById('gaussone').value;
  b =+ document.getElementById('gausstwo').value;
  n =+ document.getElementById('gaussthree').value;
  if (a == ' ') {
    alert('enter a');
  }
  else if (b == ' ') {
    alert('enter b');
  }
  else if (n == ' ') {
    alert('enter n');
  }
  else if (a >= b) {
    alert('error a > or b')
  }
  else if (n <= 0) {
    alert('n cannot be less than 0');
  }
  else {
    h = (b - a) / n;
    s = "";
    let arr = [];
    document.getElementById('gaussstep').innerHTML = 'step = (b - a) / n = ' + h;
      let xz = roflthree(((a + b) / 2) - ((b - a) / (2 * Math.sqrt(3))));
      let xztwo = roflthree(((a + b) / 2) + ((b - a) / (2 * Math.sqrt(3))));
      let result = (xz + xztwo) * h;
      document.getElementById('gaussresult').innerHTML = 'result = ' + result;
    
  }
}


////////////////////////////////////////////////////////////


function roflinka(x, y) {
  return x / (y - 1);
}
function eiler() {
  let h, n, x, y;
  x =+ document.getElementById('eilerone').value;
  y =+ document.getElementById('eilertwo').value;
  n =+ document.getElementById('eilerthree').value;
  if (y == ' ') {
    alert('enter y');
  }
  else if (n == ' ') {
    alert('enter n');
  }
  else if (x >= y) {
    alert('error x > or = y')
  }
  else if (n <= 0) {
    alert('n cannot be less than 0');
  }
  else {
    h = (y - x) / n;
    s = "";
    document.getElementById('eilerstep').innerHTML = 'h = ' + h;
    for (let i = 0; i < n; i++) {
      y += h * roflinka(x, y);
      x += h;
      let xz = roflinka(x, y);
      let k = xz * h;
      s = s + '<tr><td>' + 'a = ' + `(${i}) ` + i.toFixed(1) + ' ; ' + 'x = ' + x.toFixed(3) + '; y = ' + y.toFixed(5) + '; f(xy) = ' + xz.toFixed(5) + '; hf(xy) = ' + k.toFixed(5) + '</td></tr>'
  }
    s ='<table border="1" cellpadding="5" cellspacing="0">' + s + '</table>';
    document.getElementById('eilerresult').innerHTML = s;
    document.getElementById('eilerx').innerHTML = 'x = ' + Math.round(x);
    document.getElementById('eilery').innerHTML = 'y = ' + y.toFixed(4);
  }
}