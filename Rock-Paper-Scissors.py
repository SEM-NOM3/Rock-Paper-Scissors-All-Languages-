import random

choices = ["pedra", "papel", "tesoura"]
userChoice = None
pc = None

while True:
    pc = random.choice(choices)
    userChoice = input("Pedra, Papel ou Tesoura: ")

    if userChoice.lower() in choices:
        if userChoice.lower() == pc:
            print("EMPATE!!!")
        elif userChoice.lower() == "pedra" and pc == "papel":
            print("Perdeste, papel vence pedra!")
        elif userChoice.lower() == "pedra" and pc == "tesoura":
            print("Ganhaste, pedra vence tesoura!")
        elif userChoice.lower() == "papel" and pc == "pedra":
            print("Ganhaste, pepel vence pedra!")
        elif userChoice.lower() == "papel" and pc == "tesoura":
            print("Perdeste, tesoura vence papel")
        elif userChoice.lower() == "tesoura" and pc == "pedra":
            print("Perdeste, pedra vence tesoura!")
        elif userChoice.lower() == "tesoura" and pc == "papel":
            print("Ganhaste, tesoura vence papel!")
    else:
        print("Digite uma das opções acima!")