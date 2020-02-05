var data = { a: 1 };
var string = { a: "ishihara" };
var vm = new Vue({
  el: "#example",
  data: {
    data,
    string
  }
});

var flag = vm.$data === data;

console.log(flag);
console.log(vm.$data);

var flag2 = vm.$el === document.getElementById("example");
console.log(flag2);
console.log(vm.$data);
console.log(vm.$data.string);
console.log(vm.$data.string.a);

// インスタンスメソッド
vm.$watch("a", function(newValue, oldValue) {
  console.log("変更されました");
});

new Vue({
  data: {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  },
  created: function() {
    console.log("a is: " + this.a);
    console.log("a is: " + this.b);
    console.log("a is: " + this.c);
    console.log("a is: " + this.d);
  }
});

var app2 = new Vue({
  el: "#app-2",
  data: {
    message: "You loaded this page on " + new Date().toLocaleString()
  }
});

var app4 = new Vue({
  el: "#app-4",
  data: {
    todos: [
      { text: "Learn JavaScript" },
      { text: "Learn Vue" },
      { text: "Build something awesome" }
    ]
  }
});

var app10 = new Vue({
  el: "#app-10",
  data: {
    conte: [
      { text: "I am Satoshi" },
      { text: "My school is Kosen" },
      { text: "I am 21 years old" },
      { text: "I am 21 years old" },
      { text: "I am 21 years old" },
      { text: "I am 21 years old" },
      { text: "I am 21 years old" },
      { text: "I am 21 years old" },
      { text: "I am 21 years old" },
      { text: "I am 21 years old" },
      { text: "I am 21 years old" }
    ]
  }
});

Vue.component("todo-item", {
  props: ["prop"],
  template: "<h2>{{ prop.text }}</h2>"
});

// Vue.component("section-a", {
//   props: ["props"],
//   template: "<div><p>{{ props.text }}</p></div>"
// });

var app7 = new Vue({
  el: "#app-7",
  data: {
    ggg: [
      { id: 0, text: "Vegetables" },
      { id: 1, text: "Cheese" },
      { id: 2, text: "Whatever else humans are supposed to eat" }
    ]
  }
});
