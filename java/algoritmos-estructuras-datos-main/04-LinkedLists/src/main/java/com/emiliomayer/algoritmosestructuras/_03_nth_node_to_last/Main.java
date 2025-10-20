package com.emiliomayer.algoritmosestructuras._03_nth_node_to_last;

import com.emiliomayer.algoritmosestructuras._00_linkedlist.Node;

public class Main {
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
