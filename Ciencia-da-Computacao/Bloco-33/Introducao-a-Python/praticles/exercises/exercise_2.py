# https://pt.stackoverflow.com/questions/201223/como-somar-elementos-de-uma-lista-e-devolver-o-resultado-como-um-n%C3%BAmero-inteiro


def arithmetic_average(sum_numbers):
    result = 0
    for number in sum_numbers:
        result += number
    return result / len(sum_numbers)


print(arithmetic_average([1, 2, 4, 5]))
