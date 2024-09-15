function abd() {
  this.a = function() {
    return abi.a;
  };

  this.a = function(abc) {
    abc.a(this);
  };

  this.d = function() {
    return true;
  };

  this.a = function(wf) {
    this.a(wf);
  };
}

abd.a = new abd();
abd.b = yx.a(abd.a);