#include <iostream>
#include <stdlib.h>
#include <time.h>

using namespace std;

const string choices[3] {"Pedra", "Papel", "Tesoura"};
int userChoice;
int pc;

int main(){
    while(true){
        srand ( time(NULL) );
        pc = rand() % 3;

        cout << "Pedra (0), Papel (1) ou tesoura (2)?" << endl;
        cin >> userChoice;

        if(userChoice == 0 && pc == 1){
            cout << "Perdeste, papel vence pedra" << endl;
        }
        else if(userChoice == 0 && pc == 2){
            cout << "Ganhaste!!! Pedra vence tesoura" << endl;
        }
        else if(userChoice == 1 && pc == 0){
            cout << "Ganhaste!!! Papel vence pedra" << endl;
        }
        else if (userChoice == 1 && pc == 2){
            cout << "Perdeste, tesoura vence papel" << endl;
        }
        else if(userChoice == 2 &&  pc == 0){
            cout << "Perdeste, pedra vence tesoura" << endl;
        }
        else if(userChoice == 2 && pc == 1){
            cout << "Ganhaste!!! Tesoura vence papel" << endl;
        }
        else{
            cout << "Empate!!!" << endl;
        }
    }
}