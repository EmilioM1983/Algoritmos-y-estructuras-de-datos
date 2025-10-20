package com.emiliomayer.algoritmosestructuras._03_nth_node_to_last;

import com.emiliomayer.algoritmosestructuras._00_linkedlist.Node;

/*
 * Dada una lista enlazada simple y un valor N, devuelve el nodo N empezando por el final
 *
 * Ejemplo:
 *  Input: 1->2->4->6, 2
 *  Output: 4
 * Para evitar recorrer 2 veces la lista se utiliza la técnica runner
 *
 * Complejidad Temporal: O(n)
 * Complejidad Espacial: O(1)
 */
public class NthNodeToLast {

  public Node nthNodeToLast(Node head, int n){
    Node p1 = head;
    Node p2 = head;

    for (int i = 0; i < n; i++) {
      if (p1 == null) return null;
      p1 = p1.next;
    }
    while (p1 != null){
      p1 = p1.next;
      p2 = p2.next;
    }
    return p2;
  }

  public static void main(String[] args) {
    NthNodeToLast nthNode = new NthNodeToLast();

    // Crear lista: 1->2->4->6
    Node list = new Node(1);
    list.next = new Node(2);
    list.next.next = new Node(4);
    list.next.next.next = new Node(6);

    System.out.println("Lista: 1->2->4->6");
    System.out.println("n=2 (enesimo): " + nthNode.nthNodeToLast(list, 2).value);

    // Probar caso donde n es mayor que la longitud
    Node result = nthNode.nthNodeToLast(list, 5);
    System.out.println("n=5 (fuera de rango): " + result);
  }
}
