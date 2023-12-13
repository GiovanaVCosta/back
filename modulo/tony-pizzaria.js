/************************************************************************************************
 * Objetivo: Criar uma API que contenha dados da Tony Pizzaria. 
 * Autor: Giovana Vieira
 * Data: 13/12/2023
 * Versão: 1.0
************************************************************************************************/

var clientes = {

    cliente:

        [
            {
                id: 1,
                nome: 'GIovana Vieira ',
                email: 'givdc@gmail.com',
                senha: '123',
                telefone: '(11) 933033102',
                foto_perfil: '',
                endereco: [
                    {
                        cep: '066122-160',
                        rua: 'Rua das Flores, 01',
                        complemento: 'casa',
                        bairro: 'Jardim dos matos',
                        estado: 'SP'

                    }
                ]
            },

            {
                id: 2,
                nome: 'Maria ',
                email: 'maria@gmail.com',
                senha: '123',
                telefone: '(11) 12345-4321',
                foto_perfil: '',
                endereco: [
                    {
                        cep: '066122-160',
                        rua: 'Rua das Flores, 02',
                        complemento: 'casa',
                        bairro: 'Jardim dos matos',
                        estado: 'SP'

                    }
                ]
            },
            {
                id: 3,
                nome: 'José',
                email: 'josse@gmail.com',
                senha: '123',
                telefone: '(11) 12345-9999',
                foto_perfil: '',
                endereco: [
                    {
                        cep: '066122-160',
                        rua: 'Rua das Flores, 03',
                        complemento: 'casa',
                        bairro: 'Jardim dos matos',
                        estado: 'SP'

                    }
                ]
            },
            {
                id: 4,
                nome: 'Ana ',
                email: 'ana@gmail.com',
                senha: '123',
                telefone: '(11) 12345-3210',
                foto_perfil: '',
                endereco: [
                    {
                        cep: '066122-160',
                        rua: 'Rua das Flores, 04',
                        complemento: 'casa',
                        bairro: 'Jardim dos matos',
                        estado: 'SP'

                    }
                ]
            },
            {
                id: 5,
                nome: 'Pedro ',
                email: 'pedro@gmail.com',
                senha: '123',
                telefone: '(11) 12345-4321',
                foto_perfil: '',
                endereco: [
                    {
                        cep: '066122-160',
                        rua: 'Rua das Flores, 05',
                        complemento: 'casa',
                        bairro: 'Jardim dos matos',
                        estado: 'SP'

                    }
                ]
            },
            {
                id: 6,
                nome: 'Carlo',
                email: 'carlo@gmail.com',
                senha: '123',
                telefone: '(11) 12345-4321',
                foto_perfil: '',
                endereco: [
                    {
                        cep: '066122-160',
                        rua: 'Rua das Flores, 06',
                        complemento: 'casa',
                        bairro: 'Jardim dos matos',
                        estado: 'SP'

                    }
                ]
            }
        ]

}
      

var categorias = {

    categoria:
        [
            {
                id: 1,
                nome_categoria: 'Geral',
                icon: ''
            },

            {
                id: 2,
                nome_categoria: 'Pizza',
                icon: ''
            },

            {
                id: 3,
                nome_categoria: 'Bebida',
                icon: ''
            },

            {
                id: 4,
                nome_categoria: 'Sobremesa',
                icon: ''
            },

            {
                id: 5,
                nome_categoria: 'Favoritos',
                icon: ''
            }

        ]

}

var produtos = {

    produto: [

        {
            id: 1,
            nome_produto: 'Pizza de Calabresa com Queijo',
            valor: 'R$16,00',
            foto_produto: '',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            categoria: categorias.categoria[1],
            avaliacao: 5,
            comentario:
                [

                    {
                        cliente: clientes.cliente[0],
                        texto: 'Deliciosa!',
                        data: '12/09/2022'
                    },

                    {
                        cliente: clientes.cliente[1],
                        texto: 'Pizza muito boa!',
                        data: '15/03/2022'
                    }

                ]


        },

        {
            id: 2,
            nome_produto: 'Pizza de Peperoni com Queijo',
            valor: 'R$19,00',
            foto_produto: '',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            categoria: categorias.categoria[1],
            avaliacao: 4,
            comentario:
                [

                    {
                        cliente: clientes.cliente[2],
                        texto: 'A MELHOR PIZZA ',
                        data: '17/10/2022'
                    },

                    {
                        cliente: clientes.cliente[3],
                        texto: 'Tava muito boa, mas não tanto!',
                        data: '07/02/2022'
                    }

                ]
        },

        {
            id: 3,
            nome_produto: 'Coca-Cola',
            valor: 'R$14,99',
            foto_produto: '',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            categoria: categorias.categoria[2],
            avaliacao: 5,
            comentario:
                [

                    {
                        cliente: clientes.cliente[2],
                        texto: 'Coca geladinha, hmmmm',
                        data: '17/10/2022'
                    }

                ]
        },

        {
            id: 4,
            nome_produto: 'Cerveja Heineken',
            valor: 'R$17,99',
            foto_produto: '',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            categoria: categorias.categoria[2],
            avaliacao: 5,
            comentario:
                [

                    {
                        cliente: clientes.cliente[2],
                        texto: 'Muito cremosa!',
                        data: '25/04/2022'
                    }

                ]
        },

        {
            id: 5,
            nome_produto: 'Pizza de peperoni com queijo e tomate',
            valor: 'R$21,00',
            foto_produto: '',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            categoria: categorias.categoria[1],
            avaliacao: 5,
            comentario:
                [

                    {
                        cliente: clientes.cliente[2],
                        texto: 'A melhor!!!',
                        data: '21/05/2022'
                    }

                ]
        },

        {
            id: 6,
            nome_produto: 'Pizza brotinho com queijo e tomate',
            valor: 'R$12,00',
            foto_produto: '',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            categoria: categorias.categoria[1],
            avaliacao: 5,
            comentario:
                [

                    {
                        cliente: clientes.cliente[2],
                        texto: 'O melhor broto da região',
                        data: '17/10/2023'
                    }

                ]
        }




    ]

}

module.exports = {
    clientes,
    categorias,
    produtos
}