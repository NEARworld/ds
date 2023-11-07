# Tree

## 이진 트리 (Binary Tree)

트리를 구성하고 있는 각 노드들이 자식을 최대 2개까지만 가지는 트리입니다.

```js
class BinaryTree {
  constructor() {
    this.root = null;
  }
}

const bt = new BinaryTree();
```

처음 트리 인스턴스를 생성했을 때는 트리에 노드가 1개도 없기 때문에 루트 노드도 존재하지 않습니다.  
그러므로 루트 노드를 의미하는 root 식별자가 `null` 값을 가라킵니다.

이제 트리를 채우기 위해 노드를 삽입하는 연산을 하려고 합니다.  
삽입 연산을 하는 트리 클래스의 메서드, 트리에 삽입되는 대상인 노드 인스턴스가 필요합니다.  

트리에 노드를 삽입하는 연산을 하는 메서드를 `insert` 라고 정의합니다.  
트리에 삽입되는 노드 인스턴스는 `value` 속성과  각각 왼쪽, 오른쪽 자식 노드를 가리킬 `left`, `right` 속성을 가집니다.  

노드 클래스를 구현한 후 트리의 삽입 연산을 시행하는 `insert` 메서드를 구현하겠습니다.

### 이진 트리 노드 (Binary Tree Node)
```js
class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const node = new BinaryTreeNode(1);
```
위 클래스를 이용하여 생성한 `node` 인스턴스는 아래와 같은 형태입니다.  

<img width="559" alt="image" src="https://github.com/NEARworld/ds/assets/102969108/65224007-1339-4e2c-9749-24c9b2230f47">

위 노드를 맨 처음 구현했던 `BinaryTree` 클래스의 인스턴스를 이용하여 트리에 삽입하려고 합니다.  
이를 위해 삽입 연산을 시행하는 메서드 `insert` 가 필요합니다.

### 이진 트리의 노드 삽입 연산 구현

```js
class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(node) {
    if (this.root === null) return this.root = node; // <--- 1
  }
}

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const bt = new BinaryTree();
const node = new BinaryTreeNode(1);
bt.insert(node)
```
위 코드에서 `1` 표시가 되어있는 부분을 보면 트리 인스턴스의 `root` 변수가 가리키는 값이 `null` 이면 트리에 아무 노드도 없기 때문에  
그 상황에서 삽입되는 노드를 루트 노드로 만드는 코드입니다.

위 코드의 처리 결과를 이미지로 나타내면 아래와 같습니다.  

<img width="559" alt="image" src="https://github.com/NEARworld/ds/assets/102969108/3b65c467-3ca3-4963-9961-8d7d5117a3a9">

위 `insert` 메서드는 트리에 아무 노드도 없을 때 삽입된 노드를 루트 노드로 만드는 기능만 하고 있습니다.  
이제 트리에는 루트 노드 하나가 존재하고 있는 상태입니다.  

이진 트리에서 노드는 자식을 최대 2개 까지 가질 수 있으므로 루트 노드에 자식을 2개 채우려고 합니다.
먼저 새 노드가 삽입되면 현재 트리에 존재하는 루트 노드의 왼쪽 자식으로 만드려고 합니다.  
그런 다음 새 노드가 삽입되면 루트 노드의 오른쪽 자식으로 만들겠습니다.

#### insert 메서드
```js
insert(node) {
  if (this.root === null) return this.root = node;

  // 루트 노드의 왼쪽 자식 노드가 없다면 삽입 노드를 왼쪽 자식 노드가 되게 합니다.
  if (!this.root.left) return this.root.left = node;
  // 루트 노드의 왼쪽 자식이 있는 경우에만 삽입 노드를 오른쪽 자식 노드가 되게 합니다.
  if (!this.root.right) this.root.right = node;
}
```

```js
const node1 = new BinaryTreeNode(1);
bt.insert(node1); // this.root -> node1
const node2 = new BinaryTreeNode(2);
bt.insert(node2); // this.root.left -> node2
const node3 = new BinaryTreeNode(3);
bt.insert(node3); // this.root.right -> node3;
```
현재 상황을 그림으로 나타내면 아래와 같습니다.  

<img width="900" alt="image" src="https://github.com/NEARworld/ds/assets/102969108/34dfa53a-dddb-4a1e-b597-cb2d63e029fa">

루트 노드에는 자식 노드를 왼쪽, 오른쪽에 추가했으므로 이번에는 새로운 노드를 루트 노드의 왼쪽 자식 노드인 `node2`의 왼쪽 자식 자리에 삽입해보려고 합니다.  
그러나 현재의 `insert` 메서드는 아래의 조건만 가지고 연산을 하고 있습니다.  

1. 루트 노드가 없을때 삽입 노드를 루트 노드로 만든다.
2. 루트 노드의 왼쪽 자식 노드가 없을때 삽입 노드를 왼쪽 자식 노드로 만든다.
3. 루트 노드의 오른쪽 자식 노드가 없을때 삽입 노드를 오른쪽 자식 노드로 만든다.

현재 `insert` 메서드가 루트 노드에 대해서만 연산을 하고 있으므로 일반적으로 모든 노드에 연산을 수행하여 모든 노드에 자식들을 삽입할 수 있도록 수정할 필요가 있습니다.  

그리고 위 그림을 보면 트리 내의 노드들을 가리키고 있는 식별자들이 보입니다.  
노드들이 트리 내에서 참조되는 것이 아니라 트리 외부의 식별자를 통해 참조된다면 메모리 낭비 이슈가 발생할 수 있습니다.  

위 2가지 문제를 해결하는 쪽으로 코드를 작성하는게 낫겠다라는 생각이 들었습니다.
- insert 메서드의 연산이 트리 내 모든 노드에 적용되어야 한다.
- 전역 스코프에서 노드 인스턴스들을 참조하는 변수들을 제거한다.  

### 노드 인스턴스들을 트리 외부에서 참조하고 있는 변수의 제거
`bt.root`, `node1`, `node2`, `node3`  

`bt.root`를 제외한 식별자들은 모두 전역 실행 컨텍스트에 존재하는 식별자들입니다.  
`node1`이 가리키는 노드 객체는 `bt.root`가 참조하고 있으므로 가비지 컬렉팅 되지 않습니다.  
`node2`가 가리키는 노드 객체는 `bt.root.left`가 참조하고 있으므로 가비지 컬렉팅 되지 않습니다.  
`node3`가 가리키는 노드 객체는 `bt.root.right`가 참조하고 있으므로 똑같이 가비지 컬렉팅 당하지 않습니다.  

이미지에서 보이는 3개의 노드들 모두 트리 인스턴스 내부적으로 참조되는 상황이기에 전역 실행 컨텍스트에서 참조할 의미가 없는 상황이 되었습니다.
트리 내부가 아닌 외부에서 노드들을 참조하고 있다면 트리에서 삭제 연산을 통해 노드들을 지운다 하더라도 외부 식별자들에 의해 노드들이 참조되고 있어 가비지 컬렉터가  
메모리에서 삭제하지 않아므로 불필요하게 메모리만 낭비하게 됩니다.  
그러므로 외부의 식별자가 노드들을 가리키는 상황을 제거하여 코드를 작성할 필요가 있어보입니다.

```js
bt.insert(new BinaryTreeNode(1)); // this.root -> node1
bt.insert(new BinaryTreeNode(2)); // this.root.left -> node2
bt.insert(new BinaryTreeNode(3)); // this.root.right -> node3;
```
전역 실행컨텍스트에서 노드들을 참조하던 식별자들이 모두 제거되었습니다.  
더군다나 코드도 간결해졌습니다.

### insert 메서드 연산이 트리 내 모든 노드에 적용되도록 코드 개선
```js
insert(startNode, newNode) {
  if (!value) return;

  const newNode = new BinaryTreeNode(value);
  if (this.root === null) return (this.root = newNode);

  if (!startNode) return;
  let currentNode = startNode;

  if (!currentNode.left) return (currentNode.left = newNode);
  if (!currentNode.right) return (currentNode.right = newNode);

  this.insert(currentNode.left, value);
}
```

개선된 `insert` 메서드가 정상 작동하는지 확인합니다.
```js
const bt = new BinaryTree();
const values = [10, 20, 30, 40, 50, 60, 70];
for (const value of values) {
  bt.insert(bt.root, new BinaryTreeNode(value));
}
```

<img width="633" alt="image" src="https://github.com/NEARworld/ds/assets/102969108/5946e0ab-bddd-47e2-9560-083af2fe9215">

에러 없이 코드가 종료되었습니다.

### 순회 (Traverse)

이진 트리를 순회하는 방식은 3가지 존재합니다.

1. 전위 순회 (preorder traverse): 루트 -> 왼쪽 하위 트리 -> 오른쪽 하위 트리
2. 중위 순회 (inorder traverse): 왼쪽 하위 트리의 끝 -> 루트 -> 오른쪽 하위 트리
3. 후위 순회 (postorder traverse): 왼쪽 하위 트리 -> 오른쪽 하위 트리 -> 루트

전, 중, 후의 기준은 루트 노드입니다.  

### 전위 순회
```js
preOrderTraverse(startNode) {
  if (!startNode) return;

  console.log(startNode.value);
  if (startNode.left) preOrderTraverse(startNode.left);
  if (startNode.right) preOrderTraverse(startNode.right);
}
```

### 중위 순회
```js
inOrderTraverse(startNode) {
  if (!startNode) return;

  if (startNode.left) inOrderTraverse(startNode.left);
  console.log(startNode.value);
  if (startNode.right) inOrderTraverse(startNode.right);
}
```

### 후위 순회
```js
postOrderTraverse(startNode) {
  if (!startNode) return;

  if (startNode.left) postOrderTraverse(startNode.left);
  if (startNode.right) postOrderTraverse(startNode.right);
  console.log(startNode);
}
```
