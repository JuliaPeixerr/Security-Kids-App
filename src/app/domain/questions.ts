export interface Question {
    id: number,
    description: string
}

export interface Answer {
    id: number,
    description: string,
    questionCode: number,
    rigth: boolean
}

export const questions: Question[] = [
    {
        id: 1,
        description: "Qual são os nomes dos dois ratos símbolo da Disney?",
    },
    {
        id: 2,
        description: "O que as abelhas são conhecidas por fabricar?",
    },
    {
        id: 3,
        description: "Qual era o nome da boneca do Sítio do Pica Pau Amarelo?",
    },
    {
        id: 4,
        description: 'Complete o ditado popular "Pode tirar o cavalinho da_____".',
    },
    {
        id: 5,
        description: "Quantos continentes existem no mundo?",
    },
];

export const answers: Answer[] = [
    {
        id: 1,
        description: "Mickey e Minnie",
        questionCode: 1,
        rigth: true
    },
    {
        id: 2,
        description: "Donald e Margarida",
        questionCode: 1,
        rigth: false
    },
    {
        id: 3,
        description: "Pateta e Max",
        questionCode: 1,
        rigth: false
    },
    {
        id: 4,
        description: "Ariel e Eric",
        questionCode: 1,
        rigth: false
    },

    {
        id: 5,
        description: "Algodão",
        questionCode: 2,
        rigth: false
    },
    {
        id: 6,
        description: "Mel",
        questionCode: 2,
        rigth: false
    },
    {
        id: 7,
        description: "Seiva",
        questionCode: 2,
        rigth: false
    },
    {
        id: 8,
        description: "Xarópe",
        questionCode: 2,
        rigth: false
    },

    {
        id: 9,
        description: "Emília",
        questionCode: 3,
        rigth: false
    },
    {
        id: 10,
        description: "Cuca",
        questionCode: 3,
        rigth: false
    },
    {
        id: 11,
        description: "Marina",
        questionCode: 3,
        rigth: false
    },
    {
        id: 12,
        description: "Cecília",
        questionCode: 3,
        rigth: false
    },

    {
        id: 13,
        description: "rua",
        questionCode: 4,
        rigth: false
    },
    {
        id: 14,
        description: "lua",
        questionCode: 4,
        rigth: false
    },
    {
        id: 15,
        description: "casa",
        questionCode: 4,
        rigth: false
    },
    {
        id: 16,
        description: "chuva",
        questionCode: 4,
        rigth: false
    },

    {
        id: 17,
        description: "5",
        questionCode: 5,
        rigth: false
    },
    {
        id: 18,
        description: "7",
        questionCode: 5,
        rigth: false
    },
    {
        id: 19,
        description: "6",
        questionCode: 5,
        rigth: false
    },
    {
        id: 20,
        description: "4",
        questionCode: 5,
        rigth: false
    },
];
