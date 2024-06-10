function symmetricPoint(p, q) {
    var a = p[0] - q[0];
    var b = p[1] - q[1];
    return [q[0]-a, q[1]-b];
  }