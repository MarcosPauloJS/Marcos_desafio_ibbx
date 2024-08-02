# Desafio IBBX
O desafio é montar uma aplicação front-end e uma back-end para coletar e
exibir dados de sensores cadastrados em ativos.
A aplicação deve ser capaz de cadastrar, listar e deletar ativos, bem como
cadastrar, listar e deletar sensores nesses ativos. Deve também ter um cadastro,
listagem e deleção de coletas desses sensores e a exibição dessas coletas em
um gráfico.
Todo ativo deve ter nome e id, todo sensor deve ter nome, id e assetId e toda
coleta deve ter data, valor e sensorId.

### Design
Um prototico foi criado no figma para guiar o desenvolmento do front
![desafio IBBX imagem do design](https://github.com/MarcosPauloJS/Marcos_desafio_ibbx/ibbx-design.png)
### Frontend
Frontend foi criado com reactjs versão 18 usando vite, styled components para criar todos os componentes e estilizações e por fim a library echarts-for-react uma abstração da library echarts para react

### Backend
Frontend foi criado com serveless e serveless offline para simular o apiGateway, para armazenamento dos dados foi utilizado json-db para criar um arquivo json com os dados

### Como rodar o projeto
##### Api
1. instale as dependecias com ˋˋˋnpm installˋˋˋ
2. Rode o projeto com ˋˋˋnpx serverless offlineˋˋˋ
3. ou em modo de desenvolvimento ˋˋˋnpm run devˋˋˋ
> Em modo de desenvolvimento o nodemon reiniciar o servidor a cada alteração dos arquivos JS

##### Frontend
1. instale as dependecias com ˋˋˋnpm installˋˋˋ
2. Rode o projeto com ˋˋˋnpm run devˋˋˋ


