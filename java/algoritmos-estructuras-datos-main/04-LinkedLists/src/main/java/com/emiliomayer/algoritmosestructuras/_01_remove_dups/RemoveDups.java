package com.emiliomayer.algoritmosestructuras._01_remove_dups;

import com.emiliomayer.algoritmosestructuras._00_linkedlist.Node;

import java.util.HashSet;

/*
 * Escribe un algoritmo para eliminar los elementos duplicados en una Lista enlazada
 *
 * Ejemplo:
 *  Input: 1->2->2->3->4->1
 *  Output: 1->2->3->4
 *
 * O(N)
 *
 */
public class RemoveDups {

  public void removeDups(Node head) {
    // Mostrar lista original
    System.out.print("Input: ");
    printList(head);

    if (head == null) return;

    HashSet<Integer> foundValues = new HashSet<>();
    Node current = head;
    foundValues.add(current.value);

    while (current != null && current.next != null) {
      if (!foundValues.add(current.next.value)) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }

    // Mostrar lista sin duplicados
    System.out.print("Output: ");
    printList(head);
  }

  // Método para imprimir la lista
  private void printList(Node head) {
    Node current = head;
    while (current != null) {
      System.out.print(current.value);
      if (current.next != null) {
        System.out.print("->");
      }
      current = current.next;
    }
    System.out.println();
  }

  public static void main(String[] args) {
    RemoveDups removeDups = new RemoveDups();
    Node head = new Node(1);
    head.next = new Node(2);
    head.next.next = new Node(2);
    head.next.next.next = new Node(3);
    head.next.next.next.next = new Node(4);
    head.next.next.next.next.next = new Node(1);

    removeDups.removeDups(head);
  }
}
