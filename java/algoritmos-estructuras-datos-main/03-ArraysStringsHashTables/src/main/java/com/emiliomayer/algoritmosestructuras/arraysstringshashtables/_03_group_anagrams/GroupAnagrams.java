package com.emiliomayer.algoritmosestructuras.arraysstringshashtables._03_group_anagrams;

import java.util.*;

/*
 * Un anagrama es una palabra creada a partir de la reordenación de las letras de otra palabra. Ej: saco - caso
 * Dado un array de strings, devuelve los anagramas agrupados. Cualquier orden es válido.
 *
 * Ejemplo:
 *  Input: words = ["saco", "arresto", "programa", "rastreo", "caso"].
 *  Output: [["saco", "caso"], ["arresto", "rastreo"], ["programa"]].
 */
public class GroupAnagrams {

  public List<List<String>> groupAnagrams(String[] words) {
    if (words == null || words.length == 0) return Collections.emptyList();

    Map<String, List<String>> anagramMap = buildAnagramMap(words);

    return new ArrayList<>(anagramMap.values());
  }

  /*
  Agrupar las palabras en anagramas en un hashmap que contenga
  como clave el hash de la funcion getAnagramaHash y
  como valor la lista de palabras que son anagramas
   */
  private Map<String, List<String>> buildAnagramMap(String[] words){
    Map<String, List<String>> map = new HashMap<>();
    for (String word : words){
      String hash = getAnagramaHash(word);
      if (!map.containsKey(hash)){
        map.put(hash, new ArrayList<>());
      }
      map.get(hash).add(word);
    }
    return map;
  }

  //Obtener el hash de un anagrama
  private String getAnagramaHash(String s){
    int[] letterCount = new int[26];
    for(int c : s.toCharArray()){
      letterCount[c - 'a']++;
    }
    return Arrays.toString((letterCount));
  }

  public static void main(String[] args) {
    GroupAnagrams ga = new GroupAnagrams();
    String[] words = {"saco", "arresto", "programa", "rastreo", "caso"};
    System.out.println(ga.groupAnagrams(words));
  }

}
