package com.emiliomayer.algoritmosestructuras._05_swap_nodes_in_pairs;

import com.emiliomayer.algoritmosestructuras._00_linkedlist.Node;

/*
 * Escribe un algoritmo que intercambie parejas de nodos adyacentes sin
 * modificar el valor interno de los nodos.
 *
 * Ejemplo:
 *  Input: 1->2->4->6->8
 *  Output: 2->1->6->4->8
 */
public class SwapNodesInPairs {

  public Node swapNodesInPairs(Node head) {
    if (head == null || head.next == null) return head;

    Node temporal = head.next.next; //4->6->8
    head.next.next = head; //1->2->1...
    head = head.next; //2->1...
    head.next.next = swapNodesInPairs(temporal);
    return head;
  }
}
