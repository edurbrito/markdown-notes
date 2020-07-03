---
id: "custom"
---

<!-- @import "q&a-style.less" -->

<!-- https://detexify.kirelabs.org/classify.html -->
<!-- https://shd101wyy.github.io/markdown-preview-enhanced/#/ -->

<link href="https://fonts.googleapis.com/css2?family=Handlee&display=swap" rel="stylesheet">

<!--

<table>
  <tr>
    <th></th>
  </tr>
  <tr>
    <td></td>
  </tr>

  <tr>
    <th></th>
  </tr>
  <tr>
    <td></td>
  </tr>
</table>

-->

# Funcionamento Correto

## Qualidades Principais de um Algoritmo

<table>
  <tr>
    <th>Quais são as 3 qualidades principais a analisar num algoritmo?</th>
  </tr>
  <tr>
    <td>
    
  * Eficiência temporal
  * Eficiência Espacial
  * Funcionamento Correto
  
  </td>
  </tr>
  <tr>
    <th>Que técnicas de análise estática e dinâmica existem?</th>
  </tr>
  <tr>
    <td>
    
  * Estática: Análise da complexidade assintótica e Prova ou Argumentação sobre correção.
  * Dinâmica: Testes de desempenho - profiling e Testes pontuais/aleatórios.

    </td>
  </tr>
  <tr>
    <th>O que são pré-condições e pós-condições?</th>
  </tr>
  <tr>
    <td>
  
  * Entradas: Dados de entrada e restrições associadas (pré-condições)
  * Saídas: Dados de saída e restrições associadas (pós-condições)
    
    </td>
  </tr>
</table>

-------

## Invariantes e variantes de ciclos

<table>
  <tr>
    <th>O que são invariantes e variantes de ciclos?</th>
  </tr>
  <tr>
    <td>

  A maioria dos algoritmos são iterativos, com um ciclo principal.

  <br>
  
  * Para provar que um ciclo está correto, temos de encontrar um invariante do ciclo - uma expressão booleana (nas variáveis do ciclo) ‘sempre verdadeira’ ao longo do ciclo.
  * Para provar que um ciclo termina, temos de encontrar um variante do ciclo – uma função (nas variáveis do ciclo).
    
    </td>
  </tr>
  <tr>
    <th>
    
  Quais são as 3 propriedades que temos de verificar num **invariante** de ciclo? 
    </th>
  </tr>
  <tr>
    <td>
    
  * é verdadeira inicialmente, i.e., é implicada pela pré-condição;
  * é mantida em cada iteração, i.e., é verdadeira no fim de cada iteração, assumindo que é verdadeira no início da iteração;
  * quando o ciclo termina, garante (implica) a pós-condição.
    
    </td>
  </tr>

  <tr>
    <th>
  
  Quais são as 3 propriedades que temos de verificar num **variante** de ciclo? 
    </th>
  </tr>
  <tr>
    <td>
    
  * inteira; 
  * positiva (ou não negativa); 
  * estritamente decrescente.
    
    </td>
  </tr>
</table>