package com.emiliomayer.algoritmosestructuras.arraysstringshashtables._03_group_anagrams;

import java.util.*;

public class GroupAnagramsSorted {

    public List<List<String>> groupAnagrams(String[] strs) {
        if (strs == null || strs.length == 0) return Collections.emptyList();

        Map<String, List<String>> anagramMap = new HashMap<>();

        for (String word : strs) {
            // 1️ Convertimos la palabra a un array de caracteres
            char[] chars = word.toCharArray();

            // 2 Ordenamos los caracteres alfabéticamente
            Arrays.sort(chars);

            // 3️ Creamos una cadena con el resultado ordenado (la "firma" del anagrama)
            String key = new String(chars);

            // 4️ Agrupamos usando la firma como clave
            anagramMap.computeIfAbsent(key, k -> new ArrayList<>()).add(word);
        }

        // 5️ Retornamos los grupos
        return new ArrayList<>(anagramMap.values());
    }

    public static void main(String[] args) {
        GroupAnagramsSorted ga = new GroupAnagramsSorted();
        String[] words = {"saco", "arresto", "programa", "rastreo", "caso"};
        System.out.println(ga.groupAnagrams(words));
    }
}

