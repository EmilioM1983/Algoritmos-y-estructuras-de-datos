package com.emiliomayer.algoritmosestructuras.arraysstringshashtables._04_zero_matrix;

public class ZeroMatrix {

    public void zeroMatrix(int[][] matrix) {
        if (matrix.length == 0) return;

        boolean firstRowHasZero = hasFirstRowAnyZero(matrix);
        boolean firstColHasZero = hasFirstColAnyZero(matrix);

        checkForZeros(matrix);

        processRows(matrix);
        processCols(matrix);

        if (firstRowHasZero) {
            setRowToZero(matrix, 0);
        }

        if (firstColHasZero) {
            setColToZero(matrix, 0);
        }
    }

    // Comprobar si en la primer fila hay 0
    private boolean hasFirstRowAnyZero(int[][] matrix) {
        for (int i = 0; i < matrix[0].length; i++) {
            if (matrix[0][i] == 0) {
                return true;
            }
        }
        return false;
    }
    // Comprobar si en la primer columna hay 0
    private boolean hasFirstColAnyZero(int[][] matrix) {
        for (int i = 0; i < matrix.length; i++) {
            if (matrix[i][0] == 0) {
                return true;
            }
        }
        return false;
    }

    // Crea los “marcadores” dentro de la matriz
    private void checkForZeros(int[][] matrix) {
        for (int row = 1; row < matrix.length; row++) {
            for (int col = 1; col < matrix[0].length; col++) {
                if (matrix[row][col] == 0) {
                    matrix[row][0] = 0;
                    matrix[0][col] = 0;
                }
            }
        }
    }

    // Comprobar si en resto de las filas hay 0
    private void processRows(int[][] matrix) {
        for (int row = 1; row < matrix.length; row++) {
            if (matrix[row][0] == 0) {
                setRowToZero(matrix, row);
            }
        }
    }
    // Setear a 0 la fila
    private void setRowToZero(int[][] matrix, int row) {
        for (int col = 0; col < matrix[0].length; col++) {
            matrix[row][col] = 0;
        }
    }

    // Comprobar si en el resto de las columnas hay 0
    private void processCols(int[][] matrix) {
        for (int col = 1; col < matrix[0].length; col++) {
            if (matrix[0][col] == 0) {
                setColToZero(matrix, col);
            }
        }
    }

    // Setear a 0 la columan
    private void setColToZero(int[][] matrix, int col) {
        for (int row = 0; row < matrix.length; row++) {
            matrix[row][col] = 0;
        }
    }

    public static void main(String[] args) {
        ZeroMatrix zeroMatrix = new ZeroMatrix();
        int[][] matrix = {
                {2, 1, 3, 0, 2},
                {7, 4, 1, 3, 8},
                {4, 0, 1, 2, 1},
                {9, 3, 4, 1, 9}
        };

        System.out.println("Matriz original:");
        printMatrix(matrix);

        zeroMatrix.zeroMatrix(matrix);

        System.out.println("\nMatriz después de zeroMatrix:");
        printMatrix(matrix);
    }

    private static void printMatrix(int[][] matrix) {
        for (int[] row : matrix) {
            for (int val : row) {
                System.out.print(val + " ");
            }
            System.out.println();
        }
    }
}