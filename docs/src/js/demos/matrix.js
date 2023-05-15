function dot(a1, a2) {
  let dp = 0;
  if (!(a1.length == a2.length)) return;
  for (var i = 0; i < a1.length; i++) {
    dp += (a1[i]*a2[i]);
  }
  return dp;
}

function scale(a1, scalar) {
  let scaled = new Array(a1.length);
  for (var i = 0; i < a1.length; i++) {
    scaled[i] = a1[i] * scalar;
  }
  return scaled;
}

function subtract(a1, a2) {
  if (a1.length != a2.length) return;
  let diff = new Array(a1.length);
  for (var i = 0; i < a1.length; i++) {
    diff[i] = a1[i]-a2[i];
  }
  return diff;
}

class Matrix {
  constructor(N) {
    this.N = N;
    this.mm = new Array(N);
    for (var i = 0; i < N; i++) {
      this.mm[i] = new Array(N);
      this.mm[i].fill(0);
    }
  }
  load(arr) {
    if (arr.length != arr[0].length) return;
    for (var x = 0; x < Math.min(arr.length, this.N); x++) {
      for (var y = 0; y < Math.min(arr.length, this.N); y++) {
        this.mm[x][y] = arr[x][y];
      }
    }
  }
  get(x, y) {
    if (!(x >= 0 && x < this.N && y >= 0 && y < this.N)) return;
    return this.mm[x][y];
  }
  column(p) {
    if (!(p >= 0 && p < this.N)) return;
    let colv = new Array(this.N);
    for (var i = 0; i < this.N; i++) {
      colv[i] = this.get(i, p);
    }
    return colv;
  }
  insert(x, y, num) {
    if (!(x >= 0 && x < this.N && y >= 0 && y < this.N)) return;
    this.mm[x][y] = num;
  }
  matmul(m2) {
    let p = new Matrix(this.N);
    for (var x = 0; x < this.N; x++) {
      for (var y = 0; y < this.N; y++) {
        p.insert(x, y, dot(this.mm[x], m2.column(y)));
      }
    }
    return p;
  }
  frand() {
    for (var x = 0; x < this.N; x++) {
      for (var y = 0; y < this.N; y++) {
        this.insert(x, y, Math.floor(Math.random()*10));
      }
    }
  }
  remove(a_y) {
    // return matrix that removes the ith row and ith column
    let removed = new Matrix(this.N-1);
    for (var x = 1; x < this.N; x++) {
      for (var y = 0; y < this.N; y++) {
        if (y == a_y) continue;
        removed.mm[x-1][y-(y>a_y?1:0)] = this.mm[x][y];
      }
    }
    return removed;
  }
  fill(M) {
    for (var x = 0; x < this.N; x++) {
      for (var y = 0; y < this.N; y++) {
        this.mm[x][y] = M;
      }
    }
  }
  det() {
    var d = 0.0;
    if (this.N == 2) return (this.mm[0][0]*this.mm[1][1])-(this.mm[0][1]*this.mm[1][0])
    for (var i = 0; i < this.N; i++) {
      d += Math.pow(-1, i)*this.mm[0][i]*this.remove(i).det();
    }
    return d;
  }
  copy() {
    let copied = new Matrix(this.N);
    for (var x = 0; x < this.N; x++) {
      copied.mm[x] = this.mm[x].slice();
    }
    return copied;
  }
};

function identity(N) {
  let I_n = new Matrix(N);
  for (var i = 0; i < N; i++) {
    I_n.insert(i, i, 1);
  }
  return I_n;
}

function invert(m) {
  let c = m.copy();
  if (m.det() == 0) return;
  let I_m = identity(m.N);
  for (var n1 = 0; n1 < c.N; n1++) {
    var s_index = n1, switched = false, scalar = 0;
    if (c.mm[n1][n1] == 0) {
      for (var NI = n1+1; NI < c.N; NI++) {
        if (c.mm[n1][NI] != 0) {
          s_index = NI;
          switched = true;
          break;
        }
      }
    }

    scalar = 1/c.mm[n1][s_index];
    c.mm[n1] = scale(c.mm[n1], scalar);
    I_m.mm[n1] = scale(I_m.mm[n1], scalar);

    if (switched) {
      let tmp = c.mm[s_index], tmpI = I_m.mm[s_index];
      c.mm[s_index] = c.mm[n1];
      c.mm[n1] = tmp;
      I_m.mm[s_index] = I_m.mm[n1];
      I_m.mm[n1] = tmpI;
    } else {
      for (var n2 = 0; n2 < c.N; n2++) {
        if (n1 == n2) continue;
        var s2 = c.mm[n2][n1];
        c.mm[n2] = subtract(c.mm[n2], scale(c.mm[n1], s2));
        I_m.mm[n2] = subtract(I_m.mm[n2], scale(I_m.mm[n1], s2));
      }
    }
    n1 -= switched;
  }
  return I_m;
}

function matmul(M, N) {
  if (M.N != N.length) return;
  let p = new Array(M.N);
  for (var i = 0; i < M.N; i++) {
    p[i] = dot(M.mm[i], N);
  }
  return p;
}

function matrix_fields(N) {
  var m = document.getElementById("matrix"), v = document.getElementById("variables"), o = document.getElementById("output");
  m.innerHTML = v.innerHTML = o.innerHTML = "";
  for (var x = 0; x < N; x++) {
    var vb = document.createElement("input");
    vb.type = "text"; vb.id = `x_${x}`;
    v.appendChild(vb);

    var og = document.createElement("input");
    og.type = "number"; og.step = "0.01"; og.id=`output_${x}`;
    o.appendChild(og);

    document.getElementById(`x_${x}`).setAttribute('value', `x_${x}`);
    document.getElementById(`x_${x}`).setAttribute('readonly', true);
    for (var y = 0; y < N; y++) {
      var form = document.createElement("input");
      form.type = "number"; form.step = "0.01"; form.id = `matrix_${x}${y}`;
      m.appendChild(form);
    }
    v.innerHTML += "<br>";
    o.innerHTML += "<br>";
    m.innerHTML += "<br>";
  }
}

function get(size) {
  var matrix = new Matrix(size);
  var output = new Array(size);
  for (var x = 0; x < size; x++) {
    for (var y = 0; y < size; y++) {
      var id = `matrix_${x}${y}`;
      var grid = document.getElementById(id);
      matrix.insert(x,y,isNaN(parseFloat(grid.value))?0:parseFloat(grid.value));
    }
    var output_grid = document.getElementById(`output_${x}`);
    output[x] = (isNaN(parseFloat(output_grid.value))?0:parseFloat(output_grid.value));
  }
  return [matrix, output];
}

window.onload = (event) => {
  var submitted = false;
  var size;
  var form = document.getElementById("cform");
  var count = document.getElementById("count");
  var solve = document.getElementById("solve");
  solve.style.visibility = "hidden";
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    size = parseInt(count.value);
    submitted = true;
    solve.style.visibility = "visible";
    matrix_fields(size);
  });


  solve.addEventListener("click", (event) => {
    if (submitted) {
      var m = get(size);
      var sol = matmul(invert(m[0]), m[1]);
      var solutions = document.getElementById("solution");
      for (var i = 0; i < size; i++) {
        var sol_v = document.createElement("input");
        sol_v.type = "text"; sol_v.id = `sv_${i}`;
        solutions.appendChild(sol_v);
        document.getElementById(`sv_${i}`).setAttribute('value', sol[i]);
        document.getElementById(`sv_${i}`).setAttribute('readonly', true);
        solutions.innerHTML += "<br>";
      }
    }
  });
};
