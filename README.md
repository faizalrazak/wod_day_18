# wod_day_18
Asia Dev Academy in a string


We say that a string, s , contains the word asiadevacademy if a subsequence of the characters in s spell the word asiadevacademy. For example, asiadeevvvacadeemy does contain asiadevacademy, but asiadevacdemmmmy does not (the characters all appear in the same order, but it's missing a forth a).

More formally, let  be the respective indices of a, s, i, a, d, e, v, a, c, a, d, e, m, y in string . If  is true, then  contains asiadevacademy.

You must answer q queries, where each query consists of a string,s . For each query, print YES on a new line if contains asiadevacademy; otherwise, print NO instead.

Input Format

The first line contains an integer denoting  (the number of queries). 
Each line of the  subsequent lines contains a single string denoting .

Constraints

Output Format

For each query, print YES on a new line if  contains hackerrank; otherwise, print NO instead.

Sample Input 0

2
iloveasiadeveloperacademy
asiaacademyisthebest
Sample Output 0

YES
NO
