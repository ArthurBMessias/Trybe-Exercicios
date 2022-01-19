# Primeiro deve definir a imagem que vai ser utilizada
FROM nginx

# Copiar o arquivo para dentro da imagem
COPY ./index.html /usr/share/nginx/html

# Especificar em qual porta a apĺicação vai rodar
EXPOSE 3000

# Setar variáveis de ambientes (semelhante as const para armazenar valores - API é a chave nome da var e o valor relacionado a ela)
ENV API_URL = http://localhost:800/api/

# Definir qual pasta de trabalho da imagem
WORKDIR /usr/share/nginx/html

# Permite rodar qualquer comando bash na hora que a imagem for criada -npm install, rm, touch...
RUN ls 

# Comando para definir qual executavel nosso container vai usar
ENTRYPOINT [ "/usr/sbin/nginx" ]

# Configurar os parametros que serão executados pelo entrypoint
CMD [ "-g", "daemon off;" ]

# Resta "buildar" a imagem (dentro do diretório do dockerfile) com o comando docker build .
# Vai baixar as imagens base do nginx e suas camadas...

# docker image para listar todas as imagens

# por fim, subir o container rodando em background fazendo o mapeamento da porta rodando na porta local escolhida fazendo o bind com a porta 80 e passar a ID/name -- docker container run -d -p 300:80