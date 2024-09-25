
/*Permite extraer datos de los params
consultar base de datos
comunicarse con otros servicios */
import { NextResponse } from "next/server";
export function GET(){
    return NextResponse.json("Hello World!");
}

export async function POST(request){
    const data = await request.json();
    console.log(data);
}