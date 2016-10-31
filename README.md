# Meteor

(tradução em andamento...)

Meteor é um ultra simples ambiente para o desenvolvimento de websites modernos.

Com Meteor você desenvolve aplicações:

* em Javascript puro
* envie dados em vez de HTML
* use bibliotecas open-source javascript que quiser

A documentação está disponível em  http://docsbr.meteor.com/

## Quick Start

Começo rápido:

    curl https://install.meteor.com | /bin/sh

Criar um projeto:

    meteor create try-meteor

Rodar:

    cd try-meteor
    meteor

Deploy para o mundo, de graça:

    meteor deploy try-meteor.meteor.com

## Começo demorado (para desenvolvedores)

Se você quiser rodar a versão mais nova, ou ajudar desenvolver Meteor, você pode rodar diretamente com um git checkout.

    git clone git://github.com/meteor/meteor.git
    cd meteor

Se você é o tipo de pessoa que gosta de desenvolver tudo do zero, você pode desenvolver 
todas as dependências do Meteor (node.js, npm, mongodb, etc) com o script disponível.
Isso requer git, um compilador C e C++, autotools e scons. Se você não rodar esse script,
Meteor vai automaticamente fazer o download dos binários pré compilados na primeira vez que você rodar.

    # OPCIONAL
    ./scripts/generate-dev-bundle.sh

Agora você pode rodar Meteor diretamente de um checkout (Se você não construiu a dependência bundle acima, vai demorar alguns minutos para fazer o download da versão pre-build.

    ./meteor --help

Com o checkout, você pode ler os documentos localmente. A pasta `/docs` é uma aplicação meteor
meteor application, então simplesmente acesse a pasta  `/docs` e rode a aplicação:

    cd docs/
    ../meteor

Você poderá ler os documentos localmente em seu browser em:
`http://localhost:3000/`

Nota: se você usar git checkout para rodar Meteor, não conseguirá rodar releases usando `--release`.

## Desinstalar Meteor

Meteor se instala dentro de sua pasta home. Para desinstalar, rode:

    rm -rf ~/.meteor/
    sudo rm /usr/local/bin/meteor

## Recursos para Desenvolvedores

Desenvolvendo uma aplicação com Meteor?

* Lista de novidades: inscreva-se em http://www.meteor.com/
* Dúvidas?: http://stackoverflow.com/questions/tagged/meteor
* Lista de emails para discussões e ajuda: https://groups.google.com/group/meteor-talk
* IRC: `#meteor` on `irc.freenode.net`

Interessado em contribuir com Meteor?

* Lista de emails do core desenvolvimento: https://groups.google.com/group/meteor-core
* Como contribuir: https://github.com/meteor/meteor/tree/devel/Contributing.md
