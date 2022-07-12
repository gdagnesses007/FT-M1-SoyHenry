"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.size = function () {
  let size = 0;
  if (this.isLeaf()) {
    return 1;
  }
  if (this.left) {
    size += this.left.size();
  }
  if (this.right) {
    size += this.right.size();
  }
  return size + 1;
}

BinarySearchTree.prototype.insert = function (value) {
  if (value <= this.value) {
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = new BinarySearchTree(value);
    }
  } else {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = new BinarySearchTree(value);
    }
  }
}

BinarySearchTree.prototype.contains = function (value) {
  if (this.value === value) {
    return true;
  }
  if (this.left && value < this.value) {
    return this.left.contains(value);
  }
  if (this.right && value > this.value) {
    return this.right.contains(value);
  }
  return false;
}

BinarySearchTree.prototype.depthFirstForEach = function (callback, dfs = 'in-order') {
  switch (dfs) {
    case 'post-order':
      if (this.left) {
        this.left.depthFirstForEach(callback, dfs);
      }
      if (this.right) {
        this.right.depthFirstForEach(callback, dfs);
      }
      callback(this.value);
      break;
    case 'pre-order':
      callback(this.value);
      if (this.left) {
        this.left.depthFirstForEach(callback, dfs);
      }
      if (this.right) {
        this.right.depthFirstForEach(callback, dfs);
      }
      break;
    case 'in-order':
      if (this.left) {
        this.left.depthFirstForEach(callback, dfs);
      }
      callback(this.value);
      if (this.right) {
        this.right.depthFirstForEach(callback, dfs);
      }
      break;
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function (callback) {
  let queue = [];
  queue.push(this);
  while (queue.length > 0) {
    let tree = queue.shift();
    callback(tree.value);
    if (tree.left) {
      queue.push(tree.left);
    }
    if (tree.right) {
      queue.push(this.right);
    }
  }
}

BinarySearchTree.prototype.isLeaf = function () {
  return !this.left && !this.right;
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
