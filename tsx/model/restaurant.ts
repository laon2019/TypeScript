// let data = {
//     name:'laon식당',
//     category:'western',
//     address:{
//       city:'incheoi',
//       detail:'somewhere',
//       zipCode:234151
//     },
//     menu:[
//     {
//       name:"rose pasta",
//       price:2000,
//       category:"PASTA"
//     },
//     {
//       name:"garlic steak",
//       price:3000,
//       category:"STEAK"
//     }
//   ]
//   }

export type Restaurant = {
    name:string;
    category:string;
    address:Address;
    menu:Menu[];
}

export type Address = {
    city:string;
    detail:string;
    zipCode?:number;
}

export type Menu = {
    name:string;
    price:number;
    category:string;
}

export type AddressWithoutZip = Omit<Address, 'zipCode'>
export type RestaurantOnlyCategory = Pick<Restaurant, 'category'>

export type ApiREsponse<T> = {
    data:T[],
    totalPage:number,
    page:number
}

export type RestaurantResponse = ApiREsponse<Restaurant>
export type MenuResponse = ApiREsponse<Menu>