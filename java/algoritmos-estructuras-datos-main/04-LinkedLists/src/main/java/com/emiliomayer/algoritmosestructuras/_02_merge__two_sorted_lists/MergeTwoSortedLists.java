package com.emiliomayer.algoritmosestructuras._02_merge__two_sorted_lists;

import com.emiliomayer.algoritmosestructuras._00_linkedlist.Node;

/*
 * Escribe un algoritmo para combinar dos listas enlazadas simples ordenadas.
 * El resultado debe ser una única lista enlazada ordenada. Devuelve su head.
 *
 * Ejemplo:
 *  Input: 1->2->4->6, 2->3->5
 *  Output: 1->2->2->3->4->5->6
 */
public class MergeTwoSortedLists {

  public Node mergeTwoLists(Node list1, Node list2) {
    Node aux = new Node(-1);
    Node current =  aux;

    while(list1 != null && list2 != null){
      if (list1.value <= list2.value){

        current.next = list1;
        list1 = list1.next;

      }else {

        current.next = list2;
        list2 = list2.next;

      }
      current = current.next;
    }

    if (list1 != null){
      appendToList(current, list1);
    }else {
      appendToList(current, list2);
    }
    return aux.next;
  }

  private void appendToList(Node current, Node listToAppend){
    while (listToAppend != null){
      current.next = listToAppend;
      listToAppend = listToAppend.next;
      current = current.next;
    }
  }

  public static void main(String[] args) {
    MergeTwoSortedLists merge = new MergeTwoSortedLists();

    // Crear lista 1: 1->2->4->6
    Node list1 = new Node(1);
    list1.next = new Node(2);
    list1.next.next = new Node(4);
    list1.next.next.next = new Node(6);

    // Crear lista 2: 2->3->5
    Node list2 = new Node(2);
    list2.next = new Node(3);
    list2.next.next = new Node(5);

    System.out.println("Lista 1:");
    printList(list1);

    System.out.println("Lista 2:");
    printList(list2);

    // Combinar las listas
    Node result = merge.mergeTwoLists(list1, list2);

    System.out.println("Lista combinada:");
    printList(result);
  }

  // Método auxiliar para imprimir la lista
  private static void printList(Node head) {
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
}


