package com.emiliomayer.algoritmosestructuras._00_stackqueue;

public class MyStack {
  private Node top;

  public void push(int value) {
    Node newTop = new Node(value);
    newTop.next = top;
    top = newTop;
  }

  public int pop() {

    int topValue = peek();
    top = top.next;
    return topValue;
  }

  public int peek() {
    if (isEmpty()) {
      throw new MyEmptyStackException();
    }

    return top.value;
  }

  public boolean isEmpty() {
    return top == null;
  }
}
