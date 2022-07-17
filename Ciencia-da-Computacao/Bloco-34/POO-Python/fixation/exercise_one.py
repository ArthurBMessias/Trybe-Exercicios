class VideoGame:
    def __init__(self, marca, valor):
        self.marca = marca
        self.valor = valor


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.videogame = None

    def compar_videogame(self, videogame: VideoGame):
        if videogame.valor <= self.saldo_na_conta:
            self.saldo_na_conta -= videogame.valor
            self.videogame = videogame
            return videogame

        def __str__(self) -> str:
            return f"""
        - Nome do comprador: {self.nome}
        - Saldo na conta é de: {self.videogame}
        """


videogame_sony = VideoGame("Sony", 3000)
pessoa_compradora = Pessoa("Arthur", 3500)


print(pessoa_compradora.compar_videogame(videogame_sony))
