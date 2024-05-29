export const filters = [
    {
        id: "price",
        name:"Price",
        options:[
            { value:"<200", label:"Below 300 ETB"},
            { value:"200-500", label:"200ETB-500ETB"},
            { value:"500-800", label:"500ETB-800ETB"},
            { value:"800-1100", label:"800ETB-1100ETB"},
            { value:">1,100", label:"Above 1,100ETB"},
        ]
    },
    {
        id: "stock",
        name:"Avaliability",
    options:[
        { value:"in_stock", label:"In Stock"},
        { value:"out_of_stock", label:"Out Of Stock"},
    ]
    },
];

export const sortOptions =[
    { name:"Price: Low to High", query: "price_low", current: false },
    { name:"Price: High to Low", query: "price_high", current: false },
];