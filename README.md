# Weather App

Este é um aplicativo de clima desenvolvido usando ReactJS, TypeScript e a API OpenWeatherMap. O aplicativo permite que os usuários vejam a previsão do tempo para sua localização atual ou para qualquer outra cidade do mundo.

## Visão Geral

O Weather App fornece informações detalhadas sobre o clima, incluindo temperatura, condições meteorológicas e previsões para diferentes localidades. Os usuários podem buscar pelo clima em sua cidade atual ou em qualquer cidade ao redor do mundo, proporcionando uma visão clara e útil das condições climáticas.

## Funcionalidades

- **Previsão do Tempo Atual**: Exibe a condição meteorológica atual para a localização do usuário ou para uma cidade especificada.
- **Previsão para Cidades em Todo o Mundo**: Permite que os usuários busquem e visualizem o clima para qualquer cidade global.
- **Interface Intuitiva**: Design responsivo e fácil de usar para uma melhor experiência do usuário.
- **Testes Automatizados**: Inclui testes usando React Testing Library para garantir a qualidade e confiabilidade da aplicação.

## Tecnologias Utilizadas

- **Framework**: ReactJS
- **Linguagem**: TypeScript
- **API**: OpenWeatherMap API (para obter dados meteorológicos)
- **Estilização**: HTML e CSS
- **Testes**: React Testing Library

## Como Executar o Projeto

1. **Clone este repositório**:

   ```bash
   git clone git@github.com:chatacks/weather-api.git
   cd weather-api
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

3. **Configure a API**:

   - Crie uma conta no [OpenWeatherMap](https://openweathermap.org/) e obtenha uma chave de API.
   - Adicione sua chave de API ao arquivo de configuração `.env` na raiz do projeto (crie o arquivo se não existir). Por exemplo:
     ```
     REACT_APP_OPENWEATHERMAP_API_KEY=your_api_key_here
     ```

4. **Inicie a aplicação**:

   ```bash
   npm run dev || npm start
   ```

5. **Acesse a aplicação**:

   Abra o navegador e vá para `http://localhost:3000` para visualizar a aplicação de clima.

## Testes

Para executar os testes da aplicação, utilize o seguinte comando:

```bash
npm test
```

Os testes garantem que os componentes e funcionalidades principais da aplicação estejam funcionando corretamente.

## Contribuição

Contribuições são bem-vindas! Você pode abrir issues para relatar problemas ou sugerir melhorias. Pull requests também são apreciados.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Referências

- [Documentação do React](https://reactjs.org/)
- [Documentação do TypeScript](https://www.typescriptlang.org/)
- [OpenWeatherMap API](https://openweathermap.org/api)
- [Documentação do React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
