package com.emiliomayer.algoritmosestructuras.arraysstringshashtables._04_zero_matrix;


import java.util.List;

/*
 * Dada una matriz, escribe un algoritmo para establecer ceros en la fila F y columna C si existe un
 * 0 en la celda F:C
 *
 * Ejemplo:
 *  Input: 2 1 3 0 2
 *         7 4 1 3 8
 *         4 0 1 2 1
 *         9 3 4 1 9
 *
 *  Output: 0 0 0 0 0
 *          7 0 1 0 8
 *          0 0 0 0 0
 *          9 0 4 0 9
 *
 * Temporal O(F*C + z*(F+C))
 * Espacial O(F*C) -> O(1)?
 */
public class ZeroMatrix {

  public void zeroMatrix(int[][] matrix) {
    boolean firstRowHasZero = hasFirstRowAnyZero(matrix);
    boolean firstColHasZero = hasFirstColAnyZero(matrix);
  }

  //Recorrer la primer fila para comprobar si tiene algun 0
  private boolean hasFirstRowAnyZero(int [][] matrix){

    return false;
  }

  private boolean hasFirstColAnyZero(int[][] matrix) {
    return false;
  }

}
