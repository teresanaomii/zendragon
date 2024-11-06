#include <stdio.h>

int main(){
	int awal[100];
	int akhir[100];
	int weight[100];
	for(int i = 0; i < 25; i++){
		scanf("%d-%d (%d)", &awal[i], &akhir[i], &weight[i]);
	}
	int hasil = 0;
	for(int i = 0; i < 25; i++){
		printf("%d\n", weight[i]);
		hasil += weight[i];
	}
	printf("hasil: %d\n", hasil);
}